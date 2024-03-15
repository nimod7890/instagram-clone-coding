import { ImagePreview } from "src/components/@common";
import { UploadImageFileType } from "src/types";

type ImagePreviewStepProps = { images: UploadImageFileType[] };

export default function ImagePreviewStep({ images }: ImagePreviewStepProps) {
  return <ImagePreview imageUrls={images.map(({ imageUrl }) => imageUrl)} />;
}
