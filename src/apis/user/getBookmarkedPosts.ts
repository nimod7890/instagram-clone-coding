import { QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import apiClient from "src/apis";
import { PostSummaryType } from "src/types";

export default async function getBookmarkedPosts({
  queryKey,
  pageParam,
}: QueryFunctionContext<QueryKey, number>): Promise<{
  feedList: PostSummaryType[];
  totalCount: number;
  lastPage: number;
}> {
  const [, size] = queryKey;

  const data: Response = (
    await apiClient.get(`/users/bookmarked-feed`, {
      params: { page: pageParam, size },
    })
  ).data.result;

  return {
    ...data,
    feedList: data.bookmarkedFeedList.map(
      ({ feedId: id, feedContentUrl: contentUrl }) => ({ id, contentUrl })
    ),
  };
}

type Response = {
  bookmarkedFeedList: { feedId: number; feedContentUrl: string }[];
  totalCount: number;
  lastPage: number;
};
