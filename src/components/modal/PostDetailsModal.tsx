import { Modal, ModalProps } from "src/components/@common";
import { PostType } from "src/types";

type PostDetailsModalProps = { post: PostType } & Pick<
  ModalProps,
  "isOpen" | "close"
>;

export default function PostDetailsModal({
  post,
  isOpen,
  close,
}: PostDetailsModalProps) {
  return <Modal isOpen={isOpen} close={close}></Modal>;
}
