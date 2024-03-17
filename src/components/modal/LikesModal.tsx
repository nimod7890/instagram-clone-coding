import { useNavigate } from "react-router-dom";
import { HDivider, Modal, ModalProps } from "src/components/@common";
import { PostProfile } from "src/components/post";
import { getUserPagePath } from "src/routes/routePath";
import { UserType } from "src/types";
import styled from "styled-components";

type LikesModalProps = { participants: UserType[] } & ModalProps;

export default function LikesModal({
  participants,
  isOpen,
  close,
}: LikesModalProps) {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} close={close}>
      <HDivider />
      {participants.map(({ id, loginId }) => (
        <>
          <NavigateProfileButton
            key={id}
            onClick={() => navigate(getUserPagePath(loginId))}
          >
            <PostProfile loginId={loginId} />
          </NavigateProfileButton>
          <HDivider key={id} />
        </>
      ))}
    </Modal>
  );
}

const NavigateProfileButton = styled.button`
  width: 100%;
`;
