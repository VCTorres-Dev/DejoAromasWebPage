import React from "react";
import PropTypes from "prop-types";

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-1/3">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

ValueCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ValueCard;
