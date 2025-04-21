import { createLoader, parseAsString } from "nuqs/server";

export const params = {
  q: parseAsString.withOptions({
    clearOnDefault: true,
  }),
};

export const loadRepositoryFilter = createLoader(params);
