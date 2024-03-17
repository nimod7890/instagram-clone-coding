import { useMutation } from "@tanstack/react-query";
import { likePost } from "src/apis/post";
import { QueryKeys, invalidateQueries } from "src/libraries/reactQuery";

export default function useLikePost(postId: number) {
  const queryKeys = [
    [QueryKeys.Posts, 10, undefined],
    [QueryKeys.Like, postId],
  ];

  const { mutate, ...rest } = useMutation({
    mutationFn: async () => await likePost(postId),
    onSuccess: () => {
      invalidateQueries({ queryKeys });
    },
  });

  return { likePost: mutate, ...rest };
}
