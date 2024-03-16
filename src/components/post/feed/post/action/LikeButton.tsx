import { useState } from "react";
import { IconButton } from "src/components/@common";
import { useLikePost } from "src/hooks/mutation/post";
import { PostType } from "src/types";

type LikeButtonProps = { post: PostType };

export default function LikeButton({ post }: LikeButtonProps) {
  const { isLiked, id: postId } = post;

  const { likePost } = useLikePost();
  const [like, setLike] = useState<boolean>(isLiked);

  return (
    <IconButton
      color={like ? "error" : "black"}
      icon="heart"
      fill={like ? "red" : "none"}
      onClick={() => {
        likePost(postId);
        setLike((prev) => !prev);
      }}
    />
  );
}
