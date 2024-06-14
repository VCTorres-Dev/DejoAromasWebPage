import React from "react";
import PropTypes from "prop-types";

const PerfumeCard = ({ perfume, onClick }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="h-48 rounded-lg mb-4 overflow-hidden">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-lg font-bold text-gray-800">{perfume.name}</h2>
    </div>
  );
};

PerfumeCard.propTypes = {
  perfume: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PerfumeCard;
