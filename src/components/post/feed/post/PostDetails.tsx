import PostContent from "./PostContent";
import { Suspense } from "react";
import {
  PostActionsBar,
  LikesButton,
  PostCreatedAt,
} from "src/components/post";
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
        <Suspense>
          <LikesButton postId={post.id} />
        </Suspense>
        <PostContent post={post} />
        {/* Todo: 댓글 리스트 */}
        <PostCreatedAt date={post.createdAt} />
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

  margin-left: 5px;

  gap: 5px;
`;
