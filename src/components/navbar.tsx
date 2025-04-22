import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { NavbarHeader } from "./navbar-header";
import { SidebarTrigger } from "./ui/sidebar";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex h-12 items-center justify-between border-[2px] border-b border-[#2C2C2C] bg-[#171717] px-2">
      <div className="flex items-center">
        <SidebarTrigger className="mr-2 text-[#A2A2A2] hover:bg-[#171717] hover:text-white" />
        <NavbarHeader />
      </div>
      <div>
        <AuthButton />
      </div>
    </nav>
  );
};
