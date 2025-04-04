import { githubRouter } from "@/modules/github/server/procedure";
import { createTRPCRouter } from "../init";
import { dashboardRouter } from "@/modules/dashboard/server/procedure";
import { projectRouter } from "@/modules/projects/server/procedute";

export const appRouter = createTRPCRouter({
  github: githubRouter,
  dashboard: dashboardRouter,
  project: projectRouter,
});

export type AppRouter = typeof appRouter;
