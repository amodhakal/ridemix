import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router";

import "./style.css";
import LandingPage from "./routes/LandingPage";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
