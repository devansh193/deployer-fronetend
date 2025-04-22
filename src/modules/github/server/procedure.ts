import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { getRepositories } from "@/app/actions/github-actions";
import { z } from "zod";

const infiniteRepoSchema = z.object({
  limit: z.number().int().positive().max(100).default(30),
  cursor: z.number().nullish(),
  sort: z
    .enum(["created", "updated", "pushed", "full_name"])
    .default("updated"),
});

export const githubRouter = createTRPCRouter({
  getRepositories: protectedProcedure
    .input(infiniteRepoSchema)
    .query(async ({ input }) => {
      try {
        const page = input.cursor ? input.cursor : 1;

        const response = await getRepositories({
          per_page: input.limit,
          page: page,
          sort: input.sort,
        });

        if (!response) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Unable to fetch repositories - user not authenticated",
          });
        }

        const repos = response.map((repo) => ({
          id: repo.id,
          name: repo.name,
          private: repo.private,
          description: repo.description,
          html_url: repo.html_url,
          updated_at: repo.updated_at,
          clone_url: repo.clone_url,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
        }));

        const hasMore = response.length === input.limit;
        const nextCursor = hasMore ? page + 1 : null;

        return {
          repos,
          nextCursor,
        };
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            error instanceof Error
              ? error.message
              : "An unexpected error occurred",
        });
      }
    }),
});
