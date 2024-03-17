import React from "react";
import { useGetLikes } from "src/hooks/query";
import { theme } from "src/styles";
import styled from "styled-components";

type LikeListButtonProps = { postId: number } & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "onClick"
>;

export default function LikeListButton({
  postId,
  ...props
}: LikeListButtonProps) {
  const { likes, isPending } = useGetLikes(postId);

  return (
    <>
      <Button {...props} disabled={isPending}>
        좋아요 {likes?.totalCount}개
      </Button>
    </>
  );
}

const Button = styled.button`
  align-self: flex-start;

  margin-left: 5px;

  ${theme.typography.body2Bold}
`;
