import React from 'react'

const RoomCard = ({ img, roomType, price }) => {
    return (
        <div className='relative aspect-square w-full
                        overflow-hidden cursor-pointer rounded-md shadow-lg 
                        transition-transform duration-300 hover:scale-105'>

            <img
                src={img}
                alt={roomType}
                className="w-full h-full object-cover"
            />

            <div className='absolute bottom-3 left-3 text-white'>
                <p className="font-semibold text-lg sm:text-xl">{roomType}</p>
                {/* <p className="text-sm sm:text-md opacity-90">From ₹{price}/night</p> */}
            </div>

        </div>
    )
}

export default RoomCard
