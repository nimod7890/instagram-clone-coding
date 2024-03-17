import apiClient from "src/apis";

export default async function createComment({
  postId,
  commentText,
}: {
  postId: number;
  commentText: string;
}): Promise<{ feedCommentId: number }> {
  return (await apiClient.post(`/feeds/${postId}/comment`, { commentText }))
    .data.result;
}
