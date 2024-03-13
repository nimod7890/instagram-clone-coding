import { IconButton } from "src/components/@common";
import { useFunnel } from "src/hooks/@common";
import styled from "styled-components";

type ImagesPreviewProps = { imageUrls: string[] };

export default function ImagesPreview({ imageUrls }: ImagesPreviewProps) {
  const { step, handlePrevStep, handleNextStep, handleChangeStep } =
    useFunnel();

  const totalSteps = imageUrls.length;

  const handlePrevButtonClick = () =>
    step === 0 ? handleChangeStep(totalSteps - 1) : handlePrevStep();

  const handleNextButtonClick = () =>
    step === totalSteps - 1 ? handleChangeStep(0) : handleNextStep();

  return (
    <Container>
      <IconButton
        onClick={handlePrevButtonClick}
        icon="arrow-left-circle"
        size="30"
        style={{
          position: "absolute",
          left: "15px",
        }}
      />
      <Image src={imageUrls[step]} alt={imageUrls[step]} />
      <IconButton
        onClick={handleNextButtonClick}
        icon="arrow-right-circle"
        size="30"
        style={{
          position: "absolute",
          right: "15px",
        }}
      />
    </Container>
  );
}

/** styles */

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;
