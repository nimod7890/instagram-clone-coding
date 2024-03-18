import UserNavTabButton from "./UserNavTabButton";
import { Outlet } from "react-router-dom";
import {
  getUserBookMarkPagePath,
  getUserLikePagePath,
  getUserPagePath,
} from "src/routes/routePath";
import styled from "styled-components";

type UserActivityTabsProps = { loginId: string };

export default function UserActivityTabs({ loginId }: UserActivityTabsProps) {
  const BUTTONS: { label: string; link: string }[] = [
    { label: "게시글", link: getUserPagePath(loginId) },
    { label: "좋아요", link: getUserLikePagePath(loginId) },
    { label: "북마크", link: getUserBookMarkPagePath(loginId) },
  ];

  return (
    <>
      <Container>
        {BUTTONS.map(({ label, link }) => (
          <UserNavTabButton key={label} to={link}>
            {label}
          </UserNavTabButton>
        ))}
      </Container>
      <Body>
        <Outlet />
      </Body>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  height: 100%;
`;
