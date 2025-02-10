import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./HomePage";
import SuccessLogin from "./assets/Success-login";
import LoginForm from "./LoginLocalPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<App />} />
        <Route path="/success-login" element={<SuccessLogin />} />
        <Route path="/login-local" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
