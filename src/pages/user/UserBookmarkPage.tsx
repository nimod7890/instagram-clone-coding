import { GridPosts } from "src/components/user";
import { useGetInteractedPosts } from "src/hooks/query";

export default function UserBookmarkPage() {
  const { posts, isFetchingNextPage, fetchNextPage } = useGetInteractedPosts({
    state: "bookmark",
  });

  return (
    <GridPosts
      posts={posts}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}
