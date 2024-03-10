import theme from "./theme/theme";
import { createGlobalStyle } from "styled-components";

export const supportDeviceSize = 1080;

export const GlobalStyle = createGlobalStyle`

body {
    font-family: "Sofia Pro", "Noto Sans", -apple-system, sans-serif, Roboto;
    background-color: ${theme.palette.background};
    margin: 0;
    padding: 0;
    height:100vh;
    display: flex;
    flex-direction: column;
}
`;
