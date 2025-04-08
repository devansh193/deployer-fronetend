import { db } from "@/db";
import { users } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";

export const dashboardRouter = createTRPCRouter({
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const { id: userId } = ctx.user;
    const [user] = await db
      .select()
      .from(users)
      .where(and(eq(users.id, userId)));
    if (!user) throw new TRPCError({ code: "NOT_FOUND" });
    return user;
  }),
});
