import React from "react";
import ReactDOM from "react-dom/client";

// Must be imported before App so i18n is initialized before any component renders
import "./core/i18n/i18n.config"
import "./core/styles/tokens.css";  // theme variables — must be first
import "./index.css";          // global reset and base styles
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);