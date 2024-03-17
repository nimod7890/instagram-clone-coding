import LikeListButton from "./LikeListButton";
import PostActionsBar from "./PostActionsBar";
import { PostType } from "src/types";
import styled from "styled-components";

type PostDetailProps = {
  post: PostType;
};

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <Container>
      <PostActionsBar post={post} />
      <LikeListButton postId={post.id} />
    </Container>
  );
}

/** styles */

const Container = styled.div`
  width: calc(100% - 30px);

  display: flex;
  flex-direction: column;

  padding: 20px 15px;
  gap: 15px;
`;
