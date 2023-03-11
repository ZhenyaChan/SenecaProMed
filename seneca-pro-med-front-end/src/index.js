import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import { StateProvider } from "./context/stateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
