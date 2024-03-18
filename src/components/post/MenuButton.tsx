import DeletePostModal from "./modal/DeletePostModal";
import MenuModal from "./modal/MenuModal";
import UpdatePostModal from "./modal/UpdatePostModal";
import { IconButton } from "src/components/@common";
import { ModalState } from "src/constants";
import { useModalState } from "src/hooks/@common";
import { PostType } from "src/types";

type MenuButtonProps = {
  post: PostType;
  close: () => void;
};

export default function MenuButton({
  post,
  close: closeDetails,
}: MenuButtonProps) {
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
            return (
              <DeletePostModal
                isOpen={modalState === ModalState.DeletePost}
                close={close}
                postId={post.id}
                onSuccess={closeDetails}
              />
            );
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
