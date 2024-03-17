import { useNavigate } from "react-router-dom";
import { AvatarButton, Typography } from "src/components/@common";
import { Content as CommentContent } from "src/components/post";
import { getUserPagePath } from "src/routes/routePath";
import { CommentType } from "src/types";
import { renderDate } from "src/utils";
import styled from "styled-components";

type CommentProps = { comment: CommentType };

export default function Comment({ comment }: CommentProps) {
  const navigate = useNavigate();

  // Todo: createdAt 서버에 추가되면 initialize 제거
  const { writeUserLoginId, commentText, createdAt = new Date() } = comment;

  const handleClick = () => navigate(getUserPagePath(writeUserLoginId));

  return (
    <Container>
      <AvatarButton onClick={handleClick} />
      <ContentContainer>
        <CommentContent loginId={writeUserLoginId} content={commentText} />
        <Typography type="body2Light" color="gray500">
          {renderDate(createdAt)}
        </Typography>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: start;

  gap: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3px;
`;
