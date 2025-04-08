import Link from "next/link";
import { SlashIcon, TriangleIcon } from "lucide-react";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { NavbarHeader } from "./navbar-header";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 flex h-16 items-center justify-between border-[2px] border-b border-[#2C2C2C] bg-black px-4">
      <div className="flex items-center">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <TriangleIcon className="text-white" fill="white" />
          </Link>
          <SlashIcon className="rotate-[-30deg] text-[#2C2C2C]" />
        </div>
        <NavbarHeader />
      </div>
      <div>
        <AuthButton />
      </div>
    </nav>
  );
};
