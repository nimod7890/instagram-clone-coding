import { Avatar, Typography } from "src/components/@common";
import { theme } from "src/styles";
import styled from "styled-components";

const MockUsers = ["kendalljenner", "dewisandra", "tiit_smail", "window123"];

export default function RecommendedUser() {
  return (
    <Container>
      <SpaceBetween>
        <Typography type="body2SemiBold" color="gray500">
          회원님을 위한 추천
        </Typography>
        <Button>모두 보기</Button>
      </SpaceBetween>
      <List>
        {MockUsers.map((user) => (
          <SpaceBetween>
            <SpaceBetween>
              <Avatar size={30} />
              <Typography type="body2Regular">{user}</Typography>
            </SpaceBetween>
            <Button style={{ color: theme.palette.primary500 }}>팔로우</Button>
          </SpaceBetween>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 6px;
`;

const Button = styled.button`
  ${theme.typography.body2Bold}
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
