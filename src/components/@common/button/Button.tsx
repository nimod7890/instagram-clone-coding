import { KeyOfPalette, theme } from "src/styles";
import styled, { css } from "styled-components";

const Button = styled.button<{
  backgroundColor?: KeyOfPalette;
  width?: string | number;
  variant?: keyof typeof buttonVariant;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (width ? width : "100%")};
  ${({ variant = "primary" }) => buttonVariant[variant]}

  padding: 10px 0px;

  border-radius: 30px;

  ${theme.typography.body1Bold};

  :hover {
    box-shadow: 1px 1px 1px ${theme.palette.gray100};
  }

  :disabled {
    opacity: 0.5;
    :active {
      transform: none;
    }
    :hover {
      box-shadow: none;
    }
  }
`;

export default Button;

const buttonVariant = {
  primary: css`
    background-color: ${theme.palette.primary500};
    color: ${theme.palette.white};
    :disabled {
      background-color: ${theme.palette.primary200};
      opacity: 1;
    }
  `,

  secondary: css`
    background-color: ${theme.palette.white};
    color: ${theme.palette.primary500};
  `,

  kakao: css`
    background-color: ${theme.palette.kakaoYellow};
    color: ${theme.palette.kakaoBlack};
  `,

  neutral: css`
    color: ${theme.palette.white};
    background-color: ${theme.palette.button};
  `,
};
