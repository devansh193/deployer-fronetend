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
          <Button className="bg-gradient-to-r from-green-500 to-teal-400 hover:cursor-pointer">
            <UserCircleIcon className="text-black" />
            <h1 className="font-geist font-medium text-black">Sign in</h1>
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
