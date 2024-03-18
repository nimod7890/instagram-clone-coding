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
      <Profile loginId={loginId} />
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

  overflow: auto;
`;
