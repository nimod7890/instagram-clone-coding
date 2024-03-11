import { IconButton, NavIconButton } from "src/components/@common";
import ProfileDropdown from "src/components/layout/header/menubar/dropdown";
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
      <ProfileDropdown />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
