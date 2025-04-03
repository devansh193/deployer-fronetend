import axios from "axios";
import {
  baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/trpc/init";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { clerkClient } from "@clerk/nextjs/server";

const GITHUB_URL = "https://api.github.com/user/repos";

export const githubRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  getRepositories: protectedProcedure.query(async ({ ctx }) => {
    const { id: userId } = ctx.user;
    const client = await clerkClient();
    const access_token = await client.users.getUserOauthAccessToken(
      userId,
      "oauth_github",
    );
    try {
      const response = await axios.get(GITHUB_URL, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "deployer",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            error.response?.data?.message ||
            "Failed to fetch Github repositories",
        });
      }
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "An unexpected error occurred",
      });
    }
  }),
});
