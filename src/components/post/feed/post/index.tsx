import PostDetails from "./PostDetails";
import { HDivider, ImagePreview } from "src/components/@common";
import CommentInput from "src/components/post/CommentInput";
import { theme } from "src/styles";
import { PostType } from "src/types";
import styled from "styled-components";

type PostProps = {
  post: PostType;
};

export default function Post({ post }: PostProps) {
  const { contentList, feedLoginId } = post;

  return (
    <Container>
      <ImagePreview
        imageUrls={contentList.map(({ contentUrl }) => contentUrl)}
        loginId={feedLoginId}
      />
      <PostDetails post={post} />
      <HDivider />
      <CommentInput post={post} />
    </Container>
  );
}

/** styles */

const Container = styled.div`
  border: 1px solid ${theme.palette.gray200};
  border-radius: 10px;

  overflow: hidden;

  background-color: ${theme.palette.white};
`;
