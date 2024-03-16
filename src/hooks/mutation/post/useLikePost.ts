import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { likePost } from "src/apis/post";
import { QueryKeys } from "src/libraries/reactQuery";
import { PostType } from "src/types";

type InfiniteQueryPosts = InfiniteData<{
  feedList: PostType[];
  totalCount: number;
  lastPage: number;
}>;

export default function useLikePost() {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: likePost,
    onMutate: async (feedId) => {
      await queryClient.cancelQueries({
        queryKey: [QueryKeys.Posts, 10, undefined],
      });

      const prevPostsResponse = queryClient.getQueryData<InfiniteQueryPosts>([
        QueryKeys.Posts,
        10,
        undefined,
      ]);

      if (prevPostsResponse) {
        const updatedPostsResponse = prevPostsResponse.pages.map(
          ({ feedList, ...page }) => {
            const updatedFeedList = feedList.map((post) => {
              if (post.id === feedId) {
                return { ...post, isLiked: !post.isLiked };
              }
              return post;
            });

            return { ...page, feedList: updatedFeedList };
          }
        );

        queryClient.setQueryData(
          [QueryKeys.Posts, 10, undefined],
          updatedPostsResponse
        );
      }

      return { prevPostsResponse };
    },
    onError: (_error, _feedId, context) => {
      queryClient.setQueryData(
        [QueryKeys.Posts, 10, undefined],
        context?.prevPostsResponse
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.Posts, 10, undefined],
      });
    },
  });

  return { likePost: mutate, ...rest };
}
