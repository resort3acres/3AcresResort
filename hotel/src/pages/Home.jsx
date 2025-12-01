
import React, { useEffect, useState } from 'react'
import img1 from '/img1.avif'
import img2 from '/img2.avif'
import img3 from '/img3.avif'
import img4 from '/img4.avif'
import arial1 from '/arial1.JPG'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  const handleExploreRooms = () => {
    navigate("/rooms");
  }

  const image = [
    "https://res.cloudinary.com/dwvf9a857/image/upload/v1763534855/arial1_cvkr9e.jpg",
    "https://res.cloudinary.com/dwvf9a857/image/upload/v1763534857/img1_dznuzr.avif",
    "https://res.cloudinary.com/dwvf9a857/image/upload/v1763534858/img2_tr9kjd.avif",
    "https://res.cloudinary.com/dwvf9a857/image/upload/v1763534859/img3_g3dv7d.avif",
    "https://res.cloudinary.com/dwvf9a857/image/upload/v1763534860/img4_mkpdxs.avif"
  ]

  const img = [arial1, img1, img2, img3, img4]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === image.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">

      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {image.map((src, index) => (
          <img
            key={index}
            src={src}
            className="min-w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-full object-cover"
          />
        ))}
      </div>

      {/* Text Content */}
      <div className='absolute bottom-10 left-6 sm:left-10 text-white max-w-lg'>
        <h1 className='text-white text-2xl sm:text-4xl md:text-5xl font-semibold mb-4'
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,1)" }}>
          Experience Timeless <br /> Luxury & Comfort
        </h1>

        <p className='text-white text-sm sm:text-lg md:text-xl mb-6 font-medium'
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,1)" }}>
          Discover the perfect balance of luxury and comfort with our modern
          hotel and resort. Design for traveller seeking an unforgettable stay.
        </p>

        <button
          onClick={handleExploreRooms}
          className='bg-white rounded-xl text-black px-4 py-2 font-semibold my-2 font-sans hover:bg-gray-200 hover:text-[#fc8b0a] transition-all duration-300 cursor-pointer'>
          Explore Our Rooms
        </button>
      </div>

    </div>
  )

}

export default Home

// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();
//   const handleExploreRooms = () => navigate("/rooms");

//   const [muted, setMuted] = useState(true);
//   const videoRef = useRef(null);

//   const toggleMute = () => {
//     setMuted(!muted);
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//     }
//   };

//   return (
//     <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">
//       <video
//         ref={videoRef}
//         autoPlay
//         muted={muted}
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source
//           src="https://drive.google.com/uc?export=download&id=1pnlA4U8se_EBktoaabVzceozl6X4QrW4"
//           type="video/mp4"
//         />
//       </video>

//       {/* Dark overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

//       {/* Mute / Unmute Button */}
//       <button
//         onClick={toggleMute}
//         className="absolute bottom-4 right-4 bg-white/70 text-black px-3 py-2 rounded-full shadow-md text-sm font-semibold hover:bg-white transition"
//       >
//         {muted ? "Unmute" : "Mute"}
//       </button>
//     </div>
//   );
// };

// export default Home;
