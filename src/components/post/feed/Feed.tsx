import Stories from "./Stories";
import Post from "./post";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGetPosts } from "src/hooks/query";
import { theme } from "src/styles";
import styled from "styled-components";

export default function Feed() {
  const { ref, inView } = useInView();
  const { posts, isFetchingNextPage, fetchNextPage } = useGetPosts();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <FeedContainer>
      <Stories />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <div ref={ref} />
      {isFetchingNextPage &&
        Array(5)
          .fill(1)
          .map((_, index) => <Skeleton key={index} />)}
    </FeedContainer>
  );
}

const FeedContainer = styled.div`
  width: calc(100% - 40px);

  max-width: 520px;
  height: max-content;

  display: flex;
  flex-direction: column;

  gap: 20px;
`;

const Skeleton = styled.div`
  width: 100%;
  height: 500px;

  background-color: ${theme.palette.gray100};
  border-radius: 10px;
`;
