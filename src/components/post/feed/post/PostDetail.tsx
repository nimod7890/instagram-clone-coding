import PostActionsBar from "src/components/post/feed/post/PostActionsBar";
import { PostType } from "src/types";
import styled from "styled-components";

type PostDetailProps = {
  post: PostType;
};

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <>
      <Container>
        <PostActionsBar post={post} />
      </Container>
    </>
  );
}

/** styles */

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 15px;
  gap: 15px;
`;
