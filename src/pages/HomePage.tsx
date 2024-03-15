import { Suspense } from "react";
import { Feed } from "src/components/post";
import { useWindowSize } from "src/hooks/@common";
import styled from "styled-components";

export default function HomePage() {
  const { isMobileSize } = useWindowSize();

  return (
    <Container>
      <Suspense>
        <Feed />
      </Suspense>
      {isMobileSize ? null : <div>meta data</div>}
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
