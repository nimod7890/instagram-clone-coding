import { useMutation } from "@tanstack/react-query";
import { likePost } from "src/apis/post";
import { QueryKeys, invalidateQueries } from "src/libraries/reactQuery";

export default function useLikePost(postId: number) {
  const { mutate, ...rest } = useMutation({
    mutationFn: async () => await likePost(postId),
    onSuccess: () => {
      invalidateQueries({
        queryKeys: [
          [QueryKeys.LikedPosts],
          [QueryKeys.Like, postId],
          [QueryKeys.Posts],
        ],
      });
    },
  });

  return { likePost: mutate, ...rest };
}
