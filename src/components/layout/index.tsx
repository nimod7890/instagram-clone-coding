import { Navigate, Outlet } from "react-router-dom";
import Header from "src/components/layout/header";
import TabBar from "src/components/layout/tabBar";
import { GlobalSize } from "src/constants";
import { useAuthStorage } from "src/hooks/@common";
import RoutePath from "src/routes/routePath";
import styled from "styled-components";

export default function AuthenticatedLayout() {
  const { isEmptyToken } = useAuthStorage();

  if (isEmptyToken) {
    return <Navigate to={RoutePath.Signout} />;
  }

  return (
    <Container>
      <Header />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
      <TabBar />
    </Container>
  );
}

/** styles */

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
`;

const BodyContainer = styled.div`
  width: 100%;
  max-width: ${GlobalSize.WindowWidthMax};
  height: 100%;

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
