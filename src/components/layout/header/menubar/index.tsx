import ProfileDropdown from "./dropdown";
import { AppMenu } from "src/components/@common";
import { useWindowSize } from "src/hooks/@common";
import styled from "styled-components";

export default function Menubar() {
  const { isMobileSize } = useWindowSize();

  if (isMobileSize) {
    return null;
  }

  return (
    <Container>
      <AppMenu />
      <ProfileDropdown />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
