import React from "react";
import ReactDOM from "react-dom/client"; // Importar createRoot desde react-dom/client
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // Crear una raíz con createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
