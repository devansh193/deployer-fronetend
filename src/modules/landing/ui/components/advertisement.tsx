export const Advertisement = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12">
      <div className="mt-8 md:mt-12 relative">
        <div className="w-full max-w-7xl mx-auto px-4 aspect-[16/9] rounded-t-xl glass-card overflow-hidden border border-[#1F1F1F]">
          <div className="p-4 border-b border-[#1F1F1F] flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-gray-500 flex-1 text-center">
              dashboard.deploynow.app
            </div>
          </div>
          <div className="p-4">
            <div className="animate-pulse-slow bg-gray-800 w-full h-[calc(100%-2rem)] rounded-lg"></div>
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
