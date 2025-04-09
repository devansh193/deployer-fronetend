import axios from "axios";
import {
  baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/trpc/init";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { getRepositories } from "@/app/actions/github-actions";

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
  getRepositories: protectedProcedure.query(async () => {
    try {
      const response = await getRepositories();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const repos = response?.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        private: repo.private,
        description: repo.description,
        html_url: repo.html_url,
        updated_at: repo.updated_at,
      }));
      console.log(response);
      return repos;
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
