export const dynamic = "force-dynamic";
import type { SearchParams } from "nuqs/server";
import { HydrateClient, trpc } from "@/trpc/server";
import { DashboardView } from "@/modules/dashboard/ui/views/dashboard-view";
import { loadRepositoryFilter } from "@/modules/github/search-params";

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
