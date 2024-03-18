import apiClient from "src/apis";

export default async function deletePost(
  feedId: number
): Promise<{ feedId: number }> {
  return (await apiClient.patch(`/feeds/${feedId}/inactive`)).data.result;
}
