import { isEmpty } from "lodash";
import { useMemo, useState } from "react";
import { ArrowLeftIcon, ModalHeaderProps } from "src/components/@common";
import { useFunnel, useWindowSize } from "src/hooks/@common";
import { useCreatePost } from "src/hooks/mutation/post";
import { UploadImageFileType, UploadPostType } from "src/types";

export const enum CreatePostStep {
  InputImage,
  PreviewImage,
  WriteText,
}

export default function useCreatePostModal(close: () => void) {
  const { width } = useWindowSize();
  const { step, handleNextStep, handlePrevStep } = useFunnel();

  const { createPost, isPending } = useCreatePost(close);

  const [post, setPost] = useState<UploadPostType>({
    feedText: "",
    images: [],
  });

  const handleSubmit = () => createPost(post);

  const handleImagesInput = (images: UploadImageFileType[]) => {
    setPost((prev) => ({ ...prev, images }));
    handleNextStep();
  };

  const handleInputText = (feedText: string) =>
    setPost((prev) => ({ ...prev, feedText }));

  const modalHeight = useMemo(() => {
    if (width && width < 656) {
      if (step === CreatePostStep.WriteText) {
        return `${width + 300}px`;
      }

      return `${width}px`;
    }

    return "716px";
  }, [width, step]);

  const modalStyles = useMemo(
    () => ({
      width: step === CreatePostStep.WriteText ? "956px" : "656px",
      height: modalHeight,
    }),
    [step, modalHeight]
  );

  const headerOptions = (() => {
    let options: ModalHeaderProps = { title: "새 게시물 만들기" };

    if (step !== CreatePostStep.InputImage) {
      options = Object.assign(options, {
        left: {
          props: {
            onClick: handlePrevStep,

            disabled: isPending,
          },
          child: ArrowLeftIcon,
        },
      });
    }

    switch (step) {
      case CreatePostStep.InputImage:
        return options;
      case CreatePostStep.PreviewImage:
        return {
          ...options,
          right: { props: { onClick: handleNextStep }, child: "다음" },
        };
      case CreatePostStep.WriteText:
        return {
          ...options,
          right: {
            props: {
              onClick: handleSubmit,
              disabled: isEmpty(post.feedText) || isPending,
            },
            child: "공유",
          },
        };
    }
  })();

  return {
    step,
    post,
    modalStyles,
    headerOptions,
    handleImagesInput,
    handleInputText,
  };
}
