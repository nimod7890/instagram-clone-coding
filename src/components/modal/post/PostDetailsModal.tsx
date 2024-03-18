import { Suspense, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  AvatarButton,
  HDivider,
  Modal,
  ModalProps,
} from "src/components/@common";
import {
  Content as PostContent,
  PostContainer,
  PostActionsBar,
  LikesButton,
  PostCreatedAt,
  Comments,
  CommentInput,
} from "src/components/post";
import { useWindowSize } from "src/hooks/@common";
import { getUserPagePath } from "src/routes/routePath";
import { PostType } from "src/types";
import styled from "styled-components";

type PostDetailsModalProps = { post: PostType } & Pick<
  ModalProps,
  "isOpen" | "close"
>;

export default function PostDetailsModal({
  post,
  isOpen,
  close,
}: PostDetailsModalProps) {
  const navigate = useNavigate();
  const { width } = useWindowSize();

  const isAlignColumn = width && width < 656;

  const { id: postId, createdAt, feedLoginId, contentList, feedText } = post;

  const modalStyles = useMemo(
    () => ({
      width: "956px",
      height: isAlignColumn ? `${width + 300}px` : "716px",
    }),
    [isAlignColumn]
  );

  const handleClick = () => navigate(getUserPagePath(feedLoginId));

  return (
    <Modal isOpen={isOpen} close={close} styles={modalStyles}>
      <PostContainer
        loginId={feedLoginId}
        imageUrls={contentList.map(({ contentUrl }) => contentUrl)}
      >
        {/* 텍스트 */}
        <HDivider />
        <ContentContainer>
          <AvatarButton onClick={handleClick} />
          <PostContentContainer>
            <PostContent loginId={feedLoginId} content={feedText} />
            <PostCreatedAt date={createdAt} />
          </PostContentContainer>
        </ContentContainer>

        {/* 댓글 리스트 */}
        <Suspense>
          <DetailsContainer>
            <Comments postId={postId} />
          </DetailsContainer>
        </Suspense>
        <HDivider />

        {/* 좋아요, 북마크 */}
        <DetailsContainer>
          <PostActionsBar post={post} />
          <Suspense>
            <LikesButton postId={postId} />
          </Suspense>
          <PostCreatedAt date={createdAt} />
        </DetailsContainer>
        <FlexGrow />
        {/* 댓글 입력란 */}
        <CommentInput post={post} hideAvatar />
      </PostContainer>
    </Modal>
  );
}

const FlexGrow = styled.div`
  flex-grow: 1;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 15px;

  gap: 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: start;

  padding: 15px;
  gap: 10px;
`;

const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
