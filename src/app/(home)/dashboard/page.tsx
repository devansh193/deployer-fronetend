import { DashboardView } from "@/modules/dashboard/ui/views/dashboard-view";
import { loadRepositoryFilter } from "@/modules/github/search-params";
import { HydrateClient, trpc } from "@/trpc/server";
import type { SearchParams } from "nuqs/server";
export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<SearchParams>;
}

const Page = async ({ searchParams }: PageProps) => {
  const filter = await loadRepositoryFilter(searchParams);
  void trpc.project.getProjects.prefetch({ q: filter.q });
  return (
    <HydrateClient>
      <DashboardView />
    </HydrateClient>
  );
};
export default Page;
