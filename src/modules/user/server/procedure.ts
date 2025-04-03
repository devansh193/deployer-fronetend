import { db } from "@/db";
import { users } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { eq } from "drizzle-orm";

export const userRouter = createTRPCRouter({
  getOne: protectedProcedure.query(async ({ ctx }) => {
    const { id: userId } = ctx.user;
    const [user] = await db.select().from(users).where(eq(users.id, userId));
    return user;
  }),
});
