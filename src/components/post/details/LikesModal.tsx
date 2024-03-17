import { Modal, ModalProps } from "src/components/@common";
import { PostProfile } from "src/components/post";
import { useAppRepository } from "src/hooks/@common";
import { UserType } from "src/types";

type LikesModalProps = { participants: UserType[] } & ModalProps;

export default function LikesModal({
  participants,
  isOpen,
  close,
}: LikesModalProps) {
  const { userData } = useAppRepository();
  return (
    <Modal isOpen={isOpen} close={close}>
      <PostProfile loginId={userData?.loginId} />
      {participants.map(({ id, loginId }) => (
        <PostProfile key={id} loginId={loginId} />
      ))}
    </Modal>
  );
}
