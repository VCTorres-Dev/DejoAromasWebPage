import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

const PerfumeDetailModal = ({ isOpen, onClose, perfume }) => {
  if (!perfume) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Perfume Details"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="p-4 bg-white rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{perfume.name}</h2>
        <p className="text-gray-800">{perfume.description}</p>
      </div>
    </Modal>
  );
};

PerfumeDetailModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  perfume: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default PerfumeDetailModal;
