import { isEmpty } from "lodash";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import { Grid } from "src/components/@common";
import { PostGridImage } from "src/components/user";
import { useGetPosts } from "src/hooks/query";
import { theme } from "src/styles";
import styled from "styled-components";

/** suspense */
export default function UserPostPage() {
  const { loginId } = useParams();
  const { ref, inView } = useInView();

  if (!loginId) {
    return null;
  }

  const { posts, isFetchingNextPage, fetchNextPage } = useGetPosts({
    size: 9,
    targetUserLoginId: loginId,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isEmpty(posts)) {
    return <HelperText>아직 업로드한 게시글이 없습니다.</HelperText>;
  }

  return (
    <>
      <Grid columns={3}>
        {posts.map((post) => (
          <PostGridImage
            key={post.id}
            contentUrl={post.contentList[0].contentUrl}
          />
        ))}
        <div ref={ref} />
        {/* Todo: skeleton */}
        {isFetchingNextPage && <HelperText>불러오는 중 ...</HelperText>}
      </Grid>
    </>
  );
}

/** styles */
const HelperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;

  padding: 100px 0;

  ${theme.typography.Title2SemiBold}
  color: ${theme.palette.gray500};
`;
