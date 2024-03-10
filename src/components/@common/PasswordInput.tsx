import { isEmpty } from "lodash";
import { forwardRef, useState } from "react";
import { Input } from "src/components/@common";
import { InputProps } from "src/components/@common/Input";
import { theme } from "src/styles";
import styled from "styled-components";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [showPassword, toggleShowPassword] = useState<boolean>(false);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      ref={ref}
      placeholder="비밀번호"
      {...props}
    >
      {isEmpty(props.value) ? null : (
        <StyledButton onClick={() => toggleShowPassword(!showPassword)}>
          {showPassword ? "숨기기" : "비밀번호 표시"}
        </StyledButton>
      )}
    </Input>
  );
});

export default PasswordInput;

const StyledButton = styled.button`
  outline: none;
  border: none;
  padding: 0;
  margin-left: 8px;
  background-color: ${theme.palette.background};
  ${theme.typography.body1Bold}
  min-width: max-content;
  cursor: pointer;
`;
