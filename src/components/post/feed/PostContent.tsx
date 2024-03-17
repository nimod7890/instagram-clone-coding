import { useNavigate } from "react-router-dom";
import { useAppRepository, useToggle } from "src/hooks/@common";
import { getUserPagePath } from "src/routes/routePath";
import { theme } from "src/styles";
import { PostType } from "src/types";
import styled from "styled-components";

type PostContentProps = {
  post: PostType;
};

export default function PostContent({ post }: PostContentProps) {
  const navigate = useNavigate();
  const { userData } = useAppRepository();
  const { isOpen, open } = useToggle();
  const hasLongContent = post.feedText.length >= 100;

  if (!userData) {
    return null;
  }

  return (
    <Container>
      <Button
        disabled={!userData}
        onClick={() => navigate(getUserPagePath(userData?.loginId ?? ""))}
      >
        {userData.loginId}
      </Button>
      {(() => {
        if (hasLongContent && !isOpen) {
          return (
            <>
              {post.feedText.slice(0, 100)}...
              <ToggleButton onClick={open}>더보기</ToggleButton>
            </>
          );
        }

        return post.feedText;
      })()}
    </Container>
  );
}

const Container = styled.div`
  margin-left: 5px;

  ${theme.typography.body2Regular}
`;

const Button = styled.button`
  align-self: flex-start;

  margin-right: 5px;

  ${theme.typography.body2Bold}
`;

const ToggleButton = styled.button`
  ${theme.typography.body2Regular}

  color: ${theme.palette.gray500};
`;
