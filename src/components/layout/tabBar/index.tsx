import { useWindowSize } from "src/hooks/@common";
import { theme } from "src/styles";
import styled from "styled-components";

export default function TabBar() {
  const { isMobileSize } = useWindowSize();

  if (!isMobileSize) {
    return null;
  }

  return <Container>tab bar</Container>;
}

const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${theme.palette.white};
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;
