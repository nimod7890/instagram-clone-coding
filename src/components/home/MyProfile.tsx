import { Avatar, Typography } from "src/components/@common";
import { useAppRepository } from "src/hooks/@common";
import { useGetProfile } from "src/hooks/query";
import styled from "styled-components";

export default function MyProfile() {
  const { userData } = useAppRepository();

  if (!userData) {
    return null;
  }

  const { profile } = useGetProfile(userData.loginId);

  return (
    <Container>
      <Avatar size={80} />
      <DetailContainer>
        <Typography type="Title2Bold">{userData.loginId}</Typography>
        <Typography color="gray500">{profile?.realName}</Typography>
      </DetailContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 22px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
