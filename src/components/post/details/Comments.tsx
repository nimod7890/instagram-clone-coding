import Comment from "./Comment";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGetComments } from "src/hooks/query";
import styled from "styled-components";

type CommentsProps = { postId: number };

/** suspense */
export default function Comments({ postId }: CommentsProps) {
  const { ref, inView } = useInView();
  const { comments, fetchNextPage } = useGetComments({ postId });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isEmpty(comments)) {
    return null;
  }

  return (
    <Container>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <div ref={ref} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
  padding-top: 10px;
`;
