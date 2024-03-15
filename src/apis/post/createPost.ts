import apiClient from "src/apis";

export default async function createPost(data: {
  feedText: string;
  contentUrls: string[];
}): Promise<{ feedId: number }> {
  return (await apiClient.post(`/feeds`, data)).data.result;
}
