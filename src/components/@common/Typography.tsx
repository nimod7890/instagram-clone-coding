import { KeyOfPalette, KeyOfTypography, theme } from "src/styles";
import styled from "styled-components";

const Typography = styled.p<{
  type?: KeyOfTypography;
  color?: KeyOfPalette;
}>`
  ${({ type = "body1Regular" }) => theme.typography[type]};
  color: ${({ color = "black" }) => theme.palette[color]};
  line-height: 24px;
`;

export default Typography;
