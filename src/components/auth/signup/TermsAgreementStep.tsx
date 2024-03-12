import { every } from "lodash";
import { useMemo, useState } from "react";
import { Button, Checkbox, Typography } from "src/components/@common";
import { FunnelStepProps } from "src/hooks/page/useSignupPage";
import { theme } from "src/styles";
import styled, { css } from "styled-components";

type Consent = {
  terms: boolean;
  dataPolicy: boolean;
  locationEnabled: boolean;
};

const ConsentList: { id: keyof Consent; label: string }[] = [
  { id: "terms", label: "이용 약관 (필수)" },
  { id: "dataPolicy", label: "데이터 정책 (필수)" },
  { id: "locationEnabled", label: "위치 기반 기능 (필수)" },
];

export default function TermsAgreementStep({
  onSubmit,
  onPrevStep,
}: FunnelStepProps) {
  const [consent, setConsent] = useState<Consent>({
    terms: false,
    dataPolicy: false,
    locationEnabled: false,
  });
  const { terms, dataPolicy, locationEnabled } = consent;

  const isAllChecked = useMemo(
    () => every([terms, dataPolicy, locationEnabled]),
    [consent]
  );

  const handleClickAll = () => {
    setConsent({
      terms: !isAllChecked,
      dataPolicy: !isAllChecked,
      locationEnabled: !isAllChecked,
    });
  };

  const handleClick = (id: keyof Consent) => {
    setConsent((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <TitleContainer>
        <Typography type="TitleSemiBold" style={{ marginBottom: "15px" }}>
          이용 약관에 동의
        </Typography>
        <Typography type="body2Light" color="gray500">
          Tnovel은 회원님의 개인정보를 안전하게 보호합니다.
        </Typography>
        <Typography type="body2Light" color="gray500">
          새 계정을 만드려면 모든 약관에 동의하세요.
        </Typography>
      </TitleContainer>
      <CheckboxContainer>
        <Checkbox
          checked={isAllChecked}
          onClick={handleClickAll}
          label="이용 약관 3개에 모두 동의"
          containerStyles={css`
            border-bottom: 1px solid ${theme.palette.gray200};
          `}
        />
        {ConsentList.map(({ id, label }) => (
          <Checkbox
            key={id}
            id={id}
            checked={consent[id]}
            label={label}
            onClick={() => handleClick(id)}
            link="더 알아보기"
          />
        ))}
      </CheckboxContainer>
      <ButtonContainer>
        <Button disabled={!isAllChecked} onClick={onSubmit}>
          다음
        </Button>
        <Button variant="secondary" onClick={onPrevStep}>
          돌아가기
        </Button>
      </ButtonContainer>
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

const TitleContainer = styled(Stack)`
  margin: 10px 0 19px 0;
`;

const CheckboxContainer = styled(Stack)`
  width: calc(100% - 60px);

  margin-bottom: 34px;
  padding: 0 30px;
  gap: 10px;
`;

const ButtonContainer = styled(Stack)`
  gap: 10px;
`;
