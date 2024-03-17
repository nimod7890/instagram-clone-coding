import { QueryFunctionContext } from "@tanstack/react-query";
import apiClient from "src/apis";
import { UserType } from "src/types";

export default async function getPosts({
  queryKey,
}: QueryFunctionContext): Promise<{
  feedLikeList: UserType[];
  totalCount: number;
}> {
  const [, feedId] = queryKey;
  return (await apiClient.get(`/feeds/${feedId}/like-users`)).data.result;
}
