"use client"

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="relative overflow-hidden" {...handlers}>
      <img src={images[imageIndex]} alt={alt}/>
      {images.length > 1 && (
        <>
          <button 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            onClick={handlePrevImage}
          >
            {"<"}
          </button>
          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            onClick={handleNextImage}
          >
            {">"}
          </button>
        </>
      )}
      <div className="flex justify-center mt-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 mx-1 rounded-full ${idx === imageIndex ? "bg-gray-800" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ImageCarousel);