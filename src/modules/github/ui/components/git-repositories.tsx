"use client";

import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Repository } from "@/types";
import { RepositoryCard, RepositoryCardSkeleton } from "./repository-card";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { DEFAULT_LIMIT } from "@/constants";

export const GithubRepositories = () => {
  return (
    <ErrorBoundary
      fallback={
        <div className="flex items-center justify-center p-8 text-red-500">
          <p className="flex items-center gap-2">
            <span className="animate-pulse">●</span>
            Error loading repositories
          </p>
        </div>
      }
    >
      <Suspense
        fallback={
          <div className="grid h-full grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(12)].map((_, i) => (
              <RepositoryCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <GitRepositoriesSuspense />
      </Suspense>
    </ErrorBoundary>
  );
};

const GitRepositoriesSuspense = () => {
  const [data, query] = trpc.github.getRepositories.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
      sort: "updated",
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );
  const repositories =
    data?.pages.flatMap((page) =>
      page.repos.map(
        (repo): Repository => ({
          id: repo.id,
          name: repo.name,
          full_name: repo.name,
          private: repo.private,
          description: repo.description,
          html_url: repo.html_url,
          updated_at: repo.updated_at,
          clone_url: repo.clone_url,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
        }),
      ),
    ) || [];

  if (!repositories || repositories.length === 0) {
    return (
      <div className="p-4">
        <div className="flex h-[200px] w-full flex-col items-center justify-center rounded-md border border-dashed border-[#2E2E2E] bg-[#1E1E1E]/50 transition-all hover:border-[#3E3E3E] hover:bg-[#1E1E1E]/80">
          <h1 className="text-md font-medium text-white">
            No repositories found
          </h1>
          <span className="font-geist mb-3 text-sm text-[#B4B4B4]">
            Get started by connecting or creating a new project
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="grid h-full grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {repositories.map((repo: Repository) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
      <InfiniteScroll
        isManual={true}
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
};
