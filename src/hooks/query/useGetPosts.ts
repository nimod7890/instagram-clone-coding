import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { chain } from "lodash";
import { getPosts } from "src/apis/post";
import { QueryKeys } from "src/libraries/reactQuery";

export default function useGetPosts({
  size = 10,
  targetUserLoginId,
}: {
  size?: number;
  targetUserLoginId?: string;
} = {}) {
  const { data, ...rests } = useSuspenseInfiniteQuery({
    queryKey: [QueryKeys.Posts, size, targetUserLoginId],
    queryFn: getPosts,
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

  return { posts, ...rests };
}
