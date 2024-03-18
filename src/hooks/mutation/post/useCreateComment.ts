import { useMutation } from "@tanstack/react-query";
import { createComment } from "src/apis/post";
import { QueryKeys, invalidateQueries } from "src/libraries/reactQuery";

export default function useCreateComment({
  postId,
  onSuccess,
}: {
  postId: number;
  onSuccess: () => void;
}) {
  const { mutate, ...rest } = useMutation({
    mutationFn: async (commentText: string) =>
      await createComment({ postId, commentText }),
    onSuccess: () => {
      invalidateQueries({ queryKeys: [[QueryKeys.Comment, postId]] });
      onSuccess();
    },
  });

  return { createComment: mutate, ...rest };
}
