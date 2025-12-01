import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const AmenitiesCard = ({ amenitiesImg, amenitiesText, amenitiesTitle, handleClick }) => {
  return (
    <div
      className="w-full hover:bg-[#f5f4eb] shadow-xl rounded-xl transition-all duration-300 ease-in-out p-4"
      onClick={handleClick}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

        {/* LEFT: IMAGE + TEXT */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">

          {/* IMAGE */}
          <img
            src={amenitiesImg}
            alt=""
            className="
              w-full h-48 object-cover rounded-xl

              md:w-40 md:h-40
              lg:w-48 lg:h-48
            "
          />

          {/* TEXT */}
          <div className="flex flex-col">
            <h1
              className="font-semibold text-2xl md:text-3xl text-gray-700"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              {amenitiesTitle}
            </h1>

            <p className="text-md text-gray-600 mt-1">{amenitiesText}</p>
          </div>
        </div>

        {/* RIGHT: BUTTON */}
        <button className="self-end md:self-center">
          <IoArrowForwardCircleOutline size={40} />
        </button>
      </div>
    </div>
  );
};

export default AmenitiesCard;
