import { useNavigate } from "react-router-dom";
import { Modal, ModalProps } from "src/components/@common";
import { PostProfile } from "src/components/post";
import { getUserPagePath } from "src/routes/routePath";
import { theme } from "src/styles";
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
      <Divider />
      {participants.map(({ id, loginId }) => (
        <>
          <NavigateProfileButton
            key={id}
            onClick={() => navigate(getUserPagePath(loginId))}
          >
            <PostProfile loginId={loginId} />
          </NavigateProfileButton>
          <Divider key={id} />
        </>
      ))}
    </Modal>
  );
}

const Divider = styled.hr`
  width: 100%;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid ${theme.palette.gray300};
`;

const NavigateProfileButton = styled.button`
  width: 100%;
`;
