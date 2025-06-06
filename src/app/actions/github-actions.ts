"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { type Repository } from "@/types/index";

const GITHUB_API_URL = "https://api.github.com/user/repos";
const OAUTH_PROVIDER = "github";

type FetchRepositoriesOptions = {
  perPage?: number;
  page?: number;
  sort?: "created" | "updated" | "pushed" | "full_name";
};

export type GetRepositoriesResponse = Awaited<
  ReturnType<typeof getRepositories>
>;

export const getRepositories = async (
  options?: FetchRepositoriesOptions,
): Promise<Repository[] | null> => {
  try {
    const { userId } = await auth();

    if (!userId) {
      console.warn("Unauthorized attempt to access repositories");
      return null;
    }

    const userClient = await clerkClient();
    const oauthTokens = await userClient.users.getUserOauthAccessToken(
      userId,
      OAUTH_PROVIDER,
    );

    const accessToken = oauthTokens.data[0]?.token;

    if (!accessToken) {
      throw new Error("No GitHub access token found for user");
    }

    const url = new URL(GITHUB_API_URL);

    if (options) {
      Object.entries(options).forEach(([key, value]) => {
        if (value !== undefined) {
          const paramKey = key === "perPage" ? "per_page" : key;
          url.searchParams.append(paramKey, value.toString());
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
        `GitHub API request failed: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`,
      );
    }

    const repositories: Repository[] = await response.json();
    return repositories;
  } catch (error) {
    console.error("Failed to fetch repositories:", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw new Error("Failed to fetch repositories. Please try again later.");
  }
};
