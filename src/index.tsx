import { StrictMode } from "react";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
import App from "src/App";
import "src/styles/fonts/index.css";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
