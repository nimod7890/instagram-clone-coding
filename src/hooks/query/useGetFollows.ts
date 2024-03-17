import { useSuspenseQuery } from "@tanstack/react-query";
import { getFollowers, getFollowings } from "src/apis/user";
import { QueryKeys } from "src/libraries/reactQuery";

export default function useGetFollows({
  loginId: userId,
  state,
}: {
  loginId: string;
  state: "팔로워" | "팔로잉";
}) {
  const { data: follows, ...rest } = useSuspenseQuery({
    queryKey: [QueryKeys.User, userId, state],
    queryFn: async (context) => {
      const { totalCount, users } =
        state === "팔로잉"
          ? await getFollowings(context)
          : await getFollowers(context);

      return {
        totalCount,
        users: users.map(({ userId: id, ...rest }) => ({
          id,
          ...rest,
        })),
      };
    },
  });

  return { follows, ...rest };
}
