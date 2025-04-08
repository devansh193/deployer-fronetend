"use client";

import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const GithubRepositories = () => {
  return (
    <Suspense>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <GitRepositoriesSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};
const GitRepositoriesSuspense = () => {
  const [repositories] = trpc.github.getRepositories.usePrefetchQuery();
  return (
    <div>
      {repositories?.map((repository: any) => (
        <div key={repository.id}>{repository.projectName}</div>
      ))}
    </div>
  );
};
