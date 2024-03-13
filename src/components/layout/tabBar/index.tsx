import { NavIconButton, AppMenu } from "src/components/@common";
import { useWindowSize } from "src/hooks/@common";
import { getUserPagePath } from "src/routes/routePath";
import { theme } from "src/styles";
import styled from "styled-components";

// Todo: user 정보 불러오기
const USER_ID = "nim_od";

export default function TabBar() {
  const { isMobileSize } = useWindowSize();

  if (!isMobileSize) {
    return null;
  }

  return (
    <Container>
      <AppMenu />
      <NavIconButton icon="user" to={getUserPagePath(USER_ID)} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${theme.palette.white};
  border-top: 1px solid #0000000d;
`;
