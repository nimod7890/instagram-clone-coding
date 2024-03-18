import { IconButton } from "src/components/@common";
import MenuModal from "src/components/modal/post/MenuModal";
import { ModalState } from "src/constants";
import { useModalState } from "src/hooks/@common";
import { PostType } from "src/types";

type MenuButtonProps = { post: PostType };

export default function MenuButton({ post }: MenuButtonProps) {
  const { modalState, close, handleChangeModalState } = useModalState();
  post;
  return (
    <>
      <IconButton
        icon="more-horizontal"
        onClick={() => handleChangeModalState(ModalState.PostMenu)}
      />
      {(() => {
        switch (modalState) {
          case ModalState.UpdatePost:
            return null;
          case ModalState.DeletePost:
            return null;
          case ModalState.PostMenu:
            return (
              <MenuModal
                isOpen={modalState === ModalState.PostMenu}
                close={close}
                openModal={handleChangeModalState}
              />
            );
          default:
            return null;
        }
      })()}
    </>
  );
}
