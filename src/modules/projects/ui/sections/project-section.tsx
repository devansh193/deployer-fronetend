"use client";

import { useRepositorySearch } from "@/modules/github/hooks/use-repository-filter";
import { trpc } from "@/trpc/client";
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
      <h1 className="text-white">This is project section.</h1>
      {projects.length === 0 && (
        <div>
          <h1 className="text-white">No projects are there</h1>
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
