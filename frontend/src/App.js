import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CatalogoDama from "./pages/CatalogoDama";
import CatalogoVaron from "./pages/CatalogoVaron";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <main className="container mx-auto py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo/dama" element={<CatalogoDama />} />
            <Route path="/catalogo/varon" element={<CatalogoVaron />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
