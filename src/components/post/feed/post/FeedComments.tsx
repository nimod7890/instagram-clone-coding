import { Suspense } from "react";
import { Comments } from "src/components/post";
import { useToggle } from "src/hooks/@common";
import { theme } from "src/styles";
import { PostType } from "src/types";
import styled from "styled-components";

type FeedCommentsProps = { post: PostType };

export default function FeedComments({ post }: FeedCommentsProps) {
  const { isOpen, open } = useToggle();
  const { id: postId, feedCommentCount } = post;

  const hasMultipleComments = feedCommentCount > 2;

  if (hasMultipleComments && !isOpen) {
    return (
      <ToggleButton onClick={open}>
        댓글 {feedCommentCount}개 모두 보기
      </ToggleButton>
    );
  }

  return (
    <Suspense>
      <Comments postId={postId} />
    </Suspense>
  );
}

const ToggleButton = styled.button`
  align-self: start;
  ${theme.typography.body2Regular}

  color: ${theme.palette.gray400};
`;
