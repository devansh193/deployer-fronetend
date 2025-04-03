import { githubRouter } from "@/modules/github/server/procedure";
import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  github: githubRouter,
});

export type AppRouter = typeof appRouter;
