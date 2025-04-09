"use server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { type Repository } from "@/types/index";

const GITHUB_API_URL = "https://api.github.com/user/repos";
const OAUTH_PROVIDER = "github";

type FetchRepositoriesOptions = {
  page?: number;
  per_page?: number;
  sort?: "created" | "updated" | "pushed" | "full_name";
  direction?: "asc" | "desc";
};

export const getRepositories = async (
  options?: FetchRepositoriesOptions,
): Promise<Repository[] | null> => {
  try {
    const { userId } = await auth();
    if (!userId) {
      console.warn("Unauthorized attempt to access repositories");
      return null;
    }
    const client = await clerkClient();
    const token = await client.users.getUserOauthAccessToken(
      userId,
      OAUTH_PROVIDER,
    );

    const accessToken = token.data[0]?.token;
    if (!accessToken) {
      throw new Error("No GitHub access token found for user");
    }
    console.log("This is access token_______________", accessToken);

    const url = new URL(GITHUB_API_URL);
    if (options) {
      Object.entries(options).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.append(key, value.toString());
        }
      });
    }
    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "deployer",
      },
      cache: "no-store",
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        `GitHub API request failed: ${response.status} ${
          response.statusText
        } - ${JSON.stringify(errorData)}`,
      );
    }
    const repositories: Repository[] = await response.json();
    console.log(repositories);
    return repositories;
  } catch (error) {
    console.error("Failed to fetch repositories:", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw new Error("Failed to fetch repositories. Please try again later.");
  }
};
