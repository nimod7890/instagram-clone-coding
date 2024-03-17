import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { HDivider, Modal, ModalProps } from "src/components/@common";
import { PostProfile } from "src/components/post";
import { getUserPagePath } from "src/routes/routePath";
import { UserType } from "src/types";
import styled from "styled-components";

export type UsersModalProps = {
  users: Pick<UserType, "loginId">[];
} & ModalProps;

export default function UsersModal({ users, ...props }: UsersModalProps) {
  const navigate = useNavigate();

  return (
    <Modal {...props}>
      {(() => {
        if (isEmpty(users)) {
          return <EmptyText>리스트가 비어있습니다.</EmptyText>;
        }

        return users.map(({ loginId }) => (
          <>
            <NavigateProfileButton
              key={loginId}
              onClick={() => navigate(getUserPagePath(loginId))}
            >
              <PostProfile
                key={loginId}
                loginId={loginId}
                style={{ padding: "15px" }}
              />
            </NavigateProfileButton>
            <HDivider key={loginId} />
          </>
        ));
      })()}
    </Modal>
  );
}

const NavigateProfileButton = styled.button`
  width: 100%;
  height: fit-content;
`;

const EmptyText = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
