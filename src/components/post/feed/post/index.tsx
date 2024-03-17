import { ImagePreview } from "src/components/@common";
import PostDetail from "src/components/post/feed/post/PostDetail";
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
      <PostDetail post={post} />
      {/* Todo: 댓글 입력 부분 */}
    </Container>
  );
}

/** styles */

const Container = styled.div`
  border: 1px solid ${theme.palette.gray200};
  border-radius: 10px;

  overflow: hidden;
`;
