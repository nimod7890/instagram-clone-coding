import {
  Logo,
  Typography,
  Input,
  PasswordInput,
  Button,
} from "src/components/@common";
import { KaKaoButton } from "src/components/auth";
import { FunnelStepProps } from "src/pages/SignupPage";
import styled from "styled-components";

export default function BasicInfoStep({ onNextStep }: FunnelStepProps) {
  const error = "";

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
        <Input
          startIcon="mail"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <Input startIcon="user" placeholder="성명" />
        <Input startIcon="settings" placeholder="설정" />
        <PasswordInput />
      </InputContainer>
      <Button style={{ marginBottom: "15px" }} onClick={onNextStep}>
        가입
      </Button>
      {error && (
        <Typography type="body1SemiBold" color="error">
          {error}
        </Typography>
      )}
    </>
  );
}

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
