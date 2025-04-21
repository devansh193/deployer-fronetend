import { Button } from "@/components/ui/button";
import { SearchInput } from "@/modules/projects/ui/project-search-input";
import { ProjectSection } from "@/modules/projects/ui/sections/project-section";
import Link from "next/link";

export const DashboardView = () => {
  return (
    <div className="mx-auto mb-10 flex max-w-[2400px] flex-col gap-y-6 px-4 pt-2.5">
      <div className="flex items-center justify-center gap-x-2">
        <SearchInput />
        <Button variant={"secondary"} className="rounded-md px-4 py-[20px]">
          <Link href={"/new"}>
            <h1 className="font-geist">Add new</h1>
          </Link>
        </Button>
      </div>
      <ProjectSection />
    </div>
  );
};
