import { useSuspenseQuery } from "@tanstack/react-query";
import { getFollowings } from "src/apis/user";
import { QueryKeys } from "src/libraries/reactQuery";

export default function useGetFollowings(userId: string) {
  const { data: followings, ...rest } = useSuspenseQuery({
    queryKey: [QueryKeys.User, userId, "followings"],
    queryFn: async (context) => {
      const { totalCount, followingUserList } = await getFollowings(context);

      /** parsing */
      return {
        totalCount,
        followingUserList: followingUserList.map(({ userId: id, ...rest }) => ({
          id,
          ...rest,
        })),
      };
    },
  });

  return { followings, ...rest };
}
