import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <Navbar />

      <main className="container mx-auto py-12">
        <div className="overlay text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Welcome to Dejo Aromas
          </h1>
          <p className="mb-6 text-white">
            Discover the finest fragrances crafted with passion and precision.
          </p>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="product-card">
              <h2 className="text-2xl font-bold mb-2 text-white">Product 1</h2>
              <p className="text-white">Descripción del producto 1.</p>
            </div>
            <div className="product-card">
              <h2 className="text-2xl font-bold mb-2 text-white">Product 2</h2>
              <p className="text-white">Descripción del producto 2.</p>
            </div>
            <div className="product-card">
              <h2 className="text-2xl font-bold mb-2 text-white">Product 3</h2>
              <p className="text-white">Descripción del producto 3.</p>
            </div>
          </section>
        </div>

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;
