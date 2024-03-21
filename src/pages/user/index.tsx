import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { HDivider } from "src/components/@common";
import { Profile, UserActivityTabs } from "src/components/user";
import styled from "styled-components";

export default function UserPage() {
  const { loginId } = useParams();

  if (!loginId) {
    return null;
  }

  return (
    <Container>
      <Suspense>
        <Profile loginId={loginId} />
      </Suspense>
      <HDivider />
      <UserActivityTabs loginId={loginId} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
