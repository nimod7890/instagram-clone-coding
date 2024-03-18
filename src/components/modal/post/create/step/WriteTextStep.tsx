import InputBox from "./InputBox";
import { HDivider, IconButton, Typography } from "src/components/@common";
import { PostContainer, PostProfile } from "src/components/post";
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
    <PostContainer imageUrls={images.map(({ imageUrl }) => imageUrl)}>
      <PostProfile loginId={userData?.loginId ?? ""} />
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
