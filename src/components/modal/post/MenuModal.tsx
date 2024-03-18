import { HDivider, Modal, ModalProps } from "src/components/@common";
import { ModalState } from "src/constants";
import { theme } from "src/styles";
import styled from "styled-components";

type MenuModalProps = { openModal: (state: ModalState) => void } & ModalProps;

export default function MenuModal({
  isOpen,
  openModal,
  close,
}: MenuModalProps) {
  const handleClick = (state: ModalState) => openModal(state);

  return (
    <Modal isOpen={isOpen} close={close}>
      {MENU.map(({ label, state }) => (
        <>
          <HDivider />
          <Button
            isDeleteModal={label === "삭제"}
            onClick={() => state && handleClick(state)}
          >
            {label}
          </Button>
        </>
      ))}
    </Modal>
  );
}

const MENU = [
  { label: "삭제", state: ModalState.DeletePost },
  { label: "수정", state: ModalState.UpdatePost },
  { label: "좋아요 수 숨기기" },
  { label: "댓글 기능 해제" },
  { label: "게시물로 이동" },
  { label: "공유 대상" },
  { label: "링크 복사" },
  { label: "퍼가기" },
  { label: "취소", state: null },
];

const Button = styled.button<{ isDeleteModal: boolean }>`
  width: 100%;
  height: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${theme.typography.body2Regular}

  font-weight: ${({ isDeleteModal }) => (isDeleteModal ? 600 : 500)};
  color: ${({ isDeleteModal }) =>
    theme.palette[isDeleteModal ? "error" : "gray900"]};
`;
