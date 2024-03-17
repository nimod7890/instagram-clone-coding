import Comment from "./Comment";
import { isEmpty } from "lodash";
import { useGetComments } from "src/hooks/query";
import styled from "styled-components";

type CommentsProps = { postId: number };

/** suspense */
export default function Comments({ postId }: CommentsProps) {
  const { comments } = useGetComments({ postId });

  if (isEmpty(comments)) {
    return null;
  }

  return (
    <Container>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
  padding: 10px 0;
`;
