import { theme } from "src/styles";
import styled from "styled-components";

/** sample profile image 사용 */
export default function Stories() {
  return (
    <Container>
      {Array(10)
        .fill(1)
        .map((_, index) => (
          <StoryContainer key={index}>
            <ProfileImage
              src={`story/${(index % 4) + 1}.png`}
              alt={"스토리 프로필 샘플"}
            />
          </StoryContainer>
        ))}
    </Container>
  );
}

const Container = styled.div`
  height: 80px;
  width: calc(100% - 50px);

  display: flex;
  align-items: center;

  padding: 25px;

  overflow: auto;

  gap: 8px;

  border: 1px solid ${theme.palette.gray200};
  border-radius: 10px;

  background-color: ${theme.palette.white};
`;

const StoryContainer = styled.div`
  width: 90px;
  height: 90px;
  min-width: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100px;

  background: linear-gradient(209.83deg, #1570ef 7.74%, #9eeff4 94.51%);
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  background-color: ${theme.palette.white};
  padding: 2.5px;

  border-radius: 100px;
`;
