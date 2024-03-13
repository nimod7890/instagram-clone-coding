import { ImagesPreview } from "src/components/@common";
import { ImageFileType } from "src/components/post/create/CreatePostModal";

type ImagePreviewStepProps = { images: ImageFileType[] };

export default function ImagePreviewStep({ images }: ImagePreviewStepProps) {
  return <ImagesPreview imageUrls={images.map(({ imageUrl }) => imageUrl)} />;
}
