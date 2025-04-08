import Link from "next/link";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const LandingNavbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center bg-gradient-to-r from-gray-900 to-black px-2">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <div className="flex flex-shrink-0 items-center">
          <Link href={"/"} className="hidden md:block">
            <div className="flex items-center gap-1 p-4">
              <p className="font-geist text-2xl font-semibold tracking-tight text-white">
                Deplawyer
              </p>
            </div>
          </Link>
        </div>
        <div className="flex flex-shrink-0 items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
