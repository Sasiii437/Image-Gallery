// src/components/ImageItem.js
import React from 'react';
import './ImageItem.css';

const ImageItem = ({ image, onClick }) => {
  return (
    <div className="image-item" onClick={() => onClick(image)}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default ImageItem;
