import React from "react";

const GalleryItem = ({ src, alt }) => {
  return (
    <div className="gallery-item">
      <img src={src} alt={alt} className="gallery-image" />
      <p className="text-center mt-2">{alt}</p>
    </div>
  );
};

export default GalleryItem;
