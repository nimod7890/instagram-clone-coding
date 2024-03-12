import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Icon, Typography } from "src/components/@common";
import { theme } from "src/styles";
import styled, { css } from "styled-components";

type CheckboxProps = {
  label: ReactNode | string;
  link?: ReactNode | string;
  containerStyles?: ReturnType<typeof css>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
  checked,
  label,
  link,
  onClick,
  containerStyles,
  ...props
}: CheckboxProps) {
  return (
    <Container css={containerStyles}>
      <LabelContainer>
        <Typography>{label}</Typography>
        {link && <StyledLink to="#">{link}</StyledLink>}
      </LabelContainer>
      <StyledCheckbox checked={checked} onClick={onClick} readOnly {...props}>
        {checked ? (
          <Icon
            icon="check"
            color={checked ? "primary500" : "border"}
            size={"14px"}
          />
        ) : null}
      </StyledCheckbox>
    </Container>
  );
}

/** styles */

const Container = styled.div<{ css?: ReturnType<typeof css> }>`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  ${({ css }) => css}
`;

const LabelContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const StyledCheckbox = styled.div<{ checked?: boolean | undefined }>`
  transition: 0.05s all;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  border: 1px solid
    ${({ checked = false }) =>
      checked ? theme.palette.primary500 : theme.palette.border};
  border-radius: 6px;

  background-color: ${({ checked }) =>
    checked ? "#EFF8FF" : theme.palette.white};

  cursor: pointer;
`;

const StyledLink = styled(Link)`
  ${theme.typography.body1Regular}

  color: ${theme.palette.primary500};
`;
