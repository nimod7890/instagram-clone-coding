import { useSuspenseQuery } from "@tanstack/react-query";
import { getFollowers } from "src/apis/user";
import { QueryKeys } from "src/libraries/reactQuery";

export default function useGetFollowers(userId: string) {
  const { data: followings, ...rest } = useSuspenseQuery({
    queryKey: [QueryKeys.User, userId, "followings"],
    queryFn: async (context) => {
      const { totalCount, followerUserList } = await getFollowers(context);

      /** parsing */
      return {
        totalCount,
        followerUserList: followerUserList.map(({ userId: id, ...rest }) => ({
          id,
          ...rest,
        })),
      };
    },
  });

  return { followings, ...rest };
}
