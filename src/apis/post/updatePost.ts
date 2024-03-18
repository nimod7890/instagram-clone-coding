import apiClient from "src/apis";

export default async function updatePost({
  feedId,
  feedText,
}: {
  feedId: number;
  feedText: string;
}): Promise<{ feedId: number }> {
  return (await apiClient.patch(`/feeds/${feedId}`, { feedText })).data.result;
}
