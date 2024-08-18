import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ApiContext from "./Context/ApiContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiContext>
      <App />
    </ApiContext>
  </StrictMode>
);
