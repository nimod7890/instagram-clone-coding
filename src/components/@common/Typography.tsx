import { KeyOfPalette, KeyOfTypography, theme } from "src/styles";
import styled from "styled-components";

const Typography = styled.p<{
  type?: KeyOfTypography;
  color?: KeyOfPalette;
}>`
  ${({ type = "body1Regular" }) => theme.typography[type]};
  color: ${({ color = "gray900" }) => theme.palette[color]};
`;

export default Typography;
