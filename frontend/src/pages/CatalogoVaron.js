import React, { useState } from "react";
import PerfumeDetailModal from "../components/PerfumeDetailModal";
import PropTypes from "prop-types";

const CatalogoVaron = () => {
  const [selectedPerfume, setSelectedPerfume] = useState(null);

  const perfumes = [
    {
      name: "Perfume X",
      description: "Fragancia intensa con notas de madera y cuero.",
    },
    {
      name: "Perfume Y",
      description: "Aroma fresco con toques de mentol y eucalipto.",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white text-center mb-12">
          Catálogo de Aromas para Varón
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {perfumes.map((perfume) => (
            <div
              key={perfume.name}
              className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5"
              onClick={() => setSelectedPerfume(perfume)}
            >
              <div className="">
                <div className="group-hover:scale-110 w-full h-60 bg-blue-400 duration-500"></div>
                <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                  <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                  <span className="text-xl font-bold">{perfume.name}</span>
                  <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                    {perfume.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedPerfume && (
        <PerfumeDetailModal
          isOpen={!!selectedPerfume}
          onClose={() => setSelectedPerfume(null)}
          perfume={selectedPerfume}
        />
      )}
    </div>
  );
};

CatalogoVaron.propTypes = {
  perfumes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default CatalogoVaron;
