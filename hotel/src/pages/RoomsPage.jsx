import React from 'react'
import roomPage from '/roomsPage.webp'
import RoomMiniDetails from '../components/RoomMiniDetails'


const RoomsPage = () => {

    const roomDetails = [
        {
            keyName: "flamingo",
            roomType: "Flamingo Room",
            img: "/FLAMINGO.JPG",
            space: "143 sq.ft(13 sq.mt)",
            bed: "1 King Bed",
            li1: "Iron/Ironing Board",
            li2: "Bathroom",
            li3: "Air Conditioning",
            li4: "Mineral Water",
            li5: "Closet",
            li6: "Telephone",
            extra: "Private Bathroom",
            // price1: "5000",
            // price2: "7000",
            // price3: "9500",
            // price4: "12000"
        },
        {
            keyName: "quail",
            roomType: "Quail",
            img: "/quail1.JPG",
            space: "148 sq.ft (14 sq.mt)",
            bed: "1 King Bed",
            li1: "Heater - Additional charges",
            li2: "Housekeeping",
            li3: "Bathroom",
            li4: "Free Wi-Fi",
            li5: "Room Service",
            li6: "Mineral Water",
            extra: "Private Bathroom",
            // price1: "5000",
            // price2: "7000",
            // price3: "9500",
            // price4: "12000"
        },
        {
            keyName: "emu",
            roomType: "Emu",
            img: "/EMU.JPG",
            space: "168 sq.ft (16 sq.mt)",
            bed: "1 King Bed",
            li1: "Bathroom",
            li2: "Mineral Water",
            li3: "Air Conditioning",
            li4: "Telephone",
            li5: "Kettle",
            li6: "TV",
            extra: "Private Bathroom",
            // price1: "5000",
            // price2: "7000",
            // price3: "9500",
            // price4: "12000"
        },
        {
            keyName: "skylark",
            roomType: "Skylark (Twin Room)",
            img: "/skylark1.JPG",
            space: "180 sq.ft (17 sq.mt)",
            GardenView: "Garden View",
            bed: "1 King Bed",
            li1: "Iron/Ironing Board",
            li2: "Bathroom",
            li3: "Mineral Water",
            li4: "Air Conditioning",
            li5: "Closet",
            li6: "Telephone",
            extra: "Private Bathroom",
            // price1: "10,000",
            // price2: "13,500",
            // price3: "17,100",
            // price4: "20,500"
        },
        {
            keyName: "monal",
            roomType: "Monal (Twin Room)",
            img: "/monal1.JPG",
            space: "120 sq.ft (11 sq.mt)",
            GardenView: "Garden View",
            bed: "1 King Bed(s)",
            li1: "Iron/Ironing Board",
            li2: "Bathroom",
            li3: "Mineral Water - additional charge",
            li4: "Air Conditioning",
            li5: "Closet",
            li6: "Telephone",
            extra: "Private Bathroom",
            // price1: "10,000",
            // price2: "13,500",
            // price3: "17,100",
            // price4: "20,500"
        },
        {
            keyName: "dove",
            roomType: "Dove",
            img: "/dove.jpg",
            space: "384 sq.ft (36 sq.mt)",
            GardenView: "Garden View",
            bed: "1 King Bed(s)",
            li1: "Iron/Ironing Board",
            li2: "Bathroom",
            li3: "Mineral Water - additional charge",
            li4: "Air Conditioning",
            li5: "Closet",
            li6: "Chair",
            extra: "Private Bathroom",
            // price1: "10,000",
            // price2: "13,500",
            // price3: "17,100",
            // price4: "20,500"
        }

    ]

   
    return (
        <div className='flex flex-col w-full justify-center'>
            <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">

                <img
                    src={roomPage}
                    alt="Rooms Page"
                    className="w-full h-full object-cover"
                />

                <div className="absolute bottom-10 left-6 sm:left-10 text-white max-w-lg">
                    <h1
                        className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold mb-4"
                        style={{ textShadow: "2px 2px 10px rgba(0,0,0,1)" }}
                    >
                        Experience Timeless <br /> Luxury & Comfort
                    </h1>
                </div>

            </div>


            <div className='flex flex-col items-center mt-14'>
                <h1
                    className='text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-medium'
                    style={{ fontFamily: 'Times New Roman, serif' }}
                >
                    Plan Your Stay
                </h1>
                <p className='text-gray-600 mt-2'>
                    Discover the perfect balance of luxury and comfort with our modern hotel and resort.
                </p>
            </div>

            <div className='flex flex-wrap flex-col max-w-full sm:w-1/2 lg:w-3/4 mx-auto gap-8 mt-10 px-4 mb-20'>
                {roomDetails.map((room, index) => (
                    <RoomMiniDetails
                        key={index}
                        keyName={room.keyName}
                        img={room.img}
                        roomType={room.roomType}
                        space={room.space}
                        bed={room.bed}
                        GardenView={room.GardenView}
                        li1={room.li1}
                        li2={room.li2}
                        li3={room.li3}
                        li4={room.li4}
                        li5={room.li5}
                        li6={room.li6}
                        extra={room.extra}
                        // price1={room.price1}
                        // price2={room.price2}
                        // price3={room.price3}
                        // price4={room.price4}
                    />
                ))}
            </div>
        </div>
    );

}

export default RoomsPage