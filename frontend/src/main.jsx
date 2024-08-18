import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { PostContextProvider } from "./context/postContext.jsx";
import PostCardModal from "./components/PostCardModal.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PostContextProvider>
        <App />
        <PostCardModal />
        <Toaster />
      </PostContextProvider>
    </BrowserRouter>
  </StrictMode>
);
