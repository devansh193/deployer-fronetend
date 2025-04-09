import { GithubRepositoryView } from "@/modules/github/ui/views/github-repository-view";
import { HydrateClient, trpc } from "@/trpc/server";
export const dynamic = "force-dynamic";
const Page = () => {
  void trpc.github.getRepositories.prefetch();
  return (
    <HydrateClient>
      <GithubRepositoryView />
    </HydrateClient>
  );
};
export default Page;
