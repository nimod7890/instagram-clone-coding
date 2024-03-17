import { NavIconButton, AppMenu } from "src/components/@common";
import { useAppRepository, useWindowSize } from "src/hooks/@common";
import { getUserPagePath } from "src/routes/routePath";
import { theme } from "src/styles";
import styled from "styled-components";

export default function TabBar() {
  const { isMobileSize } = useWindowSize();
  const { userData } = useAppRepository();

  if (!isMobileSize) {
    return null;
  }

  return (
    <Container>
      <AppMenu />
      {userData && (
        <NavIconButton icon="user" to={getUserPagePath(userData.loginId)} />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  min-height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${theme.palette.white};
  border-top: 1px solid #0000000d;
`;
