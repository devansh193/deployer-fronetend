import { Button } from "@/components/ui/button";
import { GithubRepositories } from "@/modules/github/ui/components/git-repositories";
import { SearchInput } from "@/modules/projects/ui/project-search-input";
import Link from "next/link";

export const GithubRepositoryView = () => {
  return (
    <div className="mx-auto mb-10 flex max-w-[2400px] flex-col gap-y-2 px-4 pt-2.5">
      <div className="flex items-start justify-start gap-x-2">
        <SearchInput />
        <Button variant={"custom"} className="mt-[2px] h-6 rounded-sm">
          <Link href={"/new"}>
            <h1 className="font-geist text-xs">New project</h1>
          </Link>
        </Button>
      </div>
      <GithubRepositories />
    </div>
  );
};
