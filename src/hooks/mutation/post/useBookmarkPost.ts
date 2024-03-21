import { useMutation } from "@tanstack/react-query";
import { bookmarkPost } from "src/apis/post";
import { QueryKeys, invalidateQueries } from "src/libraries/reactQuery";

export default function useBookmarkPost({
  postId,
  updateBookmarked,
}: {
  postId: number;
  updateBookmarked: (isBookmarked: boolean) => void;
}) {
  const { mutate, ...rest } = useMutation({
    mutationFn: async () => await bookmarkPost(postId),
    onSuccess: ({ isBookMarked }) => {
      invalidateQueries({
        queryKeys: [[QueryKeys.BookMarkedPosts], [QueryKeys.Posts]],
      });
      updateBookmarked(isBookMarked);
    },
  });

  return { bookmarkPost: mutate, ...rest };
}
