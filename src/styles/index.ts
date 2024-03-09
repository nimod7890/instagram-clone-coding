import palette from "src/styles/palette";
import typography from "src/styles/typography";

export { default as theme } from "./theme";

export type KeyOfTypography = keyof typeof typography;
export type KeyOfPalette = keyof typeof palette;
