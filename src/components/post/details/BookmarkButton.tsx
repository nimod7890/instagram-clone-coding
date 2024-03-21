import { useEffect, useState } from "react";
import { IconButton } from "src/components/@common";
import { useBookmarkPost } from "src/hooks/mutation/post";
import { PostType } from "src/types";

type BookmarkButtonProps = { post: PostType };

export default function BookmarkButton({ post }: BookmarkButtonProps) {
  const { isBookMarked, id: postId } = post;

  const [bookmarked, updateBookmarked] = useState<boolean>(isBookMarked);

  const { bookmarkPost } = useBookmarkPost({
    postId,
    updateBookmarked,
  });

  useEffect(() => {
    updateBookmarked(isBookMarked);
  }, [postId, isBookMarked]);

  return (
    <IconButton
      color={"black"}
      icon="bookmark"
      fill={bookmarked ? "black" : "none"}
      onClick={() => bookmarkPost()}
    />
  );
}
