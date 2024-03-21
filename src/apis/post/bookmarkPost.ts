import apiClient from "src/apis";

export default async function bookmarkPost(feedId: number): Promise<{
  feedId: number;
  isBookMarked: boolean;
}> {
  return (await apiClient.post(`/feeds/${feedId}/bookmarked`)).data.result;
}
