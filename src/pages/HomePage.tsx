import { Suspense } from "react";
import { Feed, MyProfile, RecommendedUser } from "src/components/home";
import { useWindowSize } from "src/hooks/@common";
import styled from "styled-components";

export default function HomePage() {
  const { isMobileSize } = useWindowSize();

  return (
    <Container>
      <Suspense>
        <Feed />
      </Suspense>
      {isMobileSize ? null : (
        <MetaContainer>
          <MyProfile />
          <RecommendedUser />
        </MetaContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  overflow: auto;

  gap: 100px;

  padding: 20px 40px;
  padding-bottom: 100px;
`;

const MetaContainer = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;

  gap: 30px;
`;
