import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-responsive-modal/styles.css";
import "./index.css";
import App from "./App.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      position="bottom-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition="Bounce"
    />
    <App />
  </StrictMode>
);
