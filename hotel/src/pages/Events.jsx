import React from "react";

const Events = () => {
  const events = [
    { id: 1, title: "MEETINGS & CONFERENCES", image: "https://res.cloudinary.com/dwvf9a857/image/upload/v1764527387/WhatsApp_Image_2025-11-30_at_21.20.49_9015e437_oizy5e.jpg" },
    { id: 2, title: "GRAND ROYAL EVENTS", image: "https://res.cloudinary.com/dwvf9a857/image/upload/v1764527281/WhatsApp_Image_2025-11-12_at_11.15.46_AM_ipidg5.jpg" },
    { id: 3, title: "TIMELESS WEDDINGS", image: "https://res.cloudinary.com/dwvf9a857/image/upload/v1764527279/WhatsApp_Image_2025-11-13_at_11.08.40_PM_idgo2u.jpg" },
    // { id: 4, title: "CULTURAL NIGHTS", image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1000&q=80" },
    { id: 5, title: "FINE DINING EXPERIENCE", image: "https://res.cloudinary.com/dwvf9a857/image/upload/v1764527505/WhatsApp_Image_2025-12-01_at_00.00.03_a72e5969_n8osnc.jpg" },
  ];

  return (
    <div className=" px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-700 mb-4">
          EVENTS AND CONFERENCES
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          3AcreIn elevates every occasion into an awe-inspiring, immersive experience.
        </p>

        {/* MOBILE: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 w-max px-2">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative group rounded-xl shadow-2xl overflow-hidden min-w-[300px]"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[350px] object-cover"
                />

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/90 text-[#fc8b0a] px-8 py-3 rounded-t-2xl shadow-lg border border-[#fc8b0a]/50 font-serif font-semibold text-sm">
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP: GRID layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative group rounded-xl shadow-2xl overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[350px] object-cover"
              />

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/90 text-[#fc8b0a] px-8 py-3 rounded-t-2xl shadow-lg border border-[#fc8b0a]/50 font-serif font-semibold text-sm">
                {event.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Events;
