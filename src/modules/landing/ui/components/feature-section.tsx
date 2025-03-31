import { Check } from "lucide-react";

export const FeatureSection = () => {
  return (
    <div className="bg-black">
      <div className="rounded-xl p-8">
        <div className="animate-pulse-slow bg-gray-800 w-full h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] rounded-lg"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white font-geist">
              Deploy from your existing workflow
            </h3>
            <p className="text-gray-400 mb-8">
              Connect your GitHub, GitLab, or Bitbucket repository and deploy
              with every push. Our platform integrates seamlessly with your
              existing CI/CD pipeline.
            </p>

            <ul className="space-y-3">
              {[
                "Zero configuration required",
                "Automatic HTTPS and SSL",
                "Preview deployments for every PR",
                "Rollbacks with a single click",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check
                    size={20}
                    className="mr-2 mt-0.5 flex-shrink-0 text-green-500"
                  />
                  <span className="text-white font-geist">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden glass-card">
              <div className="p-4 border-b border-gray-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-500">Terminal</div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-gray-500">$ git push origin main</div>
                <div className="text-gray-400 mt-2">
                  <span className="text-green-500">✓</span> Pushed to main
                </div>
                <div className="text-gray-400 mt-2">
                  <span className="text-green-500">✓</span> Build started
                </div>
                <div className="text-gray-400 mt-2">
                  <span className="text-green-500">✓</span> Build completed
                </div>
                <div className="text-gray-400 mt-2">
                  <span className="text-green-500">✓</span> Deployed to
                  production
                </div>
                <div className="text-gray-500 mt-4">$ </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
