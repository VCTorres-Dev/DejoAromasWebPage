import React from "react";

function Header() {
  return (
    <header className="bg-blue-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Dejo Aromas</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
