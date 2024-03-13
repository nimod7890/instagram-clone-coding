import { Link } from "react-router-dom";
import { Button, Logo, Typography } from "src/components/@common";
import {
  KaKaoButton,
  SignInUpLayout,
  LoginIdInputForm,
  PasswordInputForm,
} from "src/components/auth";
import { useSigninPage } from "src/hooks/page";
import { theme } from "src/styles";
import styled from "styled-components";

export default function SigninPage() {
  const { forms, errorMessage, handleSubmit, disabledSubmitButton } =
    useSigninPage();

  return (
    <SignInUpLayout isSignInPage>
      <form onSubmit={handleSubmit}>
        <HeaderContainer>
          <Logo width={217} />
        </HeaderContainer>
        <InputContainer>
          <LoginIdInputForm isSignInPage forms={forms} />
          <PasswordInputForm forms={forms} />
        </InputContainer>
        <ButtonContainer>
          <KaKaoButton />
          <Typography type="body1Light" color="gray500">
            or
          </Typography>
          <Button type="submit" disabled={disabledSubmitButton}>
            로그인
          </Button>
        </ButtonContainer>
      </form>
      <HelperTextContainer>
        {errorMessage && (
          <Typography
            type="body1SemiBold"
            color="error"
            style={{ maxWidth: "320px", textAlign: "center" }}
          >
            {errorMessage}
          </Typography>
        )}
        <StyledLink to="#">비밀번호를 잊으셨나요?</StyledLink>
      </HelperTextContainer>
    </SignInUpLayout>
  );
}

/** styles */

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled(Stack)`
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 57px;
`;

const InputContainer = styled(Stack)`
  gap: 10px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled(Stack)`
  gap: 10px;
  margin-bottom: 30px;
`;

const HelperTextContainer = styled(Stack)`
  gap: 10px;
`;

const StyledLink = styled(Link)`
  ${theme.typography.body2Light};

  color: ${theme.palette.gray500};
`;
