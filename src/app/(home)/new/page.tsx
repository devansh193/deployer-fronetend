import { GithubRepositoryView } from "@/modules/github/ui/views/github-repository-view";
import { HydrateClient, trpc } from "@/trpc/server";

const Page = () => {
  void trpc.github.getRepositories();
  return (
    <HydrateClient>
      <GithubRepositoryView />
    </HydrateClient>
  );
};
export default Page;
