import ProfileSummary from "./ProfileSummary";
import { Avatar, Typography } from "src/components/@common";
import { useAppRepository, useWindowSize } from "src/hooks/@common";
import { useGetProfile } from "src/hooks/query";
import { theme } from "src/styles";
import styled from "styled-components";

type ProfileProps = { loginId: string };

export default function Profile({ loginId }: ProfileProps) {
  const { isMobileSize } = useWindowSize();
  const { userData } = useAppRepository();
  const { profile } = useGetProfile(loginId);

  if (!profile) {
    return null;
  }

  return (
    <Container isMobileSize={isMobileSize}>
      <Avatar size={isMobileSize ? 75 : 150} />
      <Main>
        <HStack>
          <Typography type={isMobileSize ? "Title2Regular" : "Title1Regular"}>
            {loginId}
          </Typography>
          {loginId === userData?.loginId && (
            <EditButton>프로필 편집</EditButton>
          )}
        </HStack>
        <ProfileSummary profile={profile} />
        <Typography type="body1Light">{profile.realName}</Typography>
      </Main>
    </Container>
  );
}

/** styles */

const Container = styled.div<{ isMobileSize: boolean }>`
  display: flex;
  align-items: center;

  gap: ${({ isMobileSize }) => (isMobileSize ? "30px" : "100px")};
  padding: ${({ isMobileSize }) => (isMobileSize ? "30px" : "30px 100px")};
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const HStack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const EditButton = styled.button`
  border: 1px solid ${theme.palette.gray300};
  border-radius: 3px;

  padding: 2px 5px 0 5px;

  ${theme.typography.CaptionRegular}
`;
