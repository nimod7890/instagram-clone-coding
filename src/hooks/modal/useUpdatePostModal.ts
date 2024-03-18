import { isEmpty, isEqual } from "lodash";
import { useMemo } from "react";
import { useWindowSize, useInput } from "src/hooks/@common";
import { useUpdatePost } from "src/hooks/mutation/post";
import { PostType } from "src/types";

export default function useUpdatePostModal({
  post,
  close,
}: {
  post: PostType;
  close: () => void;
}) {
  const { width } = useWindowSize();
  const { text, onChangeText } = useInput(post.feedText);

  const { updatePost } = useUpdatePost({ postId: post.id, onSuccess: close });

  const isAlignColumn = width && width < 656;

  const modalStyles = useMemo(
    () => ({
      width: "956px",
      height: isAlignColumn ? `${width + 300}px` : "716px",
    }),
    [isAlignColumn, width]
  );

  const imageUrls = useMemo(
    () => post.contentList.map(({ contentUrl }) => contentUrl),
    [post.id]
  );

  const headerOptions = {
    title: "정보 수정",
    left: { child: "취소", props: { onClick: close } },
    right: {
      child: "공유",
      props: {
        onClick: () => updatePost(text),
        disabled: isEmpty(text) || isEqual(post.feedText, text),
      },
    },
  };

  return {
    headerOptions,
    modalStyles,
    contentProps: { text, onInputText: onChangeText, imageUrls },
  };
}
