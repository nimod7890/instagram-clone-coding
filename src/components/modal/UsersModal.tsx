import { useNavigate } from "react-router-dom";
import { HDivider, Modal, ModalProps } from "src/components/@common";
import { PostProfile } from "src/components/post";
import { getUserPagePath } from "src/routes/routePath";
import { UserType } from "src/types";
import styled from "styled-components";

type UsersModalProps = { users: UserType[] } & ModalProps;

export default function UsersModal({ users, isOpen, close }: UsersModalProps) {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} close={close}>
      {users.map(({ id, loginId }) => (
        <>
          <NavigateProfileButton
            key={id}
            onClick={() => navigate(getUserPagePath(loginId))}
          >
            <PostProfile
              key={id}
              loginId={loginId}
              style={{ padding: "15px" }}
            />
          </NavigateProfileButton>
          <HDivider key={id} />
        </>
      ))}
    </Modal>
  );
}

const NavigateProfileButton = styled.button`
  width: 100%;
  height: fit-content;
`;
