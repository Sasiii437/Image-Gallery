// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <span className="close">&times;</span>
      <img className="modal-content" src={image.src} alt={image.alt} />
    </div>
  );
};

export default Modal;
