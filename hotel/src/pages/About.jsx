import React from 'react';
import aboutImage from '/outside.avif';
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-[#e7dfd8] text-black px-6 
      flex flex-col-reverse md:flex-row items-center justify-center gap-6">

      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6 animate-fadeIn pl-8">
        <div className='flex items-center gap-2 mb-4'>
          <div className='w-14 bg-[#fc8b0a] h-1  rounded-xl '></div>
          <h2 className="text-3xl md:text-3xl font-bold  text-gray-600">
            About <span className="text-[#fc8b0a]">3Acres Resort</span>
          </h2>
        </div>
        <div >
          <h1
            className="text-gray-600 text-3xl sm:text-4xl md:text-5xl font-semibold mb-4"
            style={{
              fontFamily: "Times New Roman, serif"
            }}
          >
            Experience Timeless <br /> Luxury & Comfort
          </h1>

        </div>
        {/* <p className="text-lg leading-relaxed text-gray-600">
          Welcome to <span className="text-[#fc8b0a] font-semibold">3Acres</span>, where luxury meets serenity.
          Our mission is to offer an unforgettable stay with modern amenities, royal hospitality,
          and personalized comfort. Nestled amidst nature, our property provides a perfect blend
          of elegance and peace for travelers seeking a refined experience.
        </p> */}

        <p className="text-lg leading-relaxed text-gray-600">
          Welcome to  <span className="text-[#fc8b0a] font-semibold">3Acres Resort – A Hidden Gem in Dehradun</span> <br />
          Tucked away in the serene landscapes of Upper Kandoli, Dehradun, 3Acres Resort is a peaceful jungle retreat where nature meets comfort. Whether you're here for a quiet getaway, a family vacation, or a special celebration, our resort offers the perfect blend of rustic charm and modern luxury. <br />
          Reconnect with nature, relax in thoughtfully designed spaces, and create unforgettable memories at one of Dehradun's most loved offbeat destinations.

        </p>
        {/* <p className="text-lg leading-relaxed text-black">
          From contemporary rooms to exquisite dining and world-class facilities, every corner
          of 3AcreIn reflects sophistication and warmth. Whether you’re here for leisure or business,
          we ensure your stay is both memorable and delightful.
        </p> */}
        {/* <button
          className="mt-4 px-6 py-2 border border-black text-gray-600 font-semibold rounded-3xl shadow-lg 
             flex items-center gap-1 transition-all duration-300 cursor-pointer "
        >
          More About <IoIosArrowRoundForward size={32} />
        </button> */}

        <div className='flex w-full gap-8 text-gray-600' style={{ fontFamily: "Times New Roman, serif" }}>
          <div className='space-y-2 flex flex-col items-center'>
            <h1 className='text-5xl'>100%</h1>
            <p className='text-[11px]'>NATURAL SURROUNDINGS</p>
          </div>
          <div className='space-y-2 flex flex-col items-start' >
            <h1 className='text-5xl'>15MIN</h1>
            <p className='text-[11px]'>NEAREST CITY</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 h-[400px] mt-12 animate-fadeIn delay-200">
        <img
          src="https://res.cloudinary.com/dwvf9a857/image/upload/v1763534866/outside_ewtdir.avif"
          alt="About 3AcreIn"
          className="rounded-2xl shadow-2xl w-full max-w-lg h-full mx-auto hover:scale-105 transition-transform duration-500 object-cover"
        />
      </div>
    </section>
  );
};

export default About;
