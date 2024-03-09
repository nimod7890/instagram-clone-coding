import { useParams } from "react-router-dom";

export default function PostPage() {
  const { postId } = useParams();

  return <>{postId}</>;
}
