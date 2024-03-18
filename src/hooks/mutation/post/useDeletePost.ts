import { useMutation } from "@tanstack/react-query";
import { deletePost } from "src/apis/post";
import { QueryKeys, invalidateQueries } from "src/libraries/reactQuery";
import { showToastPromise } from "src/libraries/toast";

export default function useDeletePost({
  postId,
  onSuccess,
}: {
  postId: number;
  onSuccess: () => void;
}) {
  const { mutate, ...rest } = useMutation({
    mutationFn: async () => await deletePost(postId),
    onSuccess: () => {
      const invalidationPromise = invalidateQueries({
        queryKeys: [[QueryKeys.Posts]],
      });

      showToastPromise(invalidationPromise, "게시글 삭제");
      onSuccess();
    },
  });

  return { deletePost: mutate, ...rest };
}
