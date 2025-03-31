import { LandingLayout } from "@/modules/landing/ui/layout/landing-layout";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <LandingLayout>{children}</LandingLayout>
    </div>
  );
};
export default Layout;
