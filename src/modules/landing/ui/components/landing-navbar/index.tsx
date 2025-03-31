import Link from "next/link";
import { AuthButton } from "./auth-button";

export const LandingNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-gray-900 to-black flex items-center px-2 z-50">
      <div className="flex items-center justify-between gap-4 w-full max-w-7xl mx-auto">
        <div className="flex items-center flex-shrink-0">
          <Link href={"/"} className="hidden md:block">
            <div className="p-4 flex items-center gap-1">
              <p className="text-2xl font-geist font-semibold tracking-tight text-white">
                Deplawyer
              </p>
            </div>
          </Link>
        </div>
        <div className="flex-shrink-0 items-center flex gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
