import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { chain } from "lodash";
import { getBookmarkedPosts, getLikedPosts } from "src/apis/user";
import { QueryKeys } from "src/libraries/reactQuery";

export default function useGetInteractedPosts({
  size = 9,
  state,
}: {
  size?: number;
  state: "like" | "bookmark";
}) {
  const { data, ...rest } = useSuspenseInfiniteQuery({
    queryKey: [
      state === "like" ? QueryKeys.LikedPosts : QueryKeys.BookMarkedPosts,
      size,
    ],
    queryFn: state === "like" ? getLikedPosts : getBookmarkedPosts,
    initialPageParam: 1,
    getNextPageParam: (
      { lastPage: lastPageParam },
      _allPages,
      currentPageParam
    ) =>
      lastPageParam === currentPageParam ? undefined : currentPageParam + 1,
    getPreviousPageParam: (_page, _allPage, currentPageParam) =>
      currentPageParam < 0 ? undefined : currentPageParam - 1,
  });

  const posts = chain(data?.pages)
    .flatMap((pages) => pages.feedList)
    .value();

  return { posts, ...rest };
}
