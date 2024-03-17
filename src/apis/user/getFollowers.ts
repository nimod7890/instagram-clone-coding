import { QueryFunctionContext } from "@tanstack/react-query";
import apiClient from "src/apis";

export default async function getFollowers({
  queryKey,
}: QueryFunctionContext): Promise<{
  followerUserList: {
    userId: number;
    loginId: string;
    realName: string;
  }[];
  totalCount: number;
}> {
  const [, loginId] = queryKey;
  return (await apiClient.get(`/users/${loginId}/follower-user`)).data.result;
}
