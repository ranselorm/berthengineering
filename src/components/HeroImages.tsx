// src/components/ImageGallery.tsx
import { useState } from "react";
import { slides } from "../data";

const HeroImages = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <div className="flex justify-center items-center gap-4 font-primary">
      {slides?.map((slide, index) => (
        <div
          key={index}
          onClick={() => handleImageClick(index)}
          className={`relative cursor-pointer transition-transform duration-300 rounded overflow-hidden ${
            index === selectedImage ? "w-5/6 h-[500px]" : "w-20 h-[380px]"
          }`}
        >
          {/* Background image */}
          <img
            src={slide.imageUrl}
            alt={`img-${index}`}
            className="w-full h-full object-cover"
          />

          {/* Overlay with text */}
          <div
            className={`absolute inset-0 flex flex-col gap-y-4 justify-center transition-all duration-300 px-10 text-white ${
              index === selectedImage
                ? "bg-gradient-to-r from-black/100 via-black/60 to-transparent"
                : "hidden"
            }`}
          >
            <h2 className="font-semibold text-4xl">{slide.text}</h2>
            <p className="w-3/6">{slide.subText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroImages;
