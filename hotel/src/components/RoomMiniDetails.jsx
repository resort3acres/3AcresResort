// import React from 'react'
// import spacelogo from '/arealogo.png'
// import bedlogo from '/bedlogo.png'
// import extralogo from '/bathroomlogo.png'
// import { Link } from 'react-router-dom'

// const RoomMiniDetails = ({ keyName,
//     img, roomType, space, bed, GardenView,
//     extra, price1, breakfast, price2, lunch,
//     price3, price4, li1, li2, li3, li4, li5, li6
// }) => {

//     // DATE FORMAT
//     const date = new Date();
//     const cancellationDate = new Date(date);
//     cancellationDate.setDate(cancellationDate.getDate() + 1);

//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     const formattedDate = cancellationDate.toLocaleDateString(undefined, options);

//     return (
//         <div className="w-full border rounded-2xl shadow-md bg-white 
//                         p-3 sm:p-4 md:p-6 
//                         flex flex-row gap-3 sm:gap-4 md:gap-6">

//             {/* LEFT SECTION */}
//             <div className="w-1/3 flex flex-col gap-2 sm:gap-3">

//                 {/* Room Image */}
//                 <div className="w-full 
//                                 h-32 sm:h-44 md:h-60 
//                                 overflow-hidden rounded-lg">
//                     <img
//                         src={img}
//                         alt={roomType}
//                         className="w-full h-full object-cover hover:scale-110 transition duration-500"
//                     />
//                 </div>

//                 {/* Room Title */}
//                 <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-900">
//                     {roomType}
//                 </h2>

//                 {/* Key Features */}
//                 <ul className="flex flex-wrap gap-1 sm:gap-3 text-gray-700 mt-1 sm:mt-2 text-xs sm:text-sm">
//                     <li className="flex items-center gap-1 sm:gap-2">
//                         <img src={spacelogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {space}
//                     </li>

//                     {GardenView && (
//                         <li className="flex items-center gap-1 sm:gap-2">
//                             <img src={spacelogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {GardenView}
//                         </li>
//                     )}

//                     <li className="flex items-center gap-1 sm:gap-2">
//                         <img src={bedlogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {bed}
//                     </li>

//                     <li className="flex items-center gap-1 sm:gap-2">
//                         <img src={extralogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {extra}
//                     </li>
//                 </ul>

//                 {/* Amenities */}
//                 <div className="mt-1 sm:mt-2">
//                     <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-xs sm:text-base">
//                         Amenities
//                     </h3>
//                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-gray-600 text-xs sm:text-sm">
//                         <li>✔ {li1}</li>
//                         <li>✔ {li2}</li>
//                         <li>✔ {li3}</li>
//                         <li>✔ {li4}</li>
//                         <li>✔ {li5}</li>
//                         <li>✔ {li6}</li>
//                     </ul>
//                 </div>

//                 <Link
//                     to={`/rooms/details/${keyName}`}
//                     className="text-[#fc8b0a] font-semibold mt-1 sm:mt-3 text-xs sm:text-base hover:underline"
//                 >
//                     View More Details →
//                 </Link>
//             </div>

//             {/* RIGHT SECTION */}
//             <div className="w-2/3 grid grid-cols-1 gap-2 sm:gap-4">

//                 {/* PLAN BOX STYLE */}
//                 {[
//                     {
//                         title: "Room Available with Free Cancellation",
//                         breakfast: null,
//                         lunch: null
//                     },
//                     {
//                         title: "Free Cancellation | Breakfast Only",
//                         breakfast: breakfast,
//                         lunch: null
//                     },
//                     {
//                         title: "Free Cancellation | Breakfast + Lunch/Dinner",
//                         breakfast: breakfast,
//                         lunch: lunch
//                     },
//                     {
//                         title: "Free Cancellation | Breakfast + Lunch + Dinner",
//                         breakfast: breakfast,
//                         lunch: lunch
//                     }
//                 ].map((plan, i) => (
//                     <div key={i}
//                         className="flex justify-between gap-2 sm:gap-4 
//                                    border rounded-xl bg-gray-50 
//                                    p-2 sm:p-4">

//                         {/* LEFT SIDE */}
//                         <div className="flex flex-col gap-1 sm:gap-2 w-2/3 text-xs sm:text-sm md:text-base">
//                             <h1 className="text-gray-700 font-medium text-sm sm:text-lg">
//                                 {plan.title}
//                             </h1>

//                             {plan.breakfast && (
//                                 <p>🍳 {plan.breakfast} Breakfast included</p>
//                             )}

//                             {plan.lunch && (
//                                 <p>🍽️ {plan.lunch} Lunch or Dinner included</p>
//                             )}

//                             <p className="text-green-700">
//                                 ✔ Free Cancellation before {formattedDate}
//                             </p>
//                         </div>

