import React from "react";
import { createRoot } from "react-dom/client";
import "./CSS/index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot를 사용하여 루트 컴포넌트 생성
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
