import React from "react";

function CatalogPage({ gender }) {
  const products = gender === "varon" ? varonProducts : damaProducts; // Arrays de productos para cada género
  return (
    <main className="container mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          {gender === "varon"
            ? "Catálogo de Aromas para Varón"
            : "Catálogo de Aromas para Dama"}
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card bg-white p-6 rounded-lg shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default CatalogPage;

// Datos ficticios para productos, estos deben ser reemplazados por datos reales
const varonProducts = [
  {
    name: "Aroma Berlín",
    description:
      "Un perfume vanguardista que celebra la feminidad contemporánea.",
    image: "/images/berlin.jpg",
  },
  // Agrega más productos para varones
];

const damaProducts = [
  {
    name: "Aroma París",
    description:
      "Una oda al amor eterno, Aroma París combina rosa negra, orquídea de vainilla y praliné.",
    image: "/images/paris.jpg",
  },
  // Agrega más productos para damas
];
