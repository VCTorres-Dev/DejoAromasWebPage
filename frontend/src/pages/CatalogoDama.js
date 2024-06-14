import React, { useState } from "react";
import PerfumeCard from "../components/PerfumeCard";
import PerfumeDetailModal from "../components/PerfumeDetailModal";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

const perfumes = [
  {
    name: "Aroma Berlín",
    description:
      "Refleja audacia y modernidad con una fragancia explosiva de pera, grosella negra, iris, jazmín, flor de azahar del naranjo y vainilla. Si te gusta La Vie Est Belle, te encantará Aroma Berlín.",
  },
  {
    name: "Aroma Zúrich",
    description:
      "Notas frescas de limón siciliano y manzana Granny Smith se entrelazan con la seductora flor de campanilla y la sensualidad del bambú. Si te gusta DOLCE & GABBANA Light Blue, te encantará Aroma Zúrich.",
  },
  {
    name: "Aroma París",
    description:
      "Combina rosa negra, orquídea de vainilla y praliné en un abrazo cálido y envolvente. Perfecto para noches románticas. Si te gusta La Nuit Trésor, te encantará Aroma París.",
  },
  {
    name: "Aroma Riviera",
    description:
      "Notas de ylang-ylang, jazmín de Grasse y sándalo crean un aroma fresco y cautivador. Si te gusta CHANEL Nº5, te encantará Aroma Riviera.",
  },
  {
    name: "Aroma Buenos Aires",
    description:
      "Captura la esencia de la ciudad que nunca duerme con notas de nardo, jazmín y haba tonka. Si te gusta GOOD GIRL de Carolina Herrera, te encantará Aroma Buenos Aires.",
  },
  {
    name: "Aroma Amalfi",
    description:
      "Combina notas de limón primofiore, jazmín de agua y cedro, creando un aroma luminoso y energizante. Perfecto para días soleados y aventuras al aire libre. Si te gusta ACQUA di GIOIA, te encantará Aroma Amalfi.",
  },
  {
    name: "Aroma Manhattan",
    description:
      "Combina notas de manzana verde, pepino y magnolia, creando un aroma fresco y moderno. Si te gusta BE DELICIOUS, te encantará Aroma Manhattan.",
  },
  {
    name: "Aroma Ibiza",
    description:
      "Combina nectarina, grosella negra y almizcle, evocando noches interminables y aventuras inolvidables. Si te gusta CAN CAN, te encantará Aroma Ibiza.",
  },
  {
    name: "Aroma Tokio",
    description:
      "Evoca la intensidad de la vida nocturna con notas de bergamota, pimienta rosa y sándalo. Si te gusta 212 SEXI, te encantará Aroma Tokio.",
  },
  {
    name: "Aroma Atenas",
    description:
      "Combina notas de mandarina verde, jazmín de agua y vainilla salada, creando un aroma poderoso y seductor. Si te gusta OLYMPEA, te encantará Aroma Atenas.",
  },
  {
    name: "Aroma Barcelona",
    description:
      "Combina notas de bergamota, agua de rosas y cuero, creando un aroma cálido y envolvente. Si te gusta CH, te encantará Aroma Barcelona.",
  },
  {
    name: "Aroma Milano",
    description:
      "Combina la frescura de la flor de azahar con la calidez de la vainilla de Madagascar y el almizcle blanco. Si te gusta GIORGIO ARMANI MY WAY, te encantará Aroma Milano.",
  },
  {
    name: "Aroma Dubái",
    description:
      "Combina notas de mango, bergamota e incienso, creando un aroma opulento y intrigante. Si te gusta Fame de Paco Rabanne, te encantará Aroma Dubái.",
  },
  {
    name: "Aroma Santorini",
    description:
      "Combina notas de limón primofiore, guayaba y almizcle, evocando la belleza y tranquilidad de las islas griegas. Si te gusta DYLAN TURQUOISE DE VERSACE, te encantará Aroma Santorini.",
  },
  {
    name: "Aroma Lisboa",
    description:
      "Combina notas de rosa, jazmín y vainilla, creando un aroma romántico y acogedor. Si te gusta IDOLE, te encantará Aroma Lisboa.",
  },
  {
    name: "Aroma VIP París",
    description:
      "Combina notas de ron, maracuyá y almizcle, creando una fragancia sofisticada y festiva. Si te gusta 212 VIP de Carolina Herrera, te encantará Aroma VIP París.",
  },
];
const CatalogoDama = () => {
  const [selectedPerfume, setSelectedPerfume] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPerfumes = perfumes.filter((perfume) =>
    perfume.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (perfume) => {
    setSelectedPerfume(perfume);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPerfume(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Catálogo de Aromas para Dama
        </h1>
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Buscar perfume..."
            className="p-2 w-full border border-gray-300 rounded-md shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="w-6 h-6 absolute right-3 top-3 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 8h.01M12 8h.01M16 8h.01M9 12h.01M15 12h.01M7.05 16.95A7.008 7.008 0 007 12.09M7.05 16.95L5.34 18.66M7.05 16.95L4.66 15.05M16.95 16.95A7.008 7.008 0 0112.09 17M16.95 16.95L18.66 18.66M16.95 16.95L15.05 19.34"
            ></path>
          </svg>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPerfumes.map((perfume, index) => (
            <PerfumeCard
              key={index}
              perfume={perfume}
              onClick={() => openModal(perfume)}
            />
          ))}
        </div>
      </div>
      <PerfumeDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        perfume={selectedPerfume}
      />
    </div>
  );
};

CatalogoDama.propTypes = {
  perfumes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default CatalogoDama;
