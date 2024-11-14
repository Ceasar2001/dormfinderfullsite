import React, { useState } from "react";
import "./PopularPlaces.scss";

const PopularPlaces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/place1.jpg",
    "/place2.jpg",
    "/place3.jpg",
    "/place4.jpg",
    "/place5.jpg",
    "/place6.jpg",
    "/place7.jpg",
    "/place8.jpg",
  ];

  const handleNext = (index) => {
    if (index === 1) {
      setCurrentIndex((prev) => (prev + 3) % images.length);
    }
  };

  const handlePrev = (index) => {
    if (index === 1) {
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 3 : prev - 3
      );
    }
  };

  return (
    <div className="popular-places">
      <h2>Popular Places</h2>
      <div className="carousel">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="carousel-column" key={index}>
            <h3>Place {index + 1}</h3>
            <div className="carousel-images">
              {images
                .slice(currentIndex + index * 3, currentIndex + (index + 1) * 3)
                .map((image, imgIndex) => (
                  <div className="image-box" key={imgIndex}>
                    <img src={image} alt={`Place ${index + 1}`} />
                  </div>
                ))}
            </div>
            <div className="carousel-controls">
              <button
                onClick={() => handlePrev(index)}
                className="prev-btn"
              >
                &#10094;
              </button>
              <button
                onClick={() => handleNext(index)}
                className="next-btn"
              >
                &#10095;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPlaces;
