import apiClient from "src/apis";

export default async function likePost(feedId: number): Promise<{
  feedId: number;
  isLiked: boolean;
}> {
  return (await apiClient.post(`/feeds/${feedId}/liked`)).data.result;
}
