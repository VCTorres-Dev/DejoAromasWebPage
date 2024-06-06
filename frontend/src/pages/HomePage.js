import React from "react";

const HomePage = () => {
  return (
    <div className="overlay">
      <div className="container text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dejo Aromas</h1>
        <p className="mb-6">
          Discover the finest fragrances crafted with passion and precision.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="product-card">
            <h2>Product 1</h2>
            <p>Descripción del producto 1.</p>
          </div>
          <div className="product-card">
            <h2>Product 2</h2>
            <p>Descripción del producto 2.</p>
          </div>
          <div className="product-card">
            <h2>Product 3</h2>
            <p>Descripción del producto 3.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
