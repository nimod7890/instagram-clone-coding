import PostGridImage from "./PostGridImage";
import PostGridImageButton from "./PostGridImageButton";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Grid, HelperText } from "src/components/@common";
import { PostSummaryType, PostType } from "src/types";

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
              <PostGridImageButton key={`${post.id}-1`} post={post} />
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
