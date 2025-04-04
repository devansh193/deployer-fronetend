import { DashboardLayout } from "@/modules/dashboard/ui/components/layout/dashboard-layout";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: DashboardLayoutProps) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
