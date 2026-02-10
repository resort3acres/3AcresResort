import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const images = [
    {
      src: "https://res.cloudinary.com/dynfbapnz/image/upload/f_auto,q_auto,w_1600/img1_ituyrg.avif",
      alt: "Luxury resort view"
    },
    {
      src: "https://res.cloudinary.com/dynfbapnz/image/upload/f_auto,q_auto,w_1600/img2_y5uyaj.avif",
      alt: "Resort rooms"
    },
    {
      src: "https://res.cloudinary.com/dynfbapnz/image/upload/f_auto,q_auto,w_1600/outside_vbhpvp.avif",
      alt: "Resort exterior"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[70vh] lg:h-screen overflow-hidden">

      {/* IMAGE SLIDER */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            width="1600"
            height="900"
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            className="min-w-full h-full object-cover"
          />
        ))}
      </div>

      {/* TEXT CONTENT */}
      <div className="absolute bottom-10 left-6 sm:left-10 text-white max-w-lg">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-4"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,1)" }}
        >
          Experience Timeless <br /> Luxury & Comfort
        </h1>

        <p
          className="text-sm sm:text-lg md:text-xl mb-6 font-medium"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,1)" }}
        >
          Discover the perfect balance of luxury and comfort with our modern
          resort designed for unforgettable stays.
        </p>

        <button
          onClick={() => navigate("/rooms")}
          className="bg-white rounded-xl text-black px-5 py-2 font-semibold hover:bg-gray-200 hover:text-[#fc8b0a] transition-all duration-300"
        >
          Explore Our Rooms
        </button>
      </div>
    </div>
  );
};

export default Home;
