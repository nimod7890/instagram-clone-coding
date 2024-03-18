import { useParams } from "react-router-dom";
import { GridPosts } from "src/components/user";
import { useGetPosts } from "src/hooks/query";

/** suspense */
export default function UserPostPage() {
  const { loginId } = useParams();

  if (!loginId) {
    return null;
  }

  const { posts, isFetchingNextPage, fetchNextPage } = useGetPosts({
    size: 9,
    targetUserLoginId: loginId,
  });

  return (
    <GridPosts
      posts={posts}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}
