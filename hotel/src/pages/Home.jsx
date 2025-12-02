
import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  const handleExploreRooms = () => {
    navigate("/rooms");
  }

  const image = [
    "https://res.cloudinary.com/dynfbapnz/image/upload/v1764656858/arial1_q07tpq.jpg",
    "https://res.cloudinary.com/dynfbapnz/image/upload/v1764656887/img1_ituyrg.avif",
    "https://res.cloudinary.com/dynfbapnz/image/upload/v1764656854/img2_y5uyaj.avif",
    "https://res.cloudinary.com/dynfbapnz/image/upload/v1764656853/outside_vbhpvp.avif",
  ]

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
