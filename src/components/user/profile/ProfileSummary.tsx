import ProfileSummaryButton from "./ProfileSummaryButton";
import { Suspense, useState } from "react";
import { Typography } from "src/components/@common";
import { FollowsModal } from "src/components/modal";
import { UserProfileType } from "src/types";
import styled from "styled-components";

type ProfileSummaryProps = { profile: UserProfileType };

export default function ProfileSummary({ profile }: ProfileSummaryProps) {
  const [modalState, setModalState] = useState<"팔로잉" | "팔로워" | null>(
    null
  );

  const close = () => setModalState(null);

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
          onClick={() => setModalState("팔로워")}
        />
        <ProfileSummaryButton
          label="팔로잉"
          value={profile.followingCount}
          onClick={() => setModalState("팔로잉")}
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
