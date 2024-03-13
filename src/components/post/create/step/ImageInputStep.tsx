import { chain } from "lodash";
import { toast } from "react-toastify";
import ImageIcon from "src/assets/image.svg";
import { ImageFileType } from "src/components/post/create/CreatePostModal";
import { useFileInput } from "src/hooks/@common";
import { theme } from "src/styles";
import styled from "styled-components";

type ImageInputStepProps = {
  onImagesInput: (images: ImageFileType[]) => void;
};

export default function ImageInputStep({ onImagesInput }: ImageInputStepProps) {
  const { dropZoneProps, handleFileInput } = useFileInput({
    onFileInput: handleImageInput,
  });

  function handleImageInput(files: FileList) {
    const images: ImageFileType[] = chain([...files])
      .filter(validateImage)
      .take(10)
      .map((file) => ({ file, imageUrl: URL.createObjectURL(file) }))
      .value();

    onImagesInput(images);
  }

  return (
    <Container {...dropZoneProps}>
      <img src={ImageIcon} alt="이미지 아이콘" />
      사진과 동영상을 여기에 끌어다 놓으세요
      <input
        id="raised-button-file"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        multiple
        onChange={handleFileInput}
      />
      <label htmlFor="raised-button-file">
        <StyledButton>컴퓨터에서 선택</StyledButton>
      </label>
    </Container>
  );
}

/** utils */

function validateImage(file: File): boolean {
  const validImageTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/svg+xml",
  ];

  if (file && validImageTypes.includes(file.type)) {
    return true;
  }

  toast.error("Invalid file type. Only Image available.");

  return false;
}

/** styles */
const Container = styled.div`
  height: calc(100% - 40px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;
  padding: 20px;

  color: ${theme.palette.gray500};
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`;

const StyledButton = styled.div`
  min-width: max-content;

  transition: 0.2s all;
  cursor: pointer;

  padding: 6px 12px;

  border-radius: 5px;
  background-color: ${theme.palette.primary500};

  ${theme.typography.body1SemiBold};
  color: ${theme.palette.white};
`;
