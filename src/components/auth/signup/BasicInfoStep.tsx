import {
  Logo,
  Typography,
  Input,
  PasswordInput,
  Button,
} from "src/components/@common";
import { KaKaoButton } from "src/components/auth";
import styled from "styled-components";

type BasicInfoStepProps = {};

export default function BasicInfoStep({}: BasicInfoStepProps) {
  const error = "";

  return (
    <>
      <Stack gap="10px" style={{ marginBottom: "30px" }}>
        <Logo width={217} />
        <Typography type="body1SemiBold" color="gray500">
          친구들과 함께 여행 이야기를 공유하고 보세요.
        </Typography>
      </Stack>
      <Stack gap="10px" style={{ marginBottom: "20px" }}>
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
      </Stack>
      <Button style={{ marginBottom: "15px" }}>가입</Button>
      {error && (
        <Typography type="body1SemiBold" color="error">
          {error}
        </Typography>
      )}
    </>
  );
}

export const Stack = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: ${({ gap }) => gap};
`;
