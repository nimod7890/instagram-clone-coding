import React from "react";
import { LikesModal } from "src/components/user";
import { useModal } from "src/hooks/@common";
import { useGetLikes } from "src/hooks/query";
import { theme } from "src/styles";
import styled from "styled-components";

type LikesButtonProps = { postId: number } & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "onClick"
>;

/** suspense */
export default function LikesButton({ postId, ...props }: LikesButtonProps) {
  const { isOpen, open, close } = useModal();
  const { likes, isPending } = useGetLikes(postId);

  return (
    <>
      <Button {...props} disabled={isPending} onClick={open}>
        좋아요 {likes?.totalCount}개
      </Button>
      <LikesModal
        users={likes.feedLikeList}
        isOpen={isOpen}
        close={close}
        header={{ title: `좋아요 ${likes.totalCount}개` }}
      />
    </>
  );
}

const Button = styled.button`
  align-self: flex-start;

  ${theme.typography.body2Bold}
`;
