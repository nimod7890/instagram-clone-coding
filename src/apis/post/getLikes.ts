import { QueryFunctionContext } from "@tanstack/react-query";
import apiClient from "src/apis";

export default async function getLikes({
  queryKey,
}: QueryFunctionContext): Promise<{
  feedLikeList: { userId: number; userLoginId: string }[];
  totalCount: number;
}> {
  const [, feedId] = queryKey;
  return (await apiClient.get(`/feeds/${feedId}/like-users`)).data.result;
}
