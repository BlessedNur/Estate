import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const images = [
  "https://images.dwell.com/photos/6313690802401849344/6319601487229923328/large.jpg",
  "https://cdn.shopify.com/s/files/1/1561/8759/files/4_Modern_Bohemian_Tiny_House_on_Wheels_by_Summit_Tiny_Homes_1024x1024.png?v=1575315236",
  "https://tinyhousetalk.com/wp-content/uploads/Breezeway-Tiny-House-on-Wheels-by-Tiny-Heirloom-001.jpg",
  "https://inhabitat.com/wp-content/blogs.dir/1/files/2018/11/Cumberland-Tiny-Home100.jpg",
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setMousePosition({ x, y });
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative aspect-video mb-4">
        {/* Main Image Container */}
        <div
          className="w-full h-full relative overflow-hidden rounded-lg"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <div
            className={`w-full h-full transition-transform duration-200 bg-cover bg-no-repeat bg-center`}
            style={{
              backgroundImage: `url(${images[selectedIndex]})`,
              transform: isZoomed ? "scale(2)" : "scale(1)",
              transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
            }}
          />

          {/* Zoom Icon */}
          {!isZoomed && (
            <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-video rounded-lg overflow-hidden ${
              index === selectedIndex ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
