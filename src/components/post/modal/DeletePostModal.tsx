import {
  HDivider,
  Modal,
  ModalProps,
  Typography,
} from "src/components/@common";
import { useDeletePost } from "src/hooks/mutation/post";
import { theme } from "src/styles";
import styled from "styled-components";

type DeletePostModalProps = {
  postId: number;
  onSuccess: () => void;
} & ModalProps;

export default function DeletePostModal({
  postId,
  isOpen,
  close,
  onSuccess,
}: DeletePostModalProps) {
  const { deletePost, isPending } = useDeletePost({ postId, onSuccess });

  return (
    <Modal isOpen={isOpen} close={close} styles={{ height: "215px" }}>
      <Container>
        <Typography type="body1SemiBold">게시물을 삭제하시겠어요?</Typography>
        <Typography>이 게시물을 삭제하시겠어요?</Typography>
      </Container>
      <HDivider />
      <Button isDelete disabled={isPending} onClick={() => deletePost()}>
        삭제
      </Button>
      <HDivider />
      <Button disabled={isPending} onClick={() => close()}>
        취소
      </Button>
    </Modal>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 30px 0;
  overflow: hidden;
`;

const Button = styled.button<{ isDelete?: boolean }>`
  width: 100%;
  height: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${theme.typography.body2Regular}

  font-weight: ${({ isDelete = false }) => (isDelete ? 600 : 500)};
  color: ${({ isDelete = false }) =>
    theme.palette[isDelete ? "error" : "gray900"]};
`;
