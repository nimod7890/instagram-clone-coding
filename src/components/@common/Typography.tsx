import { KeyOfPalette, KeyOfTypography, theme } from "src/styles";
import styled, { css } from "styled-components";

const Typography = styled.p<{
  type?: KeyOfTypography;
  color?: KeyOfPalette;
  css?: ReturnType<typeof css>;
}>`
  ${({ type = "body1Regular" }) => theme.typography[type]};
  color: ${({ color = "black" }) => theme.palette[color]};
  line-height: 24px;

  ${({ css }) => css}
`;

export default Typography;
