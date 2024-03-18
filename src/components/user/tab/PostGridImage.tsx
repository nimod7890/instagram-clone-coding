import { ImagePreview } from "src/components/@common";

type PostGridImageProps = { contentUrl: string };

export default function PostGridImage({ contentUrl }: PostGridImageProps) {
  return <ImagePreview imageUrls={[contentUrl]} />;
}
