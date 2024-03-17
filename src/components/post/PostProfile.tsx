import { Avatar, Typography } from "src/components/@common";
import { KeyOfPalette } from "src/styles";
import styled from "styled-components";

type PostProfileProps = {
  loginId: string | undefined;
  color?: KeyOfPalette;
} & React.HTMLAttributes<HTMLDivElement>;

export default function PostProfile({
  loginId,
  color = "black",
  ...props
}: PostProfileProps) {
  return (
    <ProfileContainer {...props}>
      <Avatar />
      <Typography color={color}>{loginId}</Typography>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 20px;
  gap: 11px;
`;
