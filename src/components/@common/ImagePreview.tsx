import { useCallback, useMemo } from "react";
import { IconButton } from "src/components/@common";
import { PostProfile } from "src/components/post";
import { useAppRepository, useFunnel, useWindowSize } from "src/hooks/@common";
import { theme } from "src/styles";
import styled from "styled-components";

type ImagePreviewProps = {
  imageUrls: string[];

  /** 값이 있는 경우 profile, menu(본인 게시글일 경우) 노출 */
  loginId?: string;
};

export default function ImagePreview({
  imageUrls,
  loginId,
}: ImagePreviewProps) {
  const { width } = useWindowSize();
  const { userData } = useAppRepository();
  const { step, handlePrevStep, handleNextStep, handleChangeStep } =
    useFunnel();

  const height = loginId
    ? width && width < 600
      ? `max(calc(100vw - 42px),100%)`
      : "518px"
    : `100%`;

  const totalSteps = imageUrls.length;
  const onlyOneImage = totalSteps === 1;

  const showMenuButton = useMemo(() => {
    if (userData?.loginId) {
      return loginId === userData?.loginId;
    }
    return false;
  }, [userData?.loginId]);

  const handlePrevButtonClick = useCallback(
    () => (step === 0 ? handleChangeStep(totalSteps - 1) : handlePrevStep()),
    [step, totalSteps]
  );

  const handleNextButtonClick = useCallback(
    () => (step === totalSteps - 1 ? handleChangeStep(0) : handleNextStep()),
    [step, totalSteps]
  );

  return (
    <Container>
      <Image height={height} src={imageUrls[step]} alt={imageUrls[step]} />
      {loginId && (
        <UserContainer
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <PostProfile loginId={loginId} color="white" />
          {showMenuButton && (
            <IconButton icon="more-circle" color="primary500" />
          )}
        </UserContainer>
      )}
      {onlyOneImage ? null : (
        <>
          <IconButton
            onClick={handlePrevButtonClick}
            icon="arrow-left-circle"
            size="30"
            style={{
              position: "absolute",
              top: "50%",
              left: "15px",
            }}
          />
          <StepContainer
            style={{
              position: "absolute",
              bottom: 0,
            }}
          >
            {imageUrls.map((url, index) => (
              <Step key={url} currentStep={index === step} />
            ))}
          </StepContainer>
          <IconButton
            onClick={handleNextButtonClick}
            icon="arrow-right-circle"
            size="30"
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
            }}
          />
        </>
      )}
    </Container>
  );
}

/** styles */

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

const Image = styled.img<{ height: string }>`
  width: 100%;

  height: ${({ height }) => height};

  object-fit: contain;
`;

const UserContainer = styled.div`
  width: calc(100% - 20px);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 20px;
`;

const StepContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2px;
`;

const Step = styled.div<{ currentStep: boolean }>`
  width: 5px;
  height: 5px;

  border-radius: 100px;

  transition: 0.3s all;
  background-color: ${({ currentStep }) =>
    currentStep ? theme.palette.primary500 : theme.palette.gray100};
`;
