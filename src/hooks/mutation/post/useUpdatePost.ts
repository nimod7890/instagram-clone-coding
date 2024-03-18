import { useMutation } from "@tanstack/react-query";
import { updatePost } from "src/apis/post";
import { QueryKeys, invalidateQueries } from "src/libraries/reactQuery";
import { showToastPromise } from "src/libraries/toast";

export default function useUpdatePost({
  postId,
  onSuccess,
}: {
  postId: number;
  onSuccess: () => void;
}) {
  const { mutate, ...rest } = useMutation({
    mutationFn: async (feedText: string) =>
      await updatePost({ feedId: postId, feedText }),
    onSuccess: () => {
      const invalidationPromise = invalidateQueries({
        queryKeys: [[QueryKeys.Posts]],
      });

      showToastPromise(invalidationPromise, "게시글 업데이트");
      onSuccess();
    },
  });

  return { updatePost: mutate, ...rest };
}
