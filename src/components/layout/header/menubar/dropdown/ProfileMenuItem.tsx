import { Typography } from "src/components/@common";
import Icon, { IconProps } from "src/components/@common/Icon";
import { theme } from "src/styles";
import styled from "styled-components";

type ProfileMenuItemProps = Pick<IconProps, "icon"> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ProfileMenuItem({
  icon,
  children,
  ...props
}: ProfileMenuItemProps) {
  return (
    <StyledButton {...props}>
      <Icon icon={icon} color="gray900" />
      <Typography type="body1Bold">{children}</Typography>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 240px;
  height: 48px;

  display: flex;
  align-items: center;

  padding: 12px;
  border-radius: 8px;
  gap: 16px;

  :hover {
    background-color: ${theme.palette.gray50};
  }
`;
