import { isEmpty } from "lodash";
import { ForwardedRef, PropsWithChildren, forwardRef } from "react";
import Icon, { KeyOfIcon } from "src/components/@common/Icon";
import { theme } from "src/styles";
import styled, { css } from "styled-components";

export type InputProps = {
  isError?: boolean;
  startIcon?: KeyOfIcon;
  displayErrorStatusIcon?: boolean;
  containerStyles?: ReturnType<typeof css>;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "children">;

const Input = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
  (
    {
      value = "",
      startIcon,
      isError = false,
      displayErrorStatusIcon = true,
      containerStyles,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Container css={containerStyles}>
        {startIcon && <Icon icon={startIcon} size={"20"} />}
        <StyledInput
          value={value}
          ref={ref as ForwardedRef<HTMLInputElement>}
          {...props}
        />
        {!isEmpty(value) && displayErrorStatusIcon && (
          <Icon
            icon={isError ? "x-circle" : "check-circle"}
            color={isError ? "error" : "gray500"}
            size={"20"}
          />
        )}
        {children}
      </Container>
    );
  }
);
export default Input;

/** styles */
const Container = styled.div<{ css?: ReturnType<typeof css> }>`
  width: 280px;
  height: 28px;

  display: flex;
  align-items: center;

  background-color: ${theme.palette.white};
  padding: 10px 20px;

  border: 1px solid ${theme.palette.gray300};
  border-radius: 30px;

  ${({ css }) => css}
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;

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
