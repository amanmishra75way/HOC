import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StatusBar from "./customhooks/useIsOnline.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StatusBar />
  </StrictMode>
);
