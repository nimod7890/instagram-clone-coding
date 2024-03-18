import { PropsWithChildren } from "react";
import { ImagePreview } from "src/components/@common";
import { PostProfile } from "src/components/post";
import { useWindowSize } from "src/hooks/@common";
import { theme } from "src/styles";
import styled from "styled-components";

type ImageContainerProps = { loginId: string; imageUrls: string[] };

export default function PostContainer({
  loginId,
  imageUrls,
  children,
}: PropsWithChildren<ImageContainerProps>) {
  const { width } = useWindowSize();
  const isAlignColumn = width && width < 656;

  return (
    <Container direction={isAlignColumn ? "column" : "row"}>
      <ImagesContainer
        height={isAlignColumn ? `max(calc(100% - 300px),300px)` : "100%"}
      >
        <ImagePreview imageUrls={imageUrls} />
      </ImagesContainer>
      <MetaContainer
        width={isAlignColumn ? `100%` : "300px"}
        borderPosition={isAlignColumn ? "top" : "left"}
      >
        <PostProfile loginId={loginId} />
        {children}
      </MetaContainer>
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

const ImagesContainer = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
`;

const MetaContainer = styled.div<{
  width: string;
  borderPosition?: "left" | "top";
}>`
  width: ${({ width }) => width};
  height: 100%;
  min-width: ${({ width }) => width};

  display: flex;
  flex-direction: column;

  padding-bottom: 50px;

  ${({ borderPosition }) =>
    `border-${borderPosition}: 1px solid ${theme.palette.gray300}`};
`;
