"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { debounce } from "lodash";
import { Loader, Search } from "lucide-react";
export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [value, setValue] = useState(query);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearch = useCallback(
    debounce((searchTerm: string) => {
      const url = new URL(window.location.href);
      const newQuery = searchTerm.trim();
      url.searchParams.set("q", encodeURIComponent(newQuery));
      if (newQuery === "") url.searchParams.delete("q");
      setIsSearching(false);
      router.push(url.toString(), { scroll: false });
    }, 300),
    [searchParams],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsSearching(true);
    debouncedSearch(newValue);
  };

  useEffect(() => {
    if (query !== value && !isSearching) {
      setValue(query);
    }
  }, [query, isSearching, value]);

  return (
    <form action="" className="flex w-full">
      <div className="relative w-full">
        <div
          className={`absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400 transition-all duration-200`}
        >
          <Search size={18} />
        </div>
        <input
          value={value}
          onChange={handleInputChange}
          type="text"
          placeholder="Search Repositories and Projects..."
          className={`font-geist w-full rounded-md border-[2px] border-[#242424] bg-transparent py-2 pr-4 pl-10 text-white transition-all duration-200 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-white/10`}
          aria-label="Search"
        />
        {isSearching && (
          <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
            <Loader className="animate-spin text-neutral-500" />
          </div>
        )}
      </div>
    </form>
  );
};
