import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingModel from "./BookingModel";

import spacelogo from "/arealogo.png";
import bedlogo from "/bedlogo.png";
import extralogo from "/bathroomlogo.png";

const RoomMiniDetails = ({
  keyName,
  img,
  roomType,
  space,
  bed,
  GardenView,
  extra,
  breakfast,
  lunch,
  dinner,
  li1,
  li2,
  li3,
  li4,
  li5,
  li6,
}) => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <div
      className="w-full border rounded-2xl shadow-md bg-white 
                 p-3 sm:p-4 md:p-6 
                 flex flex-row gap-3 sm:gap-4 md:gap-6"
    >
      {/* LEFT SECTION */}
      <div className="w-1/3 flex flex-col gap-2 sm:gap-3">

        {/* ROOM IMAGE (CLS + IMAGE DELIVERY FIXED) */}
        <Link to={`/rooms/details/${keyName}`}>
          <div
            className="w-full h-32 sm:h-44 md:h-60 overflow-hidden rounded-lg"
            style={{ aspectRatio: "16 / 10" }}
          >
            <img
              src={img}
              alt={roomType}
              width="800"
              height="500"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* ROOM TITLE */}
          <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-900 mt-2">
            {roomType}
          </h2>
        </Link>

        {/* KEY FEATURES */}
        <ul className="flex flex-wrap gap-1 sm:gap-3 text-gray-700 mt-1 sm:mt-2 text-xs sm:text-sm">
          <li className="flex items-center gap-1 sm:gap-2">
            <img
              src={spacelogo}
              alt="Room size"
              width="20"
              height="20"
              loading="lazy"
              className="w-3 h-3 sm:w-5 sm:h-5"
            />
            {space}
          </li>

          {GardenView && (
            <li className="flex items-center gap-1 sm:gap-2">
              <img
                src={spacelogo}
                alt="Garden view"
                width="20"
                height="20"
                loading="lazy"
                className="w-3 h-3 sm:w-5 sm:h-5"
              />
              {GardenView}
            </li>
          )}

          <li className="flex items-center gap-1 sm:gap-2">
            <img
              src={bedlogo}
              alt="Bed type"
              width="20"
              height="20"
              loading="lazy"
              className="w-3 h-3 sm:w-5 sm:h-5"
            />
            {bed}
          </li>

          <li className="flex items-center gap-1 sm:gap-2">
            <img
              src={extralogo}
              alt="Bathroom"
              width="20"
              height="20"
              loading="lazy"
              className="w-3 h-3 sm:w-5 sm:h-5"
            />
            {extra}
          </li>
        </ul>

        {/* AMENITIES */}
        <div className="mt-1 sm:mt-2">
          <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-base">
            Amenities
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-gray-600 text-xs sm:text-sm">
            <li>✔ {li1}</li>
            <li>✔ {li2}</li>
            <li>✔ {li3}</li>
            <li>✔ {li4}</li>
            <li>✔ {li5}</li>
            <li>✔ {li6}</li>
          </ul>
        </div>

        <Link
          to={`/rooms/details/${keyName}`}
          className="text-[#fc8b0a] font-semibold mt-1 sm:mt-3 text-xs sm:text-base hover:underline"
        >
          View More Details →
        </Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-2/3 flex flex-col gap-4 sm:gap-6">

        {/* MEAL OPTIONS */}
        <div className="border rounded-xl bg-gray-50 p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Available Meal Options
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {breakfast && (
              <MealCard title="Breakfast" emoji="🍳" value={breakfast} />
            )}
            {lunch && (
              <MealCard title="Lunch" emoji="🍽️" value={lunch} />
            )}
            {dinner && (
              <MealCard title="Dinner" emoji="🍛" value={dinner} />
            )}
          </div>

          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-center text-sm text-yellow-800">
            We provide custom meal plans to suit your dietary needs.
          </div>
        </div>

        {/* BOOK BUTTON */}
        <div className="border rounded-xl bg-gray-50 p-6 text-center">
          <button
            onClick={() => setIsModelOpen(true)}
            className="bg-[#fc8b0a] text-white py-4 px-12 rounded-lg text-xl font-semibold hover:bg-[#e07a05] transition-colors w-full max-w-md mx-auto"
          >
            Book Now
          </button>
          <p className="text-gray-600 text-sm mt-3">
            Contact us for room rates and meal package details
          </p>
        </div>
      </div>

      <BookingModel isOpen={isModelOpen} onClose={() => setIsModelOpen(false)} />
    </div>
  );
};

/* SMALL HELPER COMPONENT (PERFORMANCE FRIENDLY) */
const MealCard = ({ title, emoji, value }) => (
  <div className="bg-white p-4 rounded-lg border text-center">
    <div className="text-2xl mb-2">{emoji}</div>
    <h4 className="font-semibold text-gray-800">{title}</h4>
    <p className="text-gray-600 text-sm mt-1">{value}</p>
    <p className="text-green-600 text-sm mt-2">Available</p>
  </div>
);

export default RoomMiniDetails;
