import { Modal, ModalProps } from "src/components/@common";
import { WriteTextStep } from "src/components/modal/post/create/step";
import { useUpdatePostModal } from "src/hooks/modal";
import { PostType } from "src/types";

type UpdatePostModalProps = { post: PostType } & ModalProps;

export default function UpdatePostModal({
  post,
  isOpen,
  close,
}: UpdatePostModalProps) {
  const { headerOptions, modalStyles, contentProps } = useUpdatePostModal({
    post,
    close,
  });

  return (
    <Modal
      isOpen={isOpen}
      close={close}
      header={headerOptions}
      styles={modalStyles}
    >
      <WriteTextStep {...contentProps} />
    </Modal>
  );
}
