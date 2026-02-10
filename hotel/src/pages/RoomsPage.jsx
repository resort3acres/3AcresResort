import React, { useEffect } from "react";
import RoomMiniDetails from "../components/RoomMiniDetails";

const RoomsPage = () => {

  const roomDetails = [
    {
      keyName: "flamingo",
      roomType: "Flamingo Room",
      img: "https://res.cloudinary.com/dynfbapnz/image/upload/f_auto,q_auto,w_800/FLAMINGO1_ylxaqx",
      space: "143 sq.ft (13 sq.mt)",
      bed: "1 King Bed",
      li1: "Iron / Ironing Board",
      li2: "Bathroom",
      li3: "Air Conditioning",
      li4: "Mineral Water",
      li5: "Closet",
      li6: "Telephone",
      extra: "Private Bathroom",
    },
    {
      keyName: "quail",
      roomType: "Quail",
      img: "https://res.cloudinary.com/dynfbapnz/image/upload/f_auto,q_auto,w_800/quail1_hcinmn",
      space: "148 sq.ft (14 sq.mt)",
      bed: "1 King Bed",
      li1: "Heater (additional charges)",
      li2: "Housekeeping",
      li3: "Bathroom",
      li4: "Free Wi-Fi",
      li5: "Room Service",
      li6: "Mineral Water",
      extra: "Private Bathroom",
    },
    {
      keyName: "emu",
      roomType: "Emu",
      img: "https://res.cloudinary.com/dynfbapnz/image/upload/f_auto,q_auto,w_800/EMU2_wnct2i",
      space: "168 sq.ft (16 sq.mt)",
      bed: "1 King Bed",
      li1: "Bathroom",
      li2: "Mineral Water",
      li3: "Air Conditioning",
      li4: "Telephone",
      li5: "Kettle",
      li6: "TV",
      extra: "Private Bathroom",
    },
    {
      keyName: "skylark",
      roomType: "Skylark (Twin Room)",
      img: "https://res.cloudinary.com/dynfbapnz/image/upload/f_auto,q_auto,w_800/skylark3_y4mly5",
      space: "180 sq.ft (17 sq.mt)",
      bed: "1 King Bed",
      li1: "Iron / Ironing Board",
      li2: "Bathroom",
      li3: "Mineral Water",
      li4: "Air Conditioning",
      li5: "Closet",
      li6: "Telephone",
      extra: "Private Bathroom",
    },
    {
      keyName: "monal",
      roomType: "Monal (Twin Room)",
      img: "https://res.cloudinary.com/dynfbapnz/image/upload/f_auto,q_auto,w_800/monal_vc0fxt",
      space: "120 sq.ft (11 sq.mt)",
      bed: "1 King Bed",
      li1: "Iron / Ironing Board",
      li2: "Bathroom",
      li3: "Mineral Water (extra)",
      li4: "Air Conditioning",
      li5: "Closet",
      li6: "Telephone",
      extra: "Private Bathroom",
    },
    {
      keyName: "kingfisher",
      roomType: "Kingfisher",
      img: "https://res.cloudinary.com/dynfbapnz/image/upload/f_auto,q_auto,w_800/DSC_0159_ibzdfm",
      space: "120 sq.ft (11 sq.mt)",
      bed: "1 King Bed",
      li1: "Iron / Ironing Board",
      li2: "Bathroom",
      li3: "Mineral Water (extra)",
      li4: "Air Conditioning",
      li5: "Closet",
      li6: "Telephone",
      extra: "Private Bathroom",
    },
    {
      keyName: "dove",
      roomType: "Dove",
      img: "https://res.cloudinary.com/dynfbapnz/image/upload/f_auto,q_auto,w_800/DOVE1_muqc6u",
      space: "384 sq.ft (36 sq.mt)",
      bed: "1 King Bed",
      li1: "Iron / Ironing Board",
      li2: "Bathroom",
      li3: "Mineral Water (extra)",
      li4: "Air Conditioning",
      li5: "Closet",
      li6: "Chair",
      extra: "Private Bathroom",
    },
  ];

  // SEO
  useEffect(() => {
    document.title = "Rooms & Suites | 3 Acres Resort";

    const description =
      "Explore luxury rooms and suites at 3 Acres Resort. Perfect for families, couples, and peaceful retreats with modern amenities.";

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, []);

  return (
    <div className="flex flex-col w-full">

      {/* HERO SECTION (LCP FIXED) */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
        <img
          src="https://res.cloudinary.com/dynfbapnz/image/upload/f_auto,q_auto,w_1600/dovenew_1_gm4tzv"
          alt="Luxury rooms at 3 Acres Resort"
          width="1600"
          height="900"
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-10 left-6 sm:left-10 text-white max-w-lg">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl font-semibold"
            style={{ textShadow: "2px 2px 10px rgba(0,0,0,1)" }}
          >
            Experience Timeless <br /> Luxury & Comfort
          </h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="flex flex-col items-center mt-14">
        <h2 className="text-3xl md:text-4xl font-medium font-serif">
          Plan Your Stay
        </h2>
        <p className="text-gray-600 mt-2 text-center max-w-xl">
          Discover the perfect balance of luxury and comfort with our modern
          resort.
        </p>
      </div>

      {/* ROOMS LIST */}
      <div className="flex flex-col max-w-5xl mx-auto gap-10 mt-14 px-4 mb-20">
        {roomDetails.map((room) => (
          <RoomMiniDetails key={room.keyName} {...room} />
        ))}
      </div>

    </div>
  );
};

export default RoomsPage;
