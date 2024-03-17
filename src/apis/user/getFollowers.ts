import { QueryFunctionContext } from "@tanstack/react-query";
import apiClient from "src/apis";

export default async function getFollowers({
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
  const data = (await apiClient.get(`/users/${loginId}/follower-user`)).data
    .result;
  return { ...data, users: data.followerUserList };
}
