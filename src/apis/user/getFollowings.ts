import { QueryFunctionContext } from "@tanstack/react-query";
import apiClient from "src/apis";

export default async function getFollowings({
  queryKey,
}: QueryFunctionContext): Promise<{
  followingUserList: {
    userId: number;
    loginId: string;
    realName: string;
  }[];
  totalCount: number;
}> {
  const [, loginId] = queryKey;
  return (await apiClient.get(`/users/${loginId}/following-user`)).data.result;
}
