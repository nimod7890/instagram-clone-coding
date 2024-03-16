import LikeButton from "./action/LikeButton";
import { IconButton } from "src/components/@common";
import { PostType } from "src/types";
import styled from "styled-components";

type PostActionsBarProps = {
  post: PostType;
};

export default function PostActionsBar({ post }: PostActionsBarProps) {
  return (
    <Container>
      <LikeButton post={post} />
      <IconButton icon="message-circle" color={"black"} />
      <Space />
      <IconButton
        fill={post.isBookMarked ? "black" : "none"}
        color={"black"}
        icon="bookmark"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 15px;
`;

const Space = styled.div`
  flex-grow: 1;
`;
