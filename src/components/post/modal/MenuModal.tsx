import { useMemo } from "react";
import { HDivider, Modal, ModalProps } from "src/components/@common";
import { ModalState } from "src/constants";
import { useAppRepository } from "src/hooks/@common";
import { theme } from "src/styles";
import styled from "styled-components";

type MenuModalProps = {
  loginId: string;
  openModal: (state: ModalState | null) => void;
} & ModalProps;

type MenuType = { label: string; state?: ModalState | null };

export default function MenuModal({
  isOpen,
  openModal,
  close,
  loginId,
}: MenuModalProps) {
  const { userData } = useAppRepository();
  const handleClick = (state: ModalState | null) => openModal(state);

  const menuList: MenuType[] = useMemo(() => {
    const list = [
      { label: "게시물로 이동" },
      { label: "공유 대상" },
      { label: "링크 복사" },
      { label: "퍼가기" },
      { label: "취소", state: null },
    ];

    if (userData?.loginId === loginId) {
      const onlyMe: MenuType[] = [
        { label: "삭제", state: ModalState.DeletePost },
        { label: "수정", state: ModalState.UpdatePost },
        { label: "좋아요 수 숨기기" },
        { label: "댓글 기능 해제" },
      ];

      return onlyMe.concat(list);
    }

    return list;
  }, [userData?.loginId, loginId]);

  return (
    <Modal isOpen={isOpen} close={close}>
      {menuList.map(({ label, state }) => (
        <>
          <Button
            key={label}
            disabled={state === undefined}
            isDelete={label === "삭제"}
            onClick={() => state !== undefined && handleClick(state)}
          >
            {label}
          </Button>
          <HDivider key={label} />
        </>
      ))}
    </Modal>
  );
}

const Button = styled.button<{ isDelete: boolean }>`
  width: 100%;
  height: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${theme.typography.body2Regular}

  font-weight: ${({ isDelete }) => (isDelete ? 600 : 500)};
  color: ${({ isDelete }) => theme.palette[isDelete ? "error" : "gray900"]};
`;
