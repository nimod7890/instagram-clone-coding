import AuthenticatedLayout from "src/components/layout/AuthenticatedLayout";
import UnAuthenticatedLayout from "src/components/layout/UnAuthenticatedLayout";
import { GlobalSize } from "src/constants";
import styled from "styled-components";

export default function Layout() {
  const isAuthenticated: boolean = true;

  return (
    <Container>
      {isAuthenticated ? <AuthenticatedLayout /> : <UnAuthenticatedLayout />}
    </Container>
  );
}

const Container = styled.div`
  min-width: ${GlobalSize.WindowWidthMin};
  min-height: 100vh;

  overflow: hidden;
`;
