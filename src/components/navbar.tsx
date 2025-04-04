import { UserButton } from "@clerk/nextjs";
import { SlashIcon, TriangleIcon } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  username: string | null;
}
export const Navbar = ({ username }: NavbarProps) => {
  return (
    <nav className="fixed top-0 right-0 left-0 flex h-16 items-center justify-between border-[2px] border-b border-[#2C2C2C] bg-black px-4">
      <div className="flex items-center">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <TriangleIcon className="text-white" fill="white" />
          </Link>
          <SlashIcon className="rotate-[-30deg] text-[#2C2C2C]" />
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <div className="size-5 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500" />
          <h1 className="font-geist text-md mt-[1px] text-[#EDEDED]">
            {username}&apos;s projects
          </h1>
        </div>
      </div>
      <div>
        <UserButton
          appearance={{
            elements: {
              userButtonBox: "border-white",
            },
          }}
        />
      </div>
    </nav>
  );
};
