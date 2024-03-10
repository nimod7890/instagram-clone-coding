import IconButton from "src/components/@common/button/IconButton";
import NavIconButton from "src/components/@common/button/NavIconButton";
import { useWindowSize } from "src/hooks/@common";
import RoutePath from "src/routes/routePath";
import styled from "styled-components";

export default function Menubar() {
  const { isMobileSize } = useWindowSize();

  if (isMobileSize) {
    return null;
  }

  return (
    <Container>
      <NavIconButton icon="home" to={RoutePath.Home} />
      <NavIconButton icon="send" to={RoutePath.DirectMessage} />
      <IconButton icon="plus-square" />
      <NavIconButton icon="heart" to={RoutePath.Notification} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
