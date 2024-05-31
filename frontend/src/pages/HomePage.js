// frontend/src/pages/HomePage.js

import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-4">Welcome to Dejo Aromas</h2>
      <p className="text-lg">
        Discover the finest fragrances crafted with passion and precision.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Aquí podemos añadir tarjetas de productos */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Product 1</h3>
          <p>Descripción del producto 1.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Product 2</h3>
          <p>Descripción del producto 2.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Product 3</h3>
          <p>Descripción del producto 3.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
