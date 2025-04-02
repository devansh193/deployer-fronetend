import { DashboardNavbar } from "../dashboard-navbar/dashboard-navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="w-full bg-[#0A0A0A]">
      <DashboardNavbar />
      <div className="flex h-screen pt-[4rem]">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};
