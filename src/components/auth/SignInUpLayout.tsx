import { PropsWithChildren } from "react";
import { HomeMockup } from "src/components/@common";
import AppStore from "src/components/auth/AppStore";
import AuthPageSwitcher from "src/components/auth/AuthPageSwitcher";
import { theme } from "src/styles";
import styled from "styled-components";

type SignInUpLayoutProps = {
  isSignInPage?: boolean;
};

export default function SignInUpLayout({
  isSignInPage = false,
  children,
}: PropsWithChildren<SignInUpLayoutProps>) {
  return (
    <Container>
      <HomeMockup />
      <MainContainer>
        <InputContainer>{children}</InputContainer>
        <AuthPageSwitcher isSignInPage={isSignInPage} />
        <AppStore />
      </MainContainer>
    </Container>
  );
}

/** styles */

const Container = styled.div`
  min-height: calc(100vh - 32px);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px 8px;
  gap: 72px;
`;

const MainContainer = styled.div`
  max-width: 416px;
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid ${theme.palette.gray200};
  background-color: ${theme.palette.white};

  padding: 50px 8px 40px 8px;
`;
