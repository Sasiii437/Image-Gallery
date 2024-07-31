// src/components/ImageGallery.js
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
  { src: 'https://cdn.feedingtrends.com/article-images/1_2325365316.jpg', alt: 'Image 1' },
  { src: 'https://thumbs.dreamstime.com/z/indian-god-vector-hindu-godhead-goddess-character-hinduism-godlike-idol-ganesha-india-illustration-set-asian-godly-161860347.jpg', alt: 'Image 2' },
  { src: 'https://i.pinimg.com/550x/0f/e5/9e/0fe59ed2803bcca39895a25d1579a353.jpg', alt: 'Image 1' },
  { src: 'https://i.pinimg.com/originals/28/7e/4c/287e4c3d76a1c6688438f4be9c3ea846.jpg', alt: 'Image 1' },
  { src: 'https://media.architecturaldigest.com/photos/59a838a9a8a79c392f89eba2/master/w_1600%2Cc_limit/GettyImages-481686221.jpg', alt: 'Image 1' },
  { src: 'https://i.pinimg.com/originals/cf/b9/26/cfb9261071a3c73fc832ac838e081f99.jpg', alt: 'Image 1' },
  { src: 'https://usercontent2.hubstatic.com/14327059.jpg', alt: 'Image 1' },
  { src: 'https://c8.alamy.com/comp/HEHAKX/indian-flute-with-peacock-feather-HEHAKX.jpg', alt: 'Image 1' },
  { src: 'https://www.gopinathgaudiyamath.com/wp-content/uploads/2016/03/mayapur-temple-768x1024.jpg', alt: 'Image 1' },
  { src: 'https://i.pinimg.com/736x/03/c9/5b/03c95ba8c214ea6f5b8e529aa848798d.jpg', alt: 'Image 1' },
  { src: 'https://i.pinimg.com/originals/dd/3d/56/dd3d56446f09ffe051d85e874e356bc0.jpg', alt: 'Image 1' },
  // Add more images here
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <ImageItem key={index} image={image} onClick={openModal} />
        ))}
      </div>
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default ImageGallery;
