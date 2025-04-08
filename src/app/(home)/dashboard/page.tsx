import { DashboardView } from "@/modules/dashboard/ui/views/dashboard-view";
import { HydrateClient, trpc } from "@/trpc/server";
export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const { q } = await searchParams;
  void trpc.project.getProjects.prefetch({ q });
  return (
    <HydrateClient>
      <DashboardView q={q} />
    </HydrateClient>
  );
};
export default Page;
