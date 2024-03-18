import { Typography } from "src/components/@common";
import { theme } from "src/styles";
import styled from "styled-components";

export type ModalHeaderProps = {
  title: string;
  left?: {
    props:
      | Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">
      | undefined;
    child: React.ComponentType | string;
  };
  right?: {
    props:
      | Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">
      | undefined;
    child: React.ComponentType | string;
  };
};

export default function ModalHeader({ left, right, title }: ModalHeaderProps) {
  return (
    <Container>
      <SideButton {...left?.props}>
        {left?.child ? (
          typeof left.child === "string" ? (
            left.child
          ) : (
            <left.child />
          )
        ) : null}
      </SideButton>
      <Typography type="Title2SemiBold">{title}</Typography>
      <SideButton {...right?.props}>
        {right?.child ? (
          typeof right.child === "string" ? (
            right.child
          ) : (
            <right.child />
          )
        ) : null}
      </SideButton>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  min-height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;
  padding: 0 20px;

  border-bottom: 1px solid ${theme.palette.gray300};
  background-color: ${theme.palette.white};
`;

const SideButton = styled.button`
  min-width: 40px;

  ${theme.typography.Title2SemiBold};

  color: ${theme.palette.primary500};
`;
