import { IconButton, ImagesPreview, Typography } from "src/components/@common";
import PostProfile from "src/components/post/PostProfile";
import { ImageFileType } from "src/components/post/create/CreatePostModal";
import InputBox from "src/components/post/create/step/input/InputBox";
import { useAppRepository, useWindowSize } from "src/hooks/@common";
import { theme } from "src/styles";
import styled from "styled-components";

type WriteTextStepProps = {
  images: ImageFileType[];
  feedText: string;
  onInputText: (text: string) => void;
};

export default function WriteTextStep({
  images,
  feedText,
  onInputText,
}: WriteTextStepProps) {
  const { userData } = useAppRepository();

  const { width } = useWindowSize();
  const isAlignColumn = width && width < 656;

  return (
    <Container direction={isAlignColumn ? "column" : "row"}>
      <ImageContainer
        height={isAlignColumn ? `max(calc(100% - 300px),300px)` : "100%"}
      >
        <ImagesPreview imageUrls={images.map(({ imageUrl }) => imageUrl)} />
      </ImageContainer>
      <InputContainer
        width={isAlignColumn ? `100%` : "300px"}
        borderPosition={isAlignColumn ? "top" : "left"}
      >
        <PostProfile loginId={userData?.loginId} />
        <InputBox value={feedText} onChange={onInputText} />
        <MetaInfo>
          <Typography color="gray500">위치 추가</Typography>
          <IconButton icon="map-pin" color="gray500" />
        </MetaInfo>
        <MetaInfo>
          접근성
          <IconButton icon="chevron-down" color="gray500" />
        </MetaInfo>
        <MetaInfo>
          고급 설정
          <IconButton icon="chevron-down" color="gray500" />
        </MetaInfo>
        <Divider />
      </InputContainer>
    </Container>
  );
}

/** styles */

const Container = styled.div<{ direction?: "row" | "column" }>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};

  overflow: auto;
`;

const ImageContainer = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
`;

const InputContainer = styled.div<{
  width: string;
  borderPosition?: "left" | "top";
}>`
  width: ${({ width }) => width};
  min-width: ${({ width }) => width};

  display: flex;
  flex-direction: column;

  padding-bottom: 50px;

  ${({ borderPosition }) =>
    `border-${borderPosition}: 1px solid ${theme.palette.gray300}`};
`;

const Divider = styled.hr`
  width: 100%;
  padding: 0;
  margin: 0;
  border-top: 1px solid ${theme.palette.gray300};
`;

const MetaInfo = styled.div`
  height: 50px;
  min-height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  color: ${theme.palette.gray900};

  border-top: 1px solid ${theme.palette.gray300};
`;
