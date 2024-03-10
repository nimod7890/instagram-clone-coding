import { InputHTMLAttributes } from "react";
import Icon from "src/components/@common/Icon";
import { theme } from "src/styles";
import styled from "styled-components";

type CheckboxProps = {
  checked: boolean;
} & Pick<InputHTMLAttributes<HTMLInputElement>, "onClick">;

export default function Checkbox({
  checked,
  onClick,
  ...props
}: CheckboxProps) {
  return (
    <StyledCheckbox checked={checked} onClick={onClick} {...props}>
      {checked ? (
        <Icon icon="check" color={checked ? "primary500" : "border"} />
      ) : null}
    </StyledCheckbox>
  );
}

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  border: 1px solid
    ${({ checked }) =>
      checked ? theme.palette.primary500 : theme.palette.border};
  border-radius: 6px;

  background-color: ${({ checked }) =>
    checked ? theme.palette.primary200 : theme.palette.background};

  cursor: pointer;
`;
