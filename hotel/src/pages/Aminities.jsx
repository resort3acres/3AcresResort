import React from 'react'
import AmenitiesCard from '../components/AmenitiesCard'
import dinner from '/dinner.JPG'
import wedding from '/wedding.jpeg'
import yoga from '/yoga.JPG'
import playing from '/playing.JPG'
import { useNavigate } from 'react-router-dom'

const Aminities = () => {

    const navigate = useNavigate();
    const hanldeClick = (slug) => {
        navigate(`/animitiesDetails/${slug}`);
    }

    return (
        <div className='bg-[#edeae4] w-full px-6 sm:px-10 lg:px-16 py-12 flex flex-col'>
            <div className='flex gap-2 items-center'>
                <div className='w-10 bg-gray-800 h-1 rounded-xl'></div>
                <h3 className='text-gray-600 font-semibold text-lg  sm:text-xl'>Amenities</h3>
            </div>
            <div className='flex justify-between flex-col lg:flex-row items-start lg:items-center '>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold mt-2 text-gray-600' style={{ fontFamily: "Times New Roman, serif" }}>
                    Amenities Beyond <br /> Expectations
                </h1>
                <div className='lg:w-1/3 text-base sm:text-lg mt-12 text-gray-700 font-semibold'>
                    <p>Every detail is designed to provide you with the finest luxury and comfort throughout your stay.</p>
                </div>
            </div>

            <div className='mt-8 cursor-pointer flex flex-col gap-2 sm:gap-4 lg:gap-6'>
                <AmenitiesCard amenitiesImg={wedding} amenitiesTitle="Wedding Events" amenitiesText="3Acres Resort is a charming destination for weddings, get-togethers, and corporate events." handleClick={()=>hanldeClick("wedding-events")} />
                <AmenitiesCard amenitiesImg={dinner} amenitiesTitle="Fine Dining Experience" amenitiesText="Indulge in gourmet cuisine prepared, paired with exquisite wines." handleClick={()=>hanldeClick("fine-dining")} />
                <AmenitiesCard amenitiesImg={playing} amenitiesTitle="Outdoor Activities" amenitiesText="Experience outdoor activities that bring you closer to nature while offering fun and excitement." handleClick={()=>hanldeClick("outdoor-activities")} />
                <AmenitiesCard amenitiesImg={yoga} amenitiesTitle="Yoga" amenitiesText="Find balance and relaxation with guided yoga sessions designed for all experience levels." handleClick={()=>hanldeClick("yoga")} />
            </div>
        </div>
    )
}

export default Aminities