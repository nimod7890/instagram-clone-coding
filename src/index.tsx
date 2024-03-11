import "rc-dropdown/assets/index.css";
import { StrictMode } from "react";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom/client";
import App from "src/App";
import "src/styles/fonts/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
