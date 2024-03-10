import { Link } from "react-router-dom";
import { Logo } from "src/components/@common";
import { GlobalSize } from "src/constants";
import { useWindowSize } from "src/hooks/@common";
import RoutePath from "src/routes/routePath";
import { theme } from "src/styles";
import styled from "styled-components";

export default function Header() {
  const { isMobileSize } = useWindowSize();

  return (
    <OuterContainer>
      <InnterContainer>
        <Link to={RoutePath.Home}>
          <Logo />
        </Link>
        <div>search bar</div>
        {isMobileSize ? null : <div>menu bar</div>}
      </InnterContainer>
    </OuterContainer>
  );
}

/** styles */

const OuterContainer = styled.div`
  top: 0;

  width: 100%;
  height: ${GlobalSize.HeaderHeight};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${theme.palette.white};
  border-bottom: 1px solid ${theme.palette.gray200};
`;

const InnterContainer = styled.div`
  width: calc(100% - 40px);
  max-width: calc(${GlobalSize.WindowWidthMax} - 40px);

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 10px;
`;
