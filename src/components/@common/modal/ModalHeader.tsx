import { Typography } from "src/components/@common";
import { theme } from "src/styles";
import styled from "styled-components";

export type ModalHeaderProps = {
  title: string;
  left?: React.ButtonHTMLAttributes<HTMLButtonElement> | undefined;
  right?: React.ButtonHTMLAttributes<HTMLButtonElement> | undefined;
};

export default function ModalHeader({ left, right, title }: ModalHeaderProps) {
  return (
    <Container>
      <SideButton {...left} />
      <Typography type="TitleSemiBold">{title}</Typography>
      <SideButton {...right} />
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

  ${theme.typography.TitleSemiBold};
  ${theme.palette.gray200}
`;
