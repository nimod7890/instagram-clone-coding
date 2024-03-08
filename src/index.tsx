import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "react-app-polyfill/stable";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
