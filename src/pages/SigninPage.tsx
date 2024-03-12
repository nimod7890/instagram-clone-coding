import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Logo, Typography } from "src/components/@common";
import { KaKaoButton, SignInUpLayout } from "src/components/auth";
import LoginIdInputForm from "src/components/auth/form/LoginIdInputForm";
import PasswordInputForm from "src/components/auth/form/PasswordInputForm";
import { useSignin } from "src/hooks/mutation";
import { theme } from "src/styles";
import { SigninFormInput } from "src/types";
import styled from "styled-components";

export default function SigninPage() {
  const forms = useForm<SigninFormInput>({
    mode: "onChange",
    defaultValues: {
      loginId: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { isValid, errors },
  } = forms;

  const { signin } = useSignin();

  const onSubmit = async (data: SigninFormInput) => signin(data);

  const errorMessage = useMemo(() => {
    const errorFields: (keyof SigninFormInput)[] = ["password", "loginId"];

    for (const field of errorFields) {
      if (errors[field]?.message) {
        return errors[field]?.message;
      }
    }

    return "";
  }, [errors.password, errors.loginId]);

  return (
    <SignInUpLayout isSignInPage>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type='submit' disabled={!isValid}>로그인</Button>
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
