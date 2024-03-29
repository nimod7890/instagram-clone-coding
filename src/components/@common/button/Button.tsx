import { KeyOfPalette, theme } from "src/styles";
import styled, { css } from "styled-components";

const Button = styled.button<{
  backgroundColor?: KeyOfPalette;
  variant?: keyof typeof buttonVariant;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 320px;
  height: 44px;

  border-radius: 30px;

  ${theme.typography.body1SemiBold};

  :disabled {
    opacity: 0.5;
    :active {
      transform: none;
    }
    :hover {
      box-shadow: none;
    }
  }

  ${({ variant = "primary" }) => buttonVariant[variant]}
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
    :hover {
      background-color: ${theme.palette.gray10};
    }
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
