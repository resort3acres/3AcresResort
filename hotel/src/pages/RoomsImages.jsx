import React from "react";
import { useParams } from "react-router-dom";
import roomData from "../Data/roomData.js"

const RoomsImages = () => {
    const { roomKey } = useParams(); 

    const room = roomData[roomKey];

    if (!room) {
        return (
            <h1 className="text-center text-3xl mt-20 text-red-600">
                Room not found
            </h1>
        );
    }

    return (
        <div className="p-6 mt-24">
            <h1 className="text-3xl font-bold text-center mb-6">
                {room.name} — Gallery
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {room.images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`${room.name} ${i}`}
                        className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition"
                    />
                ))}
            </div>
        </div>
    );
};

export default RoomsImages;
