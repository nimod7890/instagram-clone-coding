import { useQuery } from "@tanstack/react-query";
import { getLikeParticipants } from "src/apis/post";
import { QueryKeys } from "src/libraries/reactQuery";
import { UserType } from "src/types";

export type QueryLikeParticipantsResponse = {
  feedLikeList: UserType[];
  totalCount: number;
};

export default function useGetLikeParticipants(feedId: number) {
  const { data: likeParticipants, ...rest } = useQuery({
    queryKey: [QueryKeys.Like, feedId],
    queryFn: getLikeParticipants,
  });

  return { likeParticipants, ...rest };
}
