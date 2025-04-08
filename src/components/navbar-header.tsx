"use client";
import { useUser } from "@clerk/nextjs";
import { Skeleton } from "./ui/skeleton";
export const NavbarHeader = () => {
  const { user } = useUser();
  return (
    <div>
      <div className="flex items-center justify-center gap-x-2">
        <div className="size-5 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500" />
        {!user && <Skeleton className="h-6 w-[200px] bg-neutral-900" />}
        {user && (
          <h1 className="font-geist mt-[1px] text-sm font-medium text-[#EDEDED]">
            {user?.username}&apos;s projects
          </h1>
        )}
      </div>
    </div>
  );
};
