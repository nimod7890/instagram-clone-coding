import Post from "./Post";
import Stories from "./Stories";
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
      {isFetchingNextPage && <Skeleton />}
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
  background-color: ${theme.palette.gray100};
  width: 100%;
  height: 30px;
`;
