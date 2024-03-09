import palette from "src/styles/theme/palette";
import typography from "src/styles/theme/typography";

export { default as theme } from "./theme/theme";

export type KeyOfTypography = keyof typeof typography;
export type KeyOfPalette = keyof typeof palette;
