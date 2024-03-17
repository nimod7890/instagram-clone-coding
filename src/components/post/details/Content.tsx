import { useNavigate } from "react-router-dom";
import { useToggle } from "src/hooks/@common";
import { getUserPagePath } from "src/routes/routePath";
import { theme } from "src/styles";
import styled from "styled-components";

type ContentProps = {
  loginId: string;
  content: string;
};

export default function Content({ content, loginId }: ContentProps) {
  const navigate = useNavigate();

  const { isOpen, open } = useToggle();
  const hasLongContent = content.length >= 100;

  return (
    <Container>
      <Button onClick={() => navigate(getUserPagePath(loginId))}>
        {loginId}
      </Button>
      {(() => {
        if (hasLongContent && !isOpen) {
          return (
            <>
              {content.slice(0, 100)}...
              <ToggleButton onClick={open}>더보기</ToggleButton>
            </>
          );
        }

        return content;
      })()}
    </Container>
  );
}

const Container = styled.div`
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
