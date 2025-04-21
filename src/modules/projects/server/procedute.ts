import { db } from "@/db";
import { projects } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { and, eq } from "drizzle-orm";
import { z } from "zod";

export const projectRouter = createTRPCRouter({
  getProjects: protectedProcedure
    .input(
      z.object({
        q: z.string().nullable().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { q } = input;
      const { id: userId } = ctx.user;
      const project = await db
        .select()
        .from(projects)
        .where(
          and(
            eq(projects.userId, userId),
            q ? eq(projects.projectName, q) : undefined,
          ),
        );
      return project;
    }),
});
