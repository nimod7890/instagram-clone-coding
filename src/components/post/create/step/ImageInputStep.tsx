import { chain } from "lodash";
import { toast } from "react-toastify";
import ImageIcon from "src/assets/image.svg";
import { useFileInput } from "src/hooks/@common";
import { theme } from "src/styles";
import { UploadImageFileType } from "src/types";
import styled from "styled-components";

/** 5 */
const IMAGE_UPLOAD_LIMIT = 5;

type ImageInputStepProps = {
  onImagesInput: (images: UploadImageFileType[]) => void;
};

export default function ImageInputStep({ onImagesInput }: ImageInputStepProps) {
  const { dropZoneProps, handleFileInput } = useFileInput({
    onFileInput: handleImageInput,
  });

  function handleImageInput(files: FileList) {
    if (files.length > IMAGE_UPLOAD_LIMIT) {
      toast.error(
        `최대 ${IMAGE_UPLOAD_LIMIT}개의 파일을 업로드할 수 있습니다.`
      );
    }

    const images: UploadImageFileType[] = chain([...files])
      .filter(validateImage)
      .take(IMAGE_UPLOAD_LIMIT)
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

/** 5MB */
const FILE_SIZE = 5 * 1024 * 1024;

function validateImage(file: File): boolean {
  const validImageTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/svg+xml",
  ];

  const fileName = file.name;

  if (!validImageTypes.includes(file.type)) {
    toast.error(
      `유효하지 않은 파일 유형을 제외하고 업로드합니다. (file: ${fileName})`
    );
    return false;
  }

  if (file.size > FILE_SIZE) {
    toast.error(
      `업로드 가능한 범위(최대 5MB)를 넘는 이미지를 제외하고 업로드합니다. (file: ${fileName})`
    );
    return false;
  }

  return true;
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