//                         {/* RIGHT SIDE */}
//                         <div className="flex flex-col items-center w-1/3">
//                             <button className="w-full bg-[#fc8b0a] text-white 
//                                                py-2 sm:py-3 rounded-lg sm:rounded-xl 
//                                                text-xs sm:text-lg font-semibold hover:bg-[#e07a05]">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 ))}

//             </div>
//         </div>
//     );
// }

// export default RoomMiniDetails






import React, { useState } from 'react'
import spacelogo from '/arealogo.png'
import bedlogo from '/bedlogo.png'
import extralogo from '/bathroomlogo.png'
import { Link } from 'react-router-dom'
import BookingModel from './BookingModel'

const RoomMiniDetails = ({ keyName,
    img, roomType, space, bed, GardenView,
    extra, breakfast, lunch, dinner,
    li1, li2, li3, li4, li5, li6
}) => {


    const [isModelOpen, setIsModelOpen] = useState(false);

    const openModel =()=> setIsModelOpen(true);
    const closeModel =()=> setIsModelOpen(false);
    return (
        <div className="w-full border rounded-2xl shadow-md bg-white 
                        p-3 sm:p-4 md:p-6 
                        flex flex-row gap-3 sm:gap-4 md:gap-6">

            {/* LEFT SECTION */}
            <div className="w-1/3 flex flex-col gap-2 sm:gap-3">

                {/* Room Image */}
                <div className="w-full 
                                h-32 sm:h-44 md:h-60 
                                overflow-hidden rounded-lg">
                    <img
                        src={img}
                        alt={roomType}
                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                </div>

                {/* Room Title */}
                <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-900">
                    {roomType}
                </h2>

                {/* Key Features */}
                <ul className="flex flex-wrap gap-1 sm:gap-3 text-gray-700 mt-1 sm:mt-2 text-xs sm:text-sm">
                    <li className="flex items-center gap-1 sm:gap-2">
                        <img src={spacelogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {space}
                    </li>

                    {GardenView && (
                        <li className="flex items-center gap-1 sm:gap-2">
                            <img src={spacelogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {GardenView}
                        </li>
                    )}

                    <li className="flex items-center gap-1 sm:gap-2">
                        <img src={bedlogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {bed}
                    </li>

                    <li className="flex items-center gap-1 sm:gap-2">
                        <img src={extralogo} className="w-3 h-3 sm:w-5 sm:h-5" /> {extra}
                    </li>
                </ul>

                {/* Amenities */}
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

                {/* Meal Information */}
                <div className="border rounded-xl bg-gray-50 p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Meal Options</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Breakfast */}
                        {breakfast && (
                            <div className="bg-white p-4 rounded-lg border text-center">
                                <div className="text-2xl mb-2">🍳</div>
                                <h4 className="font-semibold text-gray-800">Breakfast</h4>
                                <p className="text-gray-600 text-sm mt-1">{breakfast}</p>
                                <p className="text-green-600 text-sm mt-2">Available</p>
                            </div>
                        )}

                        {/* Lunch */}
                        {lunch && (
                            <div className="bg-white p-4 rounded-lg border text-center">
                                <div className="text-2xl mb-2">🍽️</div>
                                <h4 className="font-semibold text-gray-800">Lunch</h4>
                                <p className="text-gray-600 text-sm mt-1">{lunch}</p>
                                <p className="text-green-600 text-sm mt-2">Available</p>
                            </div>
                        )}

                        {/* Dinner */}
                        {dinner && (
                            <div className="bg-white p-4 rounded-lg border text-center">
                                <div className="text-2xl mb-2">🍛</div>
                                <h4 className="font-semibold text-gray-800">Dinner</h4>
                                <p className="text-gray-600 text-sm mt-1">{dinner}</p>
                                <p className="text-green-600 text-sm mt-2">Available</p>
                            </div>
                        )}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-yellow-800 text-sm text-center">
                            We Provide Custom Meal Plans to Suit Your Dietary Needs!
                        </p>
                        <ul>
                            <li>✔ BreakFast</li>
                            <li>✔ Lunch</li>
                            <li>✔ Dinner</li>
                        </ul>
                    </div>
                </div>

                {/* Single Book Button */}
                <div className="border rounded-xl bg-gray-50 p-6 text-center">
                    <button className="bg-[#fc8b0a] text-white py-4 px-12 rounded-lg text-xl font-semibold hover:bg-[#e07a05] transition-colors w-full max-w-md mx-auto"
                        onClick={openModel}>
                        Book Now
                    </button>
                    <p className="text-gray-600 text-sm mt-3">
                        Contact us for room rates and meal package details
                    </p>
                </div>

            </div>
            <BookingModel isOpen={isModelOpen} onClose={closeModel} />
        </div>
    );
}

export default RoomMiniDetails