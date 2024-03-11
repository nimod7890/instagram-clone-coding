import { isEmpty } from "lodash";
import { forwardRef, useState } from "react";
import { Input } from "src/components/@common";
import { InputProps } from "src/components/@common/input";
import { theme } from "src/styles";
import styled from "styled-components";

type PasswordInputProps = Omit<
  InputProps,
  "startIcon" | "type" | "placeholder"
>;

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [showPassword, toggleShowPassword] = useState<boolean>(false);

    return (
      <Input
        type={showPassword ? "text" : "password"}
        ref={ref}
        startIcon="lock"
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
  }
);

export default PasswordInput;

const StyledButton = styled.button`
  margin-left: 8px;
  background-color: ${theme.palette.white};
  ${theme.typography.body1SemiBold}
`;
