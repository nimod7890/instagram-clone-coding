import ProfileSummaryButton from "./ProfileSummaryButton";
import { Suspense } from "react";
import { Typography } from "src/components/@common";
import { FollowsModal } from "src/components/user";
import { ModalState } from "src/constants";
import { useModalState } from "src/hooks/@common";
import { UserProfileType } from "src/types";
import styled from "styled-components";

type ProfileSummaryProps = { profile: UserProfileType };

export default function ProfileSummary({ profile }: ProfileSummaryProps) {
  const { modalState, handleChangeModalState, close } = useModalState();

  return (
    <>
      <Container>
        <Button disabled>
          <Typography type="body1Light">게시글</Typography>
          <Typography type="body1SemiBold">{profile.feedCount}</Typography>
        </Button>
        <ProfileSummaryButton
          label="팔로워"
          value={profile.followerCount}
          onClick={() => handleChangeModalState(ModalState.Followers)}
        />
        <ProfileSummaryButton
          label="팔로잉"
          value={profile.followingCount}
          onClick={() => handleChangeModalState(ModalState.Followings)}
        />
      </Container>
      <Suspense>
        {modalState && (
          <FollowsModal
            state={modalState}
            loginId={profile.loginId}
            isOpen={modalState !== null}
            close={close}
          />
        )}
      </Suspense>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
`;
