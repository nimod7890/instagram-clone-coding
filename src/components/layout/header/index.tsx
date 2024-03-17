import { Link } from "react-router-dom";
import { Logo, SearchInput } from "src/components/@common";
import Menubar from "src/components/layout/header/menubar";
import { GlobalSize } from "src/constants";
import { useInput } from "src/hooks/@common";
import RoutePath from "src/routes/routePath";
import { theme } from "src/styles";
import styled from "styled-components";

export default function Header() {
  const { text, onChangeText } = useInput();

  return (
    <OuterContainer>
      <InnterContainer>
        <Link to={RoutePath.Home}>
          <Logo />
        </Link>
        <SearchInput
          value={text}
          onChange={(event) => onChangeText(event.target.value)}
        />
        <Menubar />
      </InnterContainer>
    </OuterContainer>
  );
}

/** styles */

const OuterContainer = styled.div`
  top: 0;

  width: 100%;
  height: ${GlobalSize.HeaderHeight};
  min-height: ${GlobalSize.HeaderHeight};

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
