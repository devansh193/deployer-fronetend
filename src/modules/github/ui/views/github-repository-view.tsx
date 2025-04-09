import { GithubRepositories } from "@/modules/github/ui/components/git-repositories";

export const GithubRepositoryView = () => {
  return (
    <div className="h-full w-full">
      <div>
        <h1 className="text-white">Git repositories</h1>
      </div>
      <GithubRepositories />
    </div>
  );
};
