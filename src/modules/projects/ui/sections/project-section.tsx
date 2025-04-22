"use client";

import { Button } from "@/components/ui/button";
import { useRepositorySearch } from "@/modules/github/hooks/use-repository-filter";
import { trpc } from "@/trpc/client";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const ProjectSection = () => {
  return (
    <Suspense>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <ProjectSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

const ProjectSectionSuspense = () => {
  const [filter] = useRepositorySearch();
  const [projects] = trpc.project.getProjects.useSuspenseQuery({
    q: filter,
  });
  return (
    <div>
      {projects.length === 0 && (
        <div className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed border-[#2E2E2E]">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-md text-white">No projects</h1>
            <span className="font-geist text-sm text-[#B4B4B4]">
              Get started by creating a new project
            </span>
            <Link href={"/new"}>
              <Button variant={"custom"} className="mt-[2px] h-6 rounded-sm">
                <PlusIcon />
                <span className="text-xs">New project</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
      {filter === "apple" && <h1 className="text-white">THis is test query</h1>}
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h1 className="text-white">{project.projectName}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
