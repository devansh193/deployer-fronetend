import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const MainSection = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-24 lg:py-30">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-black to-black" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: 0.1,
        }}
      />
      <div
        className="absolute -z-10"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: "rgba(23, 196, 93, 0.2)",
          filter: "blur(100px)",
        }}
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in mx-auto max-w-4xl space-y-6 text-center sm:space-y-8">
          <div className="font-geist mb-2 inline-block rounded-full border border-[#1F1F1F] px-4 py-2 text-xs font-medium text-white sm:px-6 sm:py-3 sm:text-sm">
            Launching Projects Made Simple
          </div>

          <h1 className="px-2 text-3xl font-bold tracking-tight text-white sm:px-0 sm:text-4xl md:text-5xl lg:text-6xl">
            Deploy Your Projects to the{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
              Global Edge
            </span>{" "}
            in Seconds
          </h1>

          <p className="mx-auto max-w-2xl px-4 text-base text-gray-400 sm:px-0 sm:text-lg md:text-xl">
            The modern deployment platform for frontend, backend, and everything
            in between. Ship faster with automated deployments and instant
            scaling.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row sm:gap-4">
            <Link href={"/dashboard"}>
              <Button
                size="lg"
                className="font-geist gap-2 bg-white font-medium text-black transition-colors hover:cursor-pointer hover:bg-neutral-200 sm:w-auto"
              >
                Start Deploying <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="mt-4 text-xs text-gray-500 sm:mt-6 sm:text-sm">
            No credit card required • Free tier available
          </div>
        </div>
      </div>

      <div className="relative mt-12 p-2 sm:mt-16 md:mt-20 lg:mt-20">
        <div className="glass-card mx-auto aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-xl bg-gray-900 px-4 sm:rounded-t-xl sm:px-6 lg:max-w-6xl">
          <div className="flex items-center gap-2 border-b border-gray-800 p-3 sm:p-4">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-red-500 sm:h-3 sm:w-3"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-500 sm:h-3 sm:w-3"></div>
              <div className="h-2 w-2 rounded-full bg-green-500 sm:h-3 sm:w-3"></div>
            </div>
            <div className="flex-1 text-center text-[10px] text-gray-500 sm:text-xs">
              dashboard.deploynow.app
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
