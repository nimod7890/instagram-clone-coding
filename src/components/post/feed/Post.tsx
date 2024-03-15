import { PostType } from "src/types";

type PostProps = {
  post: PostType;
};
export default function Post({ post }: PostProps) {
  return <div>{post.feedText}</div>;
}
