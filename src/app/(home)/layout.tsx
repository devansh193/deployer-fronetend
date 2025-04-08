import { DashboardLayout } from "@/modules/dashboard/ui/components/layout/dashboard-layout";
interface DashboardLayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
};
export default Layout;
