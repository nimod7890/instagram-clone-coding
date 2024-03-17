import { useMutation } from "@tanstack/react-query";
import { createPost } from "src/apis/post";
import { useAppRepository } from "src/hooks/@common";
import { uploadImage } from "src/libraries/firebase/storage";
import { QueryKeys, invalidateQueries } from "src/libraries/reactQuery";
import { showToastPromise } from "src/libraries/toast";
import { UploadImageFileType } from "src/types";

export default function useCreatePost(onSuccess: () => void) {
  const { userData } = useAppRepository();
  const { mutate, ...rest } = useMutation({
    mutationFn: async ({
      feedText,
      images,
    }: {
      feedText: string;
      images: UploadImageFileType[];
    }) => {
      if (!userData?.loginId) {
        return Promise.reject(`로그인 아이디가 존재하지 않습니다.`);
      }

      const contentUrls = await Promise.all(
        images.map(({ file }) =>
          uploadImage({ baseUrl: `오드/${userData.loginId}/오드_`, file })
        )
      );

      return createPost({ contentUrls, feedText });
    },
    onSuccess: () => {
      const invalidationPromise = invalidateQueries({
        queryKeys: [[QueryKeys.Posts]],
      });

      showToastPromise(invalidationPromise, "게시글 업로드");
      onSuccess();
    },
  });

  return { createPost: mutate, ...rest };
}

/** utils */
