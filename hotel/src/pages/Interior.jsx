import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import interior from '/interior.JPG'

const Interior = () => {
    return (
        <div>

            <div className="bg-[#2c1d0a] w-full px-6 sm:px-10 lg:px-16 py-12 text-white 
                            flex flex-col lg:flex-row gap-10 lg:gap-6 items-center">

                {/* LEFT CONTENT */}
                <div className="w-full lg:w-1/2">

                    {/* Interior label */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-1 bg-gray-600 rounded-xl"></div>
                        <h3 className="text-gray-400 text-lg sm:text-xl font-semibold">Interior</h3>
                    </div>

                    {/* Title */}
                    <h1
                        className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-3 leading-snug"
                        style={{ fontFamily: "Times New Roman, serif" }}
                    >
                        Designed for <br /> Comfort and Style
                    </h1>

                    <p className="mt-3 text-sm sm:text-base text-gray-300">
                        Our interiors reflect elegance, warmth, and modern luxury in every detail.
                    </p>

                    {/* Features */}
                    <div className="flex flex-col w-full mt-8 space-y-6">

                        {/* 01 */}
                        <div className="flex gap-3">
                            <h2 className="text-2xl" style={{ fontFamily: "Times New Roman, serif" }}>(01)</h2>
                            <div>
                                <h1 className="text-xl sm:text-2xl" style={{ fontFamily: "Times New Roman, serif" }}>
                                    Elegant Interior Design
                                </h1>
                                <p className="text-sm text-gray-300">
                                    Modern design with timeless details that create a warm, inviting atmosphere.
                                </p>
                            </div>
                        </div>

                        {/* 02 */}
                        <div className="flex gap-3">
                            <h2 className="text-2xl" style={{ fontFamily: "Times New Roman, serif" }}>(02)</h2>
                            <div>
                                <h1 className="text-xl sm:text-2xl" style={{ fontFamily: "Times New Roman, serif" }}>
                                    Spacious & Functional
                                </h1>
                                <p className="text-sm text-gray-300">
                                    Every room is thoughtfully designed to balance style with comfort.
                                </p>
                            </div>
                        </div>

                        {/* 03 */}
                        <div className="flex gap-3">
                            <h2 className="text-2xl" style={{ fontFamily: "Times New Roman, serif" }}>(03)</h2>
                            <div>
                                <h1 className="text-xl sm:text-2xl" style={{ fontFamily: "Times New Roman, serif" }}>
                                    Premium Materials & Finishes
                                </h1>
                                <p className="text-sm text-gray-300">
                                    From luxury linens to fine furniture, chosen for quality and elegance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={interior}
                        alt="Interior"
                        className="rounded-lg w-full object-cover"
                    />
                </div>

            </div>
        </div>
    )
}

export default Interior
