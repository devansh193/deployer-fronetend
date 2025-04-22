import {
  ChevronRightIcon,
  CodeIcon,
  GitForkIcon,
  LockIcon,
  StarIcon,
} from "lucide-react";
import {
  format,
  formatDistanceToNow,
  parseISO,
  differenceInDays,
} from "date-fns";
import { type Repository } from "@/types/index";

interface RepositoryCardProps {
  repo: Repository;
  onClick?: () => void;
  className?: string;
}

export const RepositoryCard = ({
  repo,
  onClick,
  className = "",
}: RepositoryCardProps) => {
  return (
    <div
      className={`font-geist group relative flex flex-col rounded-md border border-[#2E2E2E] bg-[#1E1E1E] p-4 shadow-md transition-all hover:border-[#3E3E3E] hover:bg-[#252525] ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h1 className="flex items-center gap-x-2">
            <span className="text-md block font-medium text-white">
              {repo.name}
            </span>
            {repo.private && (
              <LockIcon className="h-3.5 w-3.5 text-[#B4B4B4]" />
            )}
          </h1>
          <p className="mt-1 line-clamp-2 text-xs text-[#B4B4B4]">
            {repo.description || "No description provided"}
          </p>
        </div>

        <span className="text-[#B4B4B4] transition-transform group-hover:translate-x-1">
          <ChevronRightIcon className="size-4" />
        </span>
      </div>

      <div className="mt-4 flex items-center gap-x-4 text-xs text-[#B4B4B4]">
        {repo.language && (
          <div className="flex items-center gap-x-1">
            <CodeIcon className="h-3.5 w-3.5" />
            <span>{repo.language}</span>
          </div>
        )}
        {repo.stargazers_count !== undefined && (
          <div className="flex items-center gap-x-1">
            <StarIcon className="h-3.5 w-3.5" />
            <span>{repo.stargazers_count}</span>
          </div>
        )}
        {repo.forks_count !== undefined && (
          <div className="flex items-center gap-x-1">
            <GitForkIcon className="h-3.5 w-3.5" />
            <span>{repo.forks_count}</span>
          </div>
        )}
      </div>

      <div className="mt-auto pt-3 text-xs text-[#B4B4B4]">
        <span className="inline-flex items-center">
          Updated{" "}
          {differenceInDays(new Date(), parseISO(repo.updated_at)) <= 5
            ? `${formatDistanceToNow(parseISO(repo.updated_at))} ago`
            : format(parseISO(repo.updated_at), "MMMM d")}
        </span>
      </div>

      {/* Clickable overlay */}
      <div
        className="absolute inset-0 cursor-pointer rounded-md"
        onClick={onClick}
        aria-label={`View ${repo.name} repository`}
      />
    </div>
  );
};

export const RepositoryCardSkeleton = () => {
  return (
    <div className="font-geist relative flex h-[138px] animate-pulse flex-col rounded-md border border-[#2E2E2E] bg-[#1E1E1E] p-4 shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="h-4 w-32 rounded bg-[#2E2E2E]" />
          <div className="h-3 w-48 rounded bg-[#2E2E2E]" />
        </div>
        <div className="h-4 w-4 rounded bg-[#2E2E2E]" />
      </div>

      <div className="mt-4 flex items-center gap-x-4">
        <div className="h-3.5 w-16 rounded bg-[#2E2E2E]" />
        <div className="h-3.5 w-10 rounded bg-[#2E2E2E]" />
        <div className="h-3.5 w-10 rounded bg-[#2E2E2E]" />
      </div>

      <div className="mt-auto pt-3">
        <div className="h-3 w-24 rounded bg-[#2E2E2E]" />
      </div>
    </div>
  );
};
