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
    queryFn: async (context) => {
      const { totalCount, feedLikeList } = await getLikes(context);

      /** parsing */
      return {
        totalCount,
        feedLikeList: feedLikeList.map(
          ({ userId: id, userLoginId: loginId }) => ({ id, loginId })
        ),
      };
    },
  });

  return { likes, ...rest };
}
