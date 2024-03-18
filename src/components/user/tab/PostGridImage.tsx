import { ImagePreview } from "src/components/@common";
import { useWindowSize } from "src/hooks/@common";

type PostGridImageProps = { contentUrl: string };

export default function PostGridImage({ contentUrl }: PostGridImageProps) {
  const { width } = useWindowSize();
  const height = width && width < 1440 ? `${width / 3}px` : "480px";

  return (
    <div style={{ height }}>
      <ImagePreview imageUrls={[contentUrl]} />
    </div>
  );
}
