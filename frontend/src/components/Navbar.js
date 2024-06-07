import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Navbar() {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-8 mr-2" alt="Dejo Aromas Logo" />
          <span className="text-white text-2xl font-semibold">Dejo Aromas</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/catalogo/dama" className="text-gray-300 hover:text-white">
            Catálogo Dama
          </Link>
          <Link to="/catalogo/varon" className="text-gray-300 hover:text-white">
            Catálogo Varon
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
        </div>
        <div className="md:hidden">{/* Mobile menu button */}</div>
      </div>
    </nav>
  );
}

export default Navbar;
