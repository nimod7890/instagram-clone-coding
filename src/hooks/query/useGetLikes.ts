import { useSuspenseQuery } from "@tanstack/react-query";
import { getLikes } from "src/apis/post";
import { QueryKeys } from "src/libraries/reactQuery";
import { UserType } from "src/types";

export type QueryLikesResponse = {
  feedLikeList: UserType[];
  totalCount: number;
};

export default function useGetLikes(feedId: number) {
  const { data: likes, ...rest } = useSuspenseQuery({
    queryKey: [QueryKeys.Like, feedId],
    queryFn: getLikes,
    initialData: { totalCount: 0, feedLikeList: [] },
  });

  return { likes, ...rest };
}
