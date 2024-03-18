import PostGridImage from "./PostGridImage";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Grid } from "src/components/@common";
import { theme } from "src/styles";
import { PostSummaryType, PostType } from "src/types";
import styled from "styled-components";

type GridPostsProps = {
  posts: PostSummaryType[] | PostType[];
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
};

export default function GridPosts({
  posts,
  fetchNextPage,
  isFetchingNextPage,
}: GridPostsProps) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const isPostType = (post: PostSummaryType | PostType): post is PostType => {
    return "feedLoginId" in post;
  };

  if (isEmpty(posts)) {
    return <HelperText>아직 업로드한 게시글이 없습니다.</HelperText>;
  }

  return (
    <>
      <Grid columns={3}>
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            {isPostType(post) ? (
              // Todo: 모달 열기
              <PostGridImage
                key={`${post.id}-1`}
                contentUrl={post.contentList[0].contentUrl}
              />
            ) : (
              <PostGridImage
                key={`${post.id}-2`}
                contentUrl={post.contentUrl}
              />
            )}
          </React.Fragment>
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
