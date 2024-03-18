import { IconButton } from "src/components/@common";
import { MenuModal, UpdatePostModal } from "src/components/post";
import { ModalState } from "src/constants";
import { useModalState } from "src/hooks/@common";
import { PostType } from "src/types";

type MenuButtonProps = { post: PostType };

export default function MenuButton({ post }: MenuButtonProps) {
  const { modalState, close, handleChangeModalState } = useModalState();

  return (
    <>
      <IconButton
        icon="more-horizontal"
        onClick={() => handleChangeModalState(ModalState.PostMenu)}
      />
      {(() => {
        switch (modalState) {
          case ModalState.UpdatePost:
            return (
              <UpdatePostModal
                isOpen={modalState === ModalState.UpdatePost}
                post={post}
                close={close}
              />
            );
          case ModalState.DeletePost:
            return null;
          case ModalState.PostMenu:
            return (
              <MenuModal
                loginId={post.feedLoginId}
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
