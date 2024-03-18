import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { theme } from "src/styles";
import styled from "styled-components";

type UserNavTabButtonProps = { children: ReactNode; to: string };

export default function UserNavTabButton({
  to,
  children,
}: UserNavTabButtonProps) {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Button active={active} to={to}>
      {children}
    </Button>
  );
}

const Button = styled(Link)<{ active: boolean }>`
  width: 100%;
  height: 70px;

  transition: 0.3s all;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  border-radius: 5px;
  background-color: ${({ active }) =>
    active ? theme.palette.gray50 : theme.palette.gray100};

  ${theme.typography.Title2Regular};

  font-weight: ${({ active }) => (active ? 700 : 400)};

  color: ${({ active }) =>
    active ? theme.palette.gray900 : theme.palette.gray500};
`;
