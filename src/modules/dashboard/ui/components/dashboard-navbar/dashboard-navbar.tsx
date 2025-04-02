import { AuthButton } from "@/modules/landing/ui/components/landing-navbar/auth-button";

export const DashboardNavbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 flex h-14 items-center justify-between bg-[#0A0A0A] px-4">
      <div className="text-white">This is left side</div>
      <div className="text-white">
        <AuthButton />
      </div>
    </nav>
  );
};
