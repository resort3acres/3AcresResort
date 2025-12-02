import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import roomData from "../Data/roomData.js";

const RoomsImages = () => {
    const { roomKey } = useParams();
    const room = roomData[roomKey];

    const [openIndex, setOpenIndex] = useState(null);

    // Close modal with ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setOpenIndex(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    if (!room) {
        return (
            <h1 className="text-center text-3xl mt-24 text-red-600">
                Room not found
            </h1>
        );
    }

    const nextImage = () => {
        setOpenIndex((prev) =>
            prev + 1 < room.images.length ? prev + 1 : 0
        );
    };

    const prevImage = () => {
        setOpenIndex((prev) =>
            prev === 0 ? room.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="mt-24 px-6 sm:px-10 lg:px-16">

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl font-bold text-center text-gray-700 mb-10">
                {room.name} — Gallery
            </h1>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {room.images.map((src, i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
                        onClick={() => setOpenIndex(i)}
                    >
                        <img
                            src={src}
                            alt={room.name}
                            className="w-full h-60 object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* IMAGE MODAL */}
            {openIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setOpenIndex(null)}
                >
                    <div
                        className="relative max-w-4xl w-full px-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-white text-3xl"
                            onClick={() => setOpenIndex(null)}
                        >
                            ×
                        </button>

                        {/* Image */}
                        <img
                            src={room.images[openIndex]}
                            className="w-full max-h-[80vh] object-contain rounded-lg"
                        />

                        {/* Prev Button */}
                        <button
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
                            onClick={prevImage}
                        >
                            ‹
                        </button>

                        {/* Next Button */}
                        <button
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
                            onClick={nextImage}
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default RoomsImages;
