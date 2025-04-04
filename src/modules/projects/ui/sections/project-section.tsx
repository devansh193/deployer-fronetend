"use client";

import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface ProjectSectionProps {
  q: string | undefined;
}

export const ProjectSection = ({ q }: ProjectSectionProps) => {
  return (
    <Suspense>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <ProjectSectionSuspense q={q} />
      </ErrorBoundary>
    </Suspense>
  );
};

const ProjectSectionSuspense = ({ q }: ProjectSectionProps) => {
  const [projects] = trpc.project.getProjects.useSuspenseQuery({
    q,
  });
  return (
    <div>
      <h1 className="text-white">This is project section.</h1>
      {projects.length === 0 && (
        <div>
          <h1 className="text-white">No projects are there</h1>
        </div>
      )}
      {q === "apple" && <h1 className="text-white">THis is test query</h1>}
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
