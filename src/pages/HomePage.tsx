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
      {isMobileSize ? null : <div>meta</div>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 104px;
  padding: 0 40px;

  width: 100%;
  height: 100%;
`;
