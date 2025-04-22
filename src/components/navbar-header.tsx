"use client";
import { useUser } from "@clerk/nextjs";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
export const NavbarHeader = () => {
  const { user } = useUser();
  return (
    <div className="">
      <div className="flex items-center justify-center gap-x-2">
        <Link href={"/"} className="flex gap-x-1">
          <div className="size-5 rounded-full bg-gradient-to-r from-[#03623A] to-green-400" />
        </Link>
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
