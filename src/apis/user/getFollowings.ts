import { QueryFunctionContext } from "@tanstack/react-query";
import apiClient from "src/apis";

export default async function getFollowings({
  queryKey,
}: QueryFunctionContext): Promise<{
  users: {
    userId: number;
    loginId: string;
    realName: string;
  }[];
  totalCount: number;
}> {
  const [, loginId] = queryKey;
  const data = (await apiClient.get(`/users/${loginId}/following-user`)).data
    .result;
  return { ...data, users: data.followingUserList };
}
