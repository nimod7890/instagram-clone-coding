import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import apiClient from "src/apis";
import { PostSummaryType } from "src/types";

export default async function getLikedPosts({
  queryKey,
  pageParam,
}: QueryFunctionContext<QueryKey, number>): Promise<{
  feedList: PostSummaryType[];
  totalCount: number;
  lastPage: number;
}> {
  const [, size] = queryKey;

  const data: Response = (
    await apiClient.get(`/users/liked-feed`, {
      params: { page: pageParam, size },
    })
  ).data.result;

  return {
    ...data,
    feedList: data.likedFeedList.map(
      ({ feedId: id, feedContentUrl: contentUrl }) => ({ id, contentUrl })
    ),
  };
}

type Response = {
  likedFeedList: { feedId: number; feedContentUrl: string }[];
  totalCount: number;
  lastPage: number;
};
