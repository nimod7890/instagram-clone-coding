import { Avatar, Typography } from "src/components/@common";
import styled from "styled-components";

type PostProfileProps = { loginId: string | undefined };

export default function PostProfile({ loginId }: PostProfileProps) {
  return (
    <ProfileContainer>
      <Avatar size={35} />
      <Typography>{loginId}</Typography>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 20px;
  gap: 11px;
`;
