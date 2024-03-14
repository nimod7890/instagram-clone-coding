import ImageInputStep from "./step/ImageInputStep";
import { useState } from "react";
import { Modal, Icon } from "src/components/@common";
import { ModalProps } from "src/components/@common/modal";
import ImagePreviewStep from "src/components/post/create/step/ImagePreviewStep";
import WriteTextStep from "src/components/post/create/step/WriteTextStep";
import { useFunnel, useWindowSize } from "src/hooks/@common";
import { UploadImageFileType } from "src/types";

const enum CreatePostStep {
  InputImage,
  PreviewImage,
  WriteText,
}

export default function CreatePostModal({
  isOpen,
  close,
}: Pick<ModalProps, "isOpen" | "close">) {
  const { step, handleNextStep, handlePrevStep } = useFunnel();

  const [feedText, setFeedText] = useState<string>("");
  const [images, setImages] = useState<UploadImageFileType[]>([]);

  const handleSubmit = () => {};

  const handleImagesInput = (images: UploadImageFileType[]) => {
    setImages(images);
    handleNextStep();
  };

  const { width } = useWindowSize();
  const height =
    width && width < 656
      ? step === CreatePostStep.WriteText
        ? `${width + 300}px`
        : `${width}px`
      : "716px";

  const headerOptions = (() => {
    let options = { title: "새 게시물 만들기" };

    if (step !== CreatePostStep.InputImage) {
      options = Object.assign(options, {
        left: { onClick: handlePrevStep, children: <Icon icon="arrow-left" /> },
      });
    }

    switch (step) {
      case CreatePostStep.InputImage:
        return options;
      case CreatePostStep.PreviewImage:
        return {
          ...options,
          right: { onClick: handleNextStep, children: "다음" },
        };
      case CreatePostStep.WriteText:
        return {
          ...options,
          right: { onClick: handleSubmit, children: "공유" },
        };
    }
  })();

  return (
    <Modal
      isOpen={isOpen}
      close={close}
      header={headerOptions}
      styles={{
        width: step === CreatePostStep.WriteText ? "956px" : "656px",
        height,
      }}
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
                feedText={feedText}
                images={images}
                onInputText={setFeedText}
              />
            );
        }
      })()}
    </Modal>
  );
}
