import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles/reset.scss";
import "./index.css";
import App from "./pageFrame";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
);
