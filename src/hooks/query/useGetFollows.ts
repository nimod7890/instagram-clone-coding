import { useSuspenseQuery } from "@tanstack/react-query";
import { getFollowers, getFollowings } from "src/apis/user";
import { ModalState } from "src/constants";
import { QueryKeys } from "src/libraries/reactQuery";

export default function useGetFollows({
  loginId: userId,
  state,
}: {
  loginId: string;
  state: ModalState;
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
