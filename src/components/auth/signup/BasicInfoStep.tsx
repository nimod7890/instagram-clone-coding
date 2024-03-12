import { useMemo } from "react";
import { Logo, Typography, Button } from "src/components/@common";
import { KaKaoButton } from "src/components/auth";
import BasicInfo from "src/components/auth/signup/BasicInfo";
import { FunnelStepProps, SignupFormInput } from "src/pages/SignupPage";
import styled from "styled-components";

export default function BasicInfoStep(props: FunnelStepProps) {
  const {
    onNextStep,
    forms: {
      formState: { isValid, errors },
    },
  } = props;

  const errorMessage = useMemo(() => {
    const errorFields: (keyof SignupFormInput)[] = ["phone", "loginId"];

    for (const field of errorFields) {
      if (errors[field]?.message) {
        return errors[field]?.message;
      }
    }

    return "";
  }, [errors.phone, errors.loginId]);

  return (
    <>
      <HeaderContainer>
        <Logo width={217} />
        <Typography type="body1SemiBold" color="gray500">
          친구들과 함께 여행 이야기를 공유하고 보세요.
        </Typography>
      </HeaderContainer>
      <InputContainer>
        <KaKaoButton />
        <Typography type="body1Light" color="gray500">
          or
        </Typography>
        <BasicInfo {...props} />
      </InputContainer>
      <Button
        disabled={!isValid}
        style={{ marginBottom: "15px" }}
        onClick={onNextStep}
      >
        가입
      </Button>
      {errorMessage && (
        <Typography
          type="body1SemiBold"
          color="error"
          style={{ maxWidth: "320px", textAlign: "center" }}
        >
          {errorMessage}
        </Typography>
      )}
    </>
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
  margin-bottom: 30px;
`;

const InputContainer = styled(Stack)`
  gap: 10px;
  margin-bottom: 20px;
`;
