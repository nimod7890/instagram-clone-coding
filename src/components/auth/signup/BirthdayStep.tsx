import { Link } from "react-router-dom";
import BirthdayIcon from "src/assets/birthday.svg";
import { Typography, Button } from "src/components/@common";
import DateSelect from "src/components/@common/select/DateSelect";
import { FunnelStepProps } from "src/pages/SignupPage";
import { theme } from "src/styles";
import styled from "styled-components";

export default function BirthdayStep({
  onPrevStep,
  onNextStep,
}: FunnelStepProps) {
  return (
    <>
      <TitleContainer>
        <img src={BirthdayIcon} alt="생일 케이크와 숟가락" />
        <Typography type="TitleSemiBold">생일추가</Typography>
      </TitleContainer>
      <DescriptionContainer>
        <Typography type="body2Regular" color="gray500">
          공개 프로필에 포함되지 않습니다.
        </Typography>
        <StyledLink to="#">왜 생일 정보를 입력해야 하나요?</StyledLink>
      </DescriptionContainer>
      <InputContainer>
        <DateSelect
          value={{ date: 31, month: 21, year: 2012 }}
          onChange={console.log}
        />
        <Typography type="body2Regular" color="gray500">
          태어난 날짜를 입력해야 합니다.
        </Typography>
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onNextStep}>가입</Button>
        <Button variant="secondary" onClick={onPrevStep}>
          돌아가기
        </Button>
      </ButtonContainer>
    </>
  );
}

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled(Stack)`
  gap: 20px;
  margin: 10px 0 16px 0;
`;

const DescriptionContainer = styled(Stack)`
  gap: 5px;
  margin-bottom: 30px;
`;

const InputContainer = styled(Stack)`
  gap: 10px;
  margin-bottom: 30px;
`;

const ButtonContainer = styled(Stack)`
  gap: 10px;
`;

const StyledLink = styled(Link)`
  ${theme.typography.body2Regular}

  color: ${theme.palette.primary500};
`;
