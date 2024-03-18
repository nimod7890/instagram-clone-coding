import PostGridImage from "./PostGridImage";
import { PostDetailsModal } from "src/components/post";
import { useModal } from "src/hooks/@common";
import { PostType } from "src/types";
import styled from "styled-components";

type PostDetailsModalProps = { post: PostType };

export default function PostGridImageButton({ post }: PostDetailsModalProps) {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <Button onClick={open}>
        <PostGridImage contentUrl={post.contentList[0].contentUrl} />
      </Button>
      <PostDetailsModal post={post} isOpen={isOpen} close={close} />
    </>
  );
}

const Button = styled.button`
  min-width: fit-content;
`;
