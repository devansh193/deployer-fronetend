import { useIntersectionObserver } from "@/hooks/use-interaction-observer";
import { useEffect } from "react";
import { Button } from "./ui/button";

interface InfiniteScrollProps {
  isManual?: boolean;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const InfiniteScroll = ({
  isManual = false,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: InfiniteScrollProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "100px",
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage && !isManual) {
      fetchNextPage();
    }
  }, [
    isIntersecting,
    hasNextPage,
    isFetchingNextPage,
    isManual,
    fetchNextPage,
  ]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div ref={targetRef} className="h-1" />
      {hasNextPage ? (
        <Button
          variant={"secondary_custom"}
          disabled={isFetchingNextPage}
          onClick={fetchNextPage}
          className="h-6"
        >
          {isFetchingNextPage ? (
            <h1 className="text-xs text-[#B4B4B4]">Loading...</h1>
          ) : (
            <h1 className="text-xs text-[#B4B4B4]"> Load more</h1>
          )}
        </Button>
      ) : (
        <p className="text-muted-foreground text-xs">
          You have reached the end of the list.
        </p>
      )}
    </div>
  );
};
