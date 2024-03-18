import { GridPosts } from "src/components/user";
import { useGetInteractedPosts } from "src/hooks/query";

export default function UserLikePage() {
  const { posts, isFetchingNextPage, fetchNextPage } = useGetInteractedPosts({
    state: "like",
  });

  return (
    <GridPosts
      posts={posts}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}
