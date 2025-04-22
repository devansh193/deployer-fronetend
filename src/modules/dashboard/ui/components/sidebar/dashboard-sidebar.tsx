import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { MainSection } from "./main-section";

export const DashboardSidebar = () => {
  return (
    <Sidebar className="z-40 mt-12 border border-[#2E2E2E]" collapsible="icon">
      <SidebarContent className="font-geist bg-[#171717]">
        <MainSection />
      </SidebarContent>
    </Sidebar>
  );
};
