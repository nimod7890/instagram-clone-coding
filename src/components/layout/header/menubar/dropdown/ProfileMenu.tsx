import { useNavigate } from "react-router-dom";
import ProfileMenuItem from "src/components/layout/header/menubar/dropdown/ProfileMenuItem";
import RoutePath, { getUserPagePath } from "src/routes/routePath";
import { theme } from "src/styles";
import styled from "styled-components";

const USER_ID = "nim_od";

export default function ProfileMenu() {
  const navigate = useNavigate();

  return (
    <Containter>
      <ProfileMenuItem
        icon="user"
        onClick={() => navigate(getUserPagePath(USER_ID))}
      >
        프로필
      </ProfileMenuItem>
      <ProfileMenuItem icon="bookmark" disabled>
        저장됨
      </ProfileMenuItem>
      <ProfileMenuItem icon="settings" disabled>
        설정
      </ProfileMenuItem>
      <ProfileMenuItem icon="alert-circle" disabled>
        문제 신고
      </ProfileMenuItem>
      <ProfileMenuItem
        icon="settings"
        onClick={() => navigate(RoutePath.Signout, { replace: true })}
      >
        로그아웃
      </ProfileMenuItem>
    </Containter>
  );
}

const Containter = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  gap: 8px;

  background-color: ${theme.palette.white};
  border: 1px solid #eaecf0;
  border-radius: 8px;

  box-shadow: 0px 4px 6px -2px #10182808;
`;
