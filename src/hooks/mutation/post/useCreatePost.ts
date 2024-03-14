import { useMutation } from "@tanstack/react-query";
import invalidateQueries from "src/libraries/reactQuery/invalidateQueries";
import QueryKeys from "src/libraries/reactQuery/keys";
import { showToastPromise } from "src/libraries/toast";
import { UploadImageFileType } from "src/types";

export default function useCreatePost() {
  const { mutate: createPost, ...rest } = useMutation({
    mutationFn: async ({
      feedText,
      images,
    }: {
      feedText: string;
      images: UploadImageFileType[];
    }) => {
      // Todo: use Firebase
      const contentUrls: string[] = images.map(({ imageUrl }) => imageUrl);
      contentUrls;
      feedText;
    },
    onSuccess: () => {
      const invalidationPromise = invalidateQueries({
        queryKeys: [[QueryKeys.Posts]],
      });

      showToastPromise(invalidationPromise, "게시글 업로드");
    },
  });

  return { createPost, ...rest };
}
