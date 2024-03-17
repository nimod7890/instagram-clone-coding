import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import apiClient from "src/apis";
import { CommentType } from "src/types";

export default async function getComments({
  queryKey,
  pageParam,
}: QueryFunctionContext<QueryKey, number>): Promise<{
  feedId: number;
  commentList: CommentType[];
  totalCount: number;
  lastPage: number;
}> {
  const [, size, feedId] = queryKey;

  return (
    await apiClient.get(`/feeds/${feedId}/comments`, {
      params: { page: pageParam, size },
    })
  ).data.result;
}
