import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { chain } from "lodash";
import { getComments } from "src/apis/post";
import { QueryKeys } from "src/libraries/reactQuery";

export default function useGetComments({
  size = 10,
  postId,
}: {
  size?: number;
  postId?: number;
} = {}) {
  const { data, ...rests } = useSuspenseInfiniteQuery({
    queryKey: [QueryKeys.Comment, size, postId],
    queryFn: getComments,
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

  const comments = chain(data?.pages)
    .flatMap((pages) => pages.commentList)
    .value();

  return { comments, ...rests };
}
