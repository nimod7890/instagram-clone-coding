import { DeferredWrapper } from "src/components/@common";
import { theme } from "src/styles";
import styled from "styled-components";

export default function GlobalLoading() {
  return (
    <DeferredWrapper>
      <Container>
        <Loading />
      </Container>
    </DeferredWrapper>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Loading = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  color: ${theme.palette.primary200};
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;

  @keyframes animloader {
    0% {
      box-shadow: -38px -12px, -14px 0, 14px 0, 38px 0;
    }
    33% {
      box-shadow: -38px 0px, -14px -12px, 14px 0, 38px 0;
    }
    66% {
      box-shadow: -38px 0px, -14px 0, 14px -12px, 38px 0;
    }
    100% {
      box-shadow: -38px 0, -14px 0, 14px 0, 38px -12px;
    }
  }
`;
