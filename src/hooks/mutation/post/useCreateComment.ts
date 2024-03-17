import { useMutation } from "@tanstack/react-query";
import { createComment } from "src/apis/post";
import { QueryKeys, invalidateQueries } from "src/libraries/reactQuery";

export default function useCreateComment() {
  const { mutate, ...rest } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      invalidateQueries({ queryKeys: [[QueryKeys.Comment]] });
    },
  });

  return { createComment: mutate, ...rest };
}
