import { isEmpty } from "lodash";
import { Avatar } from "src/components/@common";
import { useInput } from "src/hooks/@common";
import { useCreateComment } from "src/hooks/mutation/post";
import { theme } from "src/styles";
import { PostType } from "src/types";
import styled from "styled-components";

type CommentInputProps = { post: PostType; hideAvatar?: boolean };

export default function CommentInput({
  post,
  hideAvatar = false,
}: CommentInputProps) {
  const { text, onChangeText, clearText } = useInput();

  const { createComment } = useCreateComment({
    postId: post.id,
    onSuccess: clearText,
  });

  return (
    <Container>
      {hideAvatar ? null : <Avatar size={30} />}
      <ActionContainer>
        <InputArea
          maxLength={199}
          value={text}
          onChange={(event) => onChangeText(event.target.value)}
          placeholder="댓글 달기..."
        />
        <SubmitButton
          disabled={isEmpty(text)}
          onClick={() => createComment(text)}
        >
          게시
        </SubmitButton>
      </ActionContainer>
    </Container>
  );
}

/** styles */

const Container = styled.div`
  border-top: 1px solid ${theme.palette.gray300};
  width: calc(100% - 30px);

  display: flex;
  align-items: center;

  gap: 5px;
  padding: 15px;
`;

const ActionContainer = styled.div`
  flex-grow: 1;
  display: flex;
`;

const InputArea = styled.textarea`
  height: 25px;

  flex-grow: 1;
  resize: none;
  overflow-y: auto;

  ${theme.typography.body2Regular}

  ::placeholder {
    color: ${theme.palette.gray500};
  }
`;

const SubmitButton = styled.button`
  ${theme.typography.body2Bold}
  color:${theme.palette.primary500}
`;
