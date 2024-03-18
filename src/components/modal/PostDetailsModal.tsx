import { useMemo } from "react";
import { Modal, ModalProps } from "src/components/@common";
import PostContainer from "src/components/modal/post/PostContainer";
import { useWindowSize } from "src/hooks/@common";
import { PostType } from "src/types";

type PostDetailsModalProps = { post: PostType } & Pick<
  ModalProps,
  "isOpen" | "close"
>;

export default function PostDetailsModal({
  post,
  isOpen,
  close,
}: PostDetailsModalProps) {
  const { width } = useWindowSize();
  const { feedLoginId, contentList } = post;
  const isAlignColumn = width && width < 656;

  const modalStyles = useMemo(
    () => ({
      width: "956px",
      height: isAlignColumn ? `${width + 300}px` : "716px",
    }),
    [isAlignColumn]
  );

  return (
    <Modal isOpen={isOpen} close={close} styles={modalStyles}>
      <PostContainer
        loginId={feedLoginId}
        imageUrls={contentList.map(({ contentUrl }) => contentUrl)}
      >
        hihi
      </PostContainer>
    </Modal>
  );
}
