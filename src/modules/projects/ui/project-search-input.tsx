"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LoaderIcon, Search } from "lucide-react";

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSearching(true);
    const handler = setTimeout(() => {
      const currentQuery = searchParams.get("q") || "";
      if (searchTerm !== currentQuery) {
        const params = new URLSearchParams(searchParams.toString());

        if (searchTerm.trim()) {
          params.set("q", searchTerm.trim());
        } else {
          params.delete("q");
        }

        router.push(`?${params.toString()}`);
      }

      setSearching(false);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm, searchParams, router]);

  return (
    <div className="flex w-full">
      <div className="relative w-full">
        <div className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400">
          <Search size={18} />
        </div>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search Repositories and Projects..."
          className="font-geist w-full rounded-md border-[2px] border-[#242424] bg-transparent py-2 pr-10 pl-10 text-white outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-white/10"
          aria-label="Search"
        />
        {searching && (
          <div className="absolute top-1/2 right-3 -translate-y-1/2 animate-spin text-neutral-400">
            <LoaderIcon size={18} />
          </div>
        )}
      </div>
    </div>
  );
};
