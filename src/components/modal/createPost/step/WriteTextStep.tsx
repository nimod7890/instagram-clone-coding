import InputBox from "./InputBox";
import { HDivider, IconButton, Typography } from "src/components/@common";
import PostContainer from "src/components/modal/post/PostContainer";
import { PostProfile } from "src/components/post";
import { useAppRepository } from "src/hooks/@common";
import { theme } from "src/styles";
import { UploadPostType } from "src/types";
import styled from "styled-components";

type WriteTextStepProps = {
  post: UploadPostType;
  onInputText: (text: string) => void;
};

export default function WriteTextStep({
  post: { images, feedText },
  onInputText,
}: WriteTextStepProps) {
  const { userData } = useAppRepository();

  return (
    <PostContainer
      loginId={userData?.loginId ?? ""}
      imageUrls={images.map(({ imageUrl }) => imageUrl)}
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
      <HDivider />
    </PostContainer>
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
