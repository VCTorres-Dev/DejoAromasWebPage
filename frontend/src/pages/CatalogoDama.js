import React from "react";

function CatalogoDama() {
  const perfumes = [
    {
      id: 1,
      name: "Perfume A",
      description: "Fragancia floral con notas de jazmín y rosa.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Perfume B",
      description: "Aroma cítrico con toques de naranja y limón.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Perfume C",
      description: "Mezcla de esencias amaderadas y especiadas.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Catálogo de Aromas para Dama
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          >
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-semibold text-white">
              {perfume.name}
            </h2>
            <p className="text-gray-400">{perfume.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogoDama;
