"use client";
import { Button } from "@/components/ui/button";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton>
          <h1>Button</h1>
        </UserButton>
        {/* Add menu icons for studio */}
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button variant={"outline"}>
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
