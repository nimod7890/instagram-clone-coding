import { ImagesPreview } from "src/components/@common";
import { UploadImageFileType } from "src/types";

type ImagePreviewStepProps = { images: UploadImageFileType[] };

export default function ImagePreviewStep({ images }: ImagePreviewStepProps) {
  return <ImagesPreview imageUrls={images.map(({ imageUrl }) => imageUrl)} />;
}
