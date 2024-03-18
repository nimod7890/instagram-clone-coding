import { useNavigate } from "react-router-dom";
import ProfileMenuItem from "src/components/layout/header/menubar/dropdown/ProfileMenuItem";
import { useAppRepository } from "src/hooks/@common";
import RoutePath, {
  getUserBookMarkPagePath,
  getUserPagePath,
} from "src/routes/routePath";
import { theme } from "src/styles";
import styled from "styled-components";

export default function ProfileMenu() {
  const { userData } = useAppRepository();
  const navigate = useNavigate();

  if (!userData) {
    return null;
  }

  return (
    <Containter>
      <ProfileMenuItem
        icon="user"
        onClick={() => navigate(getUserPagePath(userData.loginId))}
      >
        프로필
      </ProfileMenuItem>
      <ProfileMenuItem
        icon="bookmark"
        onClick={() => navigate(getUserBookMarkPagePath(userData.loginId))}
      >
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
