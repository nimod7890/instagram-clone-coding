import { Link } from "react-router-dom";
import { Typography } from "src/components/@common";
import RoutePath from "src/routes/routePath";
import { theme } from "src/styles";
import styled from "styled-components";

type AuthPageSwitcherProps = { isSignInPage: boolean };

export default function AuthPageSwitcher({
  isSignInPage,
}: AuthPageSwitcherProps) {
  const [path, label, linkLabel] = isSignInPage
    ? [RoutePath.Signup, "계정이 없으신가요?", "가입하기"]
    : [RoutePath.Signin, "계정이 있으신가요?", "로그인"];

  return (
    <Container>
      <Typography type="body1SemiBold" color="gray500">
        {label}
      </Typography>
      <StyledLink to={path}>{linkLabel}</StyledLink>
    </Container>
  );
}

/** styles */

const Container = styled.div`
  height: 86px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${theme.palette.gray200};
  background-color: ${theme.palette.white};
`;

const StyledLink = styled(Link)`
  margin-left: 4px;
  ${theme.typography.body1SemiBold}

  color: ${theme.palette.primary500};
`;
