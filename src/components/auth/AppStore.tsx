import appStore from "src/assets/app-store-apple.svg";
import playStore from "src/assets/app-store-google.svg";
import { Typography } from "src/components/@common";
import styled from "styled-components";

export default function AppStore() {
  return (
    <Container>
      <Typography color="gray500">앱을 다운로드 하세요.</Typography>
      <AppStoreContainer>
        <button>
          <img src={playStore} alt="google play store download" />
        </button>
        <button>
          <img src={appStore} alt="apple app store download" />
        </button>
      </AppStoreContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  gap: 10px;
`;

const AppStoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;
