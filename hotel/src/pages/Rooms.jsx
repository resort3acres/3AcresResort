import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"
import RoomCard from '../components/RoomCard'
import flamingo from '/flamingo.avif'
import kingfisher from '/kingfisher.avif'
import monal from '/monal.jpg'
import dove from '/dove.jpg'
import { useNavigate } from 'react-router-dom'
const Rooms = () => {

  const navigate = useNavigate();
  const handledClick = () => {
    navigate("/rooms");
  }
  return (
    <div className='bg-[#2c1d0a] w-full px-6 sm:px-10 lg:px-16 py-12 text-white flex flex-col' >

      {/* --- HEADER SECTION --- */}
      <div className='flex flex-col lg:flex-row justify-between w-full gap-6'>

        <div>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-1 bg-gray-600 rounded-xl'></div>
            <h3 className='text-gray-400 text-lg sm:text-xl font-semibold'>
              Room / Suite
            </h3>
          </div>

          <h1
            className='text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2'
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Elegantly <br /> Curated Rooms
          </h1>
        </div>

        <div className='lg:w-1/3 text-base sm:text-lg mt-4'>
          <p className='text-gray-200'>
            Every room is designed with comfort, style and sophistication
            to give you a luxurious stay.
          </p>
          <button
            className="mt-4 px-6 py-2 bg-white border border-black text-gray-600 
                       font-semibold rounded-3xl shadow-lg flex items-center 
                       gap-1 transition-all duration-300 cursor-pointer"

            onClick={handledClick}
          >
            View All Rooms <IoIosArrowRoundForward size={28} />
          </button>
        </div>
      </div>

      {/* --- ROOM CARDS GRID --- */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
        <RoomCard roomType="Flamingo" img={flamingo} />
        <RoomCard roomType="Kingfisher"  img={kingfisher} />
        <RoomCard roomType="Monal (Twin Room)"  img={monal} />
        <RoomCard roomType="Dove"  img={dove} />
      </div>

    </div>
  )
}

export default Rooms
