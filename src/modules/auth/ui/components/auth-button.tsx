"use client";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <div className="flex size-[32px] items-center justify-center rounded-full border border-[#2E2E2E]">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={"custom"}
            className="px-4 py-2 text-sm font-medium shadow-none hover:cursor-pointer"
          >
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
