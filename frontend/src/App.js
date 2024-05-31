import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define tu tema personalizado aquí
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#ff1744",
    },
  },
});

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
