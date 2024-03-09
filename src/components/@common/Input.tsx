import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import Icon, { KeyOfIcon } from "src/components/@common/Icon";
import { theme } from "src/styles";
import styled from "styled-components";

type InputProps = {
  value?: string;
  isError?: boolean;
  startIcon: KeyOfIcon;
  displayErrorStatusIcon?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value = "",
      startIcon,
      isError = false,
      displayErrorStatusIcon = false,
      ...props
    },
    ref
  ) => {
    return (
      <Container>
        <Icon icon={startIcon} color="gray500" size={"20"} />
        <StyledInput
          value={value}
          ref={ref as ForwardedRef<HTMLInputElement>}
          {...props}
        />
        {displayErrorStatusIcon && (
          <Icon
            icon={isError ? "x-circle" : "check-circle"}
            color={isError ? "error" : "gray500"}
            size={"20"}
          />
        )}
      </Container>
    );
  }
);
export default Input;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 14px;

  background-color: ${theme.palette.white};

  border: 1px solid ${theme.palette.gray300};
  border-radius: 30px;
`;

const StyledInput = styled.input<{
  value: string;
  isError?: boolean;
}>`
  width: 100%;
  border: none;
  padding: 0 8px;
  ${theme.typography.body1Regular};
  color: ${theme.palette.black};

  & + div {
    color: ${theme.palette.black};
  }
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${theme.palette.gray500};
    font-weight: 400;
  }
`;
