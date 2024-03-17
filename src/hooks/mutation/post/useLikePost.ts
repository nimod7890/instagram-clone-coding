import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost } from "src/apis/post";
import { useAppRepository } from "src/hooks/@common";
import { QueryLikesResponse } from "src/hooks/query/useGetLikes";
import { QueryPostsResponse } from "src/hooks/query/useGetPosts";
import { QueryKeys } from "src/libraries/reactQuery";

export default function useLikePost(postId: number) {
  const queryClient = useQueryClient();

  const { userData } = useAppRepository();

  const queryKeys = [
    [QueryKeys.Posts, 10, undefined],
    [QueryKeys.Like, postId],
  ];

  const { mutate, ...rest } = useMutation({
    mutationFn: () => likePost(postId),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: queryKeys,
      });

      const prevPostsResponse = queryClient.getQueryData<QueryPostsResponse>(
        queryKeys[0]
      );
      const prevLikeParticipantsResponse =
        queryClient.getQueryData<QueryLikesResponse>(queryKeys[1]);

      if (prevPostsResponse) {
        const updatedPostsResponse = prevPostsResponse.pages.map(
          ({ feedList, ...page }) => {
            const updatedFeedList = feedList.map((post) => {
              if (post.id === postId) {
                return { ...post, isLiked: !post.isLiked };
              }
              return post;
            });

            return { ...page, feedList: updatedFeedList };
          }
        );

        queryClient.setQueryData(queryKeys[0], updatedPostsResponse);
      }

      if (prevLikeParticipantsResponse && userData) {
        const user = { id: userData.id, loginId: userData.loginId };

        const updatedLikeParticipantsResponse = {
          ...prevLikeParticipantsResponse,
          feedLikeList: [...prevLikeParticipantsResponse.feedLikeList, user],
        };

        queryClient.setQueryData(queryKeys[1], updatedLikeParticipantsResponse);
      }

      return { prevPostsResponse, prevLikeParticipantsResponse };
    },
    onError: (_error, _feedId, context) => {
      queryClient.setQueryData(queryKeys[0], context?.prevPostsResponse);
      queryClient.setQueryData(
        queryKeys[1],
        context?.prevLikeParticipantsResponse
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys });
    },
  });

  return { likePost: mutate, ...rest };
}
