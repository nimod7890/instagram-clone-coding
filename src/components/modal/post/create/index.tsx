import { ImageInputStep, ImagePreviewStep, WriteTextStep } from "./step";
import { Modal, ModalProps } from "src/components/@common";
import { useCreatePostModal } from "src/hooks/modal";
import { CreatePostStep } from "src/hooks/modal/useCreatePostModal";

export default function CreatePostModal({
  isOpen,
  close,
}: Pick<ModalProps, "isOpen" | "close">) {
  const {
    post,
    step,
    headerOptions,
    modalStyles,
    handleImagesInput,
    handleInputText,
  } = useCreatePostModal(close);

  const { images } = post;

  return (
    <Modal
      isOpen={isOpen}
      close={close}
      header={headerOptions}
      styles={modalStyles}
    >
      {(() => {
        switch (step) {
          case CreatePostStep.InputImage:
            return <ImageInputStep onImagesInput={handleImagesInput} />;
          case CreatePostStep.PreviewImage:
            return <ImagePreviewStep images={images} />;
          case CreatePostStep.WriteText:
            return (
              <WriteTextStep
                text={post.feedText}
                imageUrls={images.map(({ imageUrl }) => imageUrl)}
                onInputText={handleInputText}
              />
            );
        }
      })()}
    </Modal>
  );
}
