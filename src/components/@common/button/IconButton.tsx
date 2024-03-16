import { Icon } from "src/components/@common";
import { IconProps } from "src/components/@common/Icon";
import styled from "styled-components";

type IconButtonProps = IconProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function IconButton({
  icon,
  size,
  color,
  fill,
  ...props
}: IconButtonProps) {
  return (
    <StyledButton {...props}>
      <Icon icon={icon} size={size} color={color} fill={fill} />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 5px;
  border-radius: 8px;

  :disabled {
    opacity: 0.5;
    :hover {
      box-shadow: none;
    }
  }
`;
