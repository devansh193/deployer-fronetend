import { useQueryState } from "nuqs";

export const useRepositorySearch = () => {
  return useQueryState("q");
};
