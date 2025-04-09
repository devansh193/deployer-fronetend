"use client";

import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const GithubRepositories = () => {
  return (
    <ErrorBoundary fallback={<p className="text-red-500">Error...</p>}>
      <Suspense fallback={<p className="text-gray-500">Loading...</p>}>
        <GitRepositoriesSuspense />
      </Suspense>
    </ErrorBoundary>
  );
};

const GitRepositoriesSuspense = () => {
  const [repositories] = trpc.github.getRepositories.useSuspenseQuery();

  return (
    <div>
      <h1 className="text-white">I am here</h1>
      {!repositories && <h1 className="text-white">Error</h1>}
      <span>
        {repositories?.map((item) => (
          <p className="text-white" key={item.id}>
            {item.name}
          </p>
        ))}
      </span>
    </div>
  );
};
