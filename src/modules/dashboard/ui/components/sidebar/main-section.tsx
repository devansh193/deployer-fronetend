"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChartSpline, LayoutDashboardIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    title: "New Project",
    url: "/new",
    icon: PlusIcon,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartSpline,
  },
];

export const MainSection = () => {
  const pathname = usePathname();

  return (
    <SidebarGroup className="border-b border-[#2E2E2E] py-4">
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  className="hover:bg-[#171717] hover:text-white"
                  tooltip={item.title}
                  asChild
                >
                  <Link
                    href={item.url}
                    className={`flex items-center gap-4 ${
                      isActive ? "text-white" : "text-[#B4B4B4]"
                    } text-sm`}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
