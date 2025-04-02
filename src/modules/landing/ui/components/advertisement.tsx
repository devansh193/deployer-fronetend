export const Advertisement = () => {
  return (
    <div className="mx-auto mt-12 max-w-7xl">
      <div className="relative mt-8 md:mt-12">
        <div className="glass-card mx-auto aspect-[16/9] w-full max-w-7xl overflow-hidden rounded-t-xl border border-[#1F1F1F] px-4">
          <div className="flex items-center gap-2 border-b border-[#1F1F1F] p-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center text-xs text-gray-500">
              dashboard.deploynow.app
            </div>
          </div>
          <div className="p-4">
            <div className="animate-pulse-slow h-[calc(100%-2rem)] w-full rounded-lg bg-gray-800"></div>
          </div>
        </div>
      </div>
      {/* <div className="border-t border-b border-[#1F1F1F] px-12 py-24">
        <h1 className="text-5xl font-geist font-medium text-white text-center">
          Develop with your favorite tools Launch globally, instantly Keep
          pushing{" "}
        </h1>
      </div> */}
    </div>
  );
};
