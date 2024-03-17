import { PostActionsBar, LikesButton } from "src/components/post";
import PostContent from "src/components/post/feed/PostContent";
import { PostType } from "src/types";
import styled from "styled-components";

type PostDetailProps = {
  post: PostType;
};

export default function PostDetails({ post }: PostDetailProps) {
  return (
    <Container>
      <PostActionsBar post={post} />
      <DetailsContainer>
        <LikesButton postId={post.id} />
        <PostContent post={post} />
      </DetailsContainer>
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

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;
