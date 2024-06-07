import React from "react";

function PerfumeCard({ name, description, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default PerfumeCard;
