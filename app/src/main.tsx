import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./variables.css";
import "./index.css";

import App from "./App.tsx";
import { ConnectionProvider } from "./providers/ConnectionProvider.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OverviewPage from "./components/pages/OverviewPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConnectionProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<OverviewPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConnectionProvider>
  </StrictMode>,
);
