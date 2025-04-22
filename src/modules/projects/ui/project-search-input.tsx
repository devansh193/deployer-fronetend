"use client";

import { LoaderIcon, Search } from "lucide-react";
import { useRepositorySearch } from "@/modules/github/hooks/use-repository-filter";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useRepositorySearch();
  const [inputValue, setInputValue] = useState(searchTerm || "");
  const debounceValue = useDebounce(inputValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputValue !== debounceValue) {
      setLoading(true);
    } else {
      setSearchTerm(debounceValue === "" ? null : debounceValue);
      setLoading(false);
    }
  }, [debounceValue, inputValue, setSearchTerm]);

  return (
    <div className="flex">
      <div className="relative">
        <div className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400">
          <Search size={18} />
        </div>
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Search Repositories and Projects..."
          className="font-geist w-full rounded-md border-[2px] border-[#242424] bg-transparent pl-10 text-white outline-none placeholder:text-xs placeholder:text-neutral-400 focus:ring-2 focus:ring-white/10"
          aria-label="Search"
        />
        {loading && (
          <div className="absolute top-1/2 right-3 -translate-y-1/2 animate-spin text-neutral-400">
            <LoaderIcon size={16} />
          </div>
        )}
      </div>
    </div>
  );
};
