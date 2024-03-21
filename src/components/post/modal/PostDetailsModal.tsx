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
  PostProfile,
  MenuButton,
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
      width: isAlignColumn ? "calc(100% - 50px)" : "956px",
      height: isAlignColumn ? `${width + 300}px` : "716px",
    }),
    [isAlignColumn, width]
  );

  const handleClick = () => navigate(getUserPagePath(feedLoginId));

  return (
    <Modal isOpen={isOpen} close={close} styles={modalStyles}>
      <PostContainer
        imageUrls={contentList.map(({ contentUrl }) => contentUrl)}
      >
        <ProfileContainer>
          <PostProfile loginId={feedLoginId} />
          <MenuButton post={post} close={close} />
        </ProfileContainer>
        <HDivider />
        <TextCntainer>
          {/* 텍스트 */}
          <ContentContainer>
            <AvatarButton onClick={handleClick} />
            <DetailsContainer>
              <PostContent loginId={feedLoginId} content={feedText} />
              <PostCreatedAt date={createdAt} />
            </DetailsContainer>
          </ContentContainer>

          {/* 댓글 리스트 */}
          <Suspense>
            <DetailsContainer style={{ padding: "10px 15px" }}>
              <Comments postId={postId} />
            </DetailsContainer>
          </Suspense>
        </TextCntainer>
        <HDivider />

        {/* 좋아요, 북마크 */}
        <DetailsContainer style={{ padding: "10px 15px" }}>
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

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 5px;
  padding-right: 15px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: start;

  padding: 15px;
  gap: 10px;
`;

const TextCntainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: auto;
`;
