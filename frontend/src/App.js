import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CatalogoDama from "./pages/CatalogoDama";
import CatalogoVaron from "./pages/CatalogoVaron";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo-dama" element={<CatalogoDama />} />
          <Route path="/catalogo-varon" element={<CatalogoVaron />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
