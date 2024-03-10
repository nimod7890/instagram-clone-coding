import theme from "./theme/theme";
import { GlobalSize } from "src/constants";
import { createGlobalStyle } from "styled-components";

export const supportDeviceSize = 1080;

export const GlobalStyle = createGlobalStyle`

body {
    font-family: "Sofia Pro", "Noto Sans", -apple-system, sans-serif, Roboto;
    
    margin: 0;
    padding: 0;
    
    display: flex;
    flex-direction: column;
    
    background-color: ${theme.palette.background};
    min-width: ${GlobalSize.WindowWidthMin};
    min-height: 100vh;
    height:100vh;

    overflow: hidden;
}
`;
