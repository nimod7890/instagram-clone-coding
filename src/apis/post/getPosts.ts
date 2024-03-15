import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import apiClient from "src/apis";
import { PostType } from "src/types";

export default async function getPosts({
  queryKey,
  pageParam,
}: QueryFunctionContext<QueryKey, number>): Promise<{
  feedList: PostType[];
  totalCount: number;
  lastPage: number;
}> {
  const [, size, targetUserLoginId] = queryKey;

  return (
    await apiClient.get(`/feeds`, {
      params: { page: pageParam, size, targetUserLoginId },
    })
  ).data.result;
}
