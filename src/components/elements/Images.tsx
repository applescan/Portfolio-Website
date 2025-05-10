import React from "react";
import "./Images.css";

interface ImageData {
  src: string;
  alt: string;
}

interface ImagesProps {
  images: ImageData[];
}

const Images: React.FC<ImagesProps> = ({ images }) => {
  return (
    <div className="images-wrapper">
      {images.map((image, index) => (
        <img
          key={index}
          className="image radius8"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default Images;
