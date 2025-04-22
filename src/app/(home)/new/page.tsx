import { DEFAULT_LIMIT } from "@/constants";
import { GithubRepositoryView } from "@/modules/github/ui/views/github-repository-view";
import { HydrateClient, trpc } from "@/trpc/server";
export const dynamic = "force-dynamic";
const Page = () => {
  void trpc.github.getRepositories.prefetchInfinite({
    limit: DEFAULT_LIMIT,
  });
  return (
    <HydrateClient>
      <GithubRepositoryView />
    </HydrateClient>
  );
};
export default Page;
