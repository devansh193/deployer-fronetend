"use client";
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { TRPCError } from "@trpc/server";

export const DashboardNavbar = () => {
  return (
    <Suspense>
      <ErrorBoundary fallback={<p>Error...</p>}>
        <DashboardNavbarSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};

export const DashboardNavbarSuspense = () => {
  const [data] = trpc.dashboard.getUser.useSuspenseQuery();
  if (!data) throw new TRPCError({ code: "NOT_FOUND" });
  return <Navbar username={data.userName} />;
};
