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
    height: 100vh;

    overflow: hidden;
  }
  a{
    text-decoration: none;
  }
  p {
    margin:0;
    
  }
  button {
    min-width: max-content;
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    transition: 0.2s all;

    ${theme.typography.body1SemiBold};
  }
  button:hover{
    transform: scale(1.02);
  }
  button:active {
    transform: scale(0.99);
  }

  button:focus {
    outline: none;
  }
  button:disabled {
    cursor: default;
    pointer-events: none;
    :active {
      transform: none;
    }
    :hover {
      box-shadow: none;
    }
  }

  input:focus {
    outline: none;
    
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0px 1000px ${theme.palette.white} inset;
      box-shadow: 0 0 0px 1000px ${theme.palette.white} inset;
      transition: background-color 5000s ease-in-out 0s;
  }

  input:autofill,
  input:autofill:hover,
  input:autofill:focus,
  input:autofill:active {
      -webkit-box-shadow: 0 0 0px 1000px ${theme.palette.white} inset;
      box-shadow: 0 0 0px 1000px ${theme.palette.white} inset;
      transition: background-color 5000s ease-in-out 0s;
  }
  
  textarea:focus {
    outline: none;
  }
  input,
  textarea {
    border: none;
    margin: 0;

    *:required {
      background-color: ${theme.palette.white};
    }
  }
`;
