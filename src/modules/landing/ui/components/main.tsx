import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const MainSection = () => {
  return (
    <section className="relative py-12 md:py-24 lg:py-30 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-[#1F1F1F] text-xs sm:text-sm text-white font-geist font-medium mb-2">
            Launching Projects Made Simple
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white px-2 sm:px-0">
            Deploy Your Projects to the{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
              Global Edge
            </span>{" "}
            in Seconds
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            The modern deployment platform for frontend, backend, and everything
            in between. Ship faster with automated deployments and instant
            scaling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
            <Button
              size="lg"
              className="gap-2 w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-geist font-medium transition-colors"
            >
              Start Deploying <ArrowRight size={16} />
            </Button>
          </div>

          <div className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
            No credit card required • Free tier available
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-20 relative p-2">
        <div className="w-full max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 aspect-[16/9] bg-gray-900 rounded-xl sm:rounded-t-xl glass-card overflow-hidden">
          <div className="p-3 sm:p-4 border-b border-gray-800 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500 flex-1 text-center">
              dashboard.deploynow.app
            </div>
          </div>
          <div className="p-3 sm:p-4">
            <div className="animate-pulse-slow bg-gray-800 w-full h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
