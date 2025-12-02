import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const amenitiesData = {
  "fine-dining": {
    title: "A Taste of Home — Culinary Luxury in Nature",
    description: [
        "Indulge in an extraordinary dining experience where each dish is thoughtfully prepared using the freshest, locally sourced ingredients. Our expert chefs present an artful blend of North Indian, South Indian, Chinese, and Continental cuisines, each crafted to delight your senses.",
        "Experience our signature Farm-to-Plate Chulha-style meals, available upon prior reservation, offering a truly authentic and immersive culinary journey. Alternatively, unwind at the charming Aamras Café, a serene boutique space accommodating up to 30 guests, perfect for leisurely meals and intimate gatherings.",
        "Every dining moment is enhanced by panoramic views of lush greenery, the soothing sounds of nature, and an ambiance designed to elevate both the palate and the spirit."
    ],
    images: [
        "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662387/DSC_0715-min_qd58f9.jpg",
        "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662386/DSC_0713-min_leuwas.jpg",
        "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662385/DSC_0712-min_zixesf.jpg",
        "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662380/WhatsApp_Image_2025-03-01_at_3.56.20_PM_2_jnxdh8.jpg",
        "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662380/WhatsApp_Image_2025-03-01_at_3.56.20_PM_8_trb1ap.jpg",
        "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662378/WhatsApp_Image_2025-03-01_at_3.56.20_PM_4_zkysxe.jpg",
        "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662373/WhatsApp_Image_2025-03-01_at_3.56.20_PM_12_cjbdue.jpg",
        "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662375/WhatsApp_Image_2025-03-01_at_3.56.20_PM_11_dhp0la.jpg",
        "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662376/WhatsApp_Image_2025-03-01_at_3.56.20_PM_hq01n9.jpg"
    ]
},

    "wedding-events": {
        title: "💝Celebrate Elegance in the Heart of Nature💝",
        description: [
            "At 3Acres Resort, every celebration becomes a cherished memory. Nestled amidst serene greenery and open landscapes, our resort offers a picturesque venue for weddings, family gatherings, and corporate events.",

            "Our thoughtfully designed event spaces bring together beauty, sophistication, and comfort, ensuring your special moments are celebrated with grace and grandeur.",

            "• Two Expansive Open Lawns – Perfect for grand celebrations, comfortably hosting 250–350 guests",
            "• Elegant Dining & Conference Hall – A versatile indoor space with a capacity of up to 80 guests",
            "• Spacious On-Site Parking – Secure parking area accommodating up to 75 vehicles",

            "Whether you're planning a destination wedding, a social gathering, or a corporate retreat, our dedicated team offers personalized arrangements tailored to your unique vision. Celebrate your most precious moments in a place where nature meets luxury."
        ],
        images: [
            "https://res.cloudinary.com/dynfbapnz/image/upload/v1764661832/WhatsApp_Image_2025-11-12_at_11.15.46_AM_ykyscu.jpg",
            "https://res.cloudinary.com/dynfbapnz/image/upload/v1764661797/WhatsApp_Image_2025-11-13_at_11.08.40_PM_inrvae.jpg",
            "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662021/stage_vbdy4j.jpg",
            "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662021/stage2_sozldl.jpg",
           "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662022/table_fxcuja.jpg",
           "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662022/bride1_vvhvi8.jpg",
        ]
    },


  "outdoor-activities": {
    title: "Reconnect with Nature – Adventure and Leisure for All",
    description: [
        "Immerse yourself in a rejuvenating blend of leisure, adventure, and family fun at 3Acres Resort. Our carefully curated experiences ensure that guests of all ages can enjoy every moment to the fullest:",
        "• Outdoor Adventures: Play badminton, cricket, volleyball, or enjoy scenic cycling trails that wind through our lush landscapes.",
        "• Indoor Games: Relax and engage with classic indoor games like carrom, chess, and tambola, perfect for quality family time.",
        "• Nature Experiences: Reconnect with nature through guided bird-watching sessions, serene nature walks, and tranquil spots ideal for reflection and relaxation.",
        "Set against the backdrop of pristine natural surroundings and fresh mountain air (average AQI 50), every activity is designed to refresh your mind, invigorate your body, and create lasting memories."
    ],
    images: [
       "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662737/out1_idvppe.jpg",
       "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662612/DSC_1041_lxcxn3.jpg",
       "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662730/out2_aik8pz.jpg",
       "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662729/out3_clnnuv.jpg",
       "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662754/out5_bfdiwk.jpg",
       "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662732/out4_x0mohq.jpg",
    ]
},



    "yoga": {
        title: "Yoga 'Make You Fell Fresh'",
         description: [
        "Experience inner peace and physical vitality with our guided yoga sessions, thoughtfully designed for practitioners of all levels — from beginners to advanced enthusiasts.",
        "Set amidst serene natural surroundings, each session encourages mindfulness, deep breathing, and gentle stretching to harmonize your body, mind, and spirit.",
        "Whether you're seeking relaxation, stress relief, or a holistic workout, our expert instructors ensure a personalized and refreshing yoga experience that leaves you feeling revitalized and energized."
    ],
        images: [
            "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662932/DSC_0319_fexmfd.jpg",
            "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662915/DSC_0309_dlcqu5.jpg",
            "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662897/DSC_0303_sknynn.jpg",
            "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662959/DSC_0326_k0txuv.jpg",
            "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662994/DSC_0339_mew6gj.jpg",
            "https://res.cloudinary.com/dynfbapnz/image/upload/v1764662990/DSC_0333_miweai.jpg",
        ]
    },


}

const AnimitiesDetails = () => {
    const { slug } = useParams()
    const amenity = amenitiesData[slug]

    const [openIndex, setOpenIndex] = useState(null)

    // Close modal with ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setOpenIndex(null)
        }
        window.addEventListener("keydown", handleEsc)
        return () => window.removeEventListener("keydown", handleEsc)
    }, [])

    if (!amenity)
        return <h1 className="text-center mt-24 text-xl font-semibold">Amenity Not Found</h1>

    const nextImage = () => {
        setOpenIndex((prev) =>
            prev + 1 < amenity.images.length ? prev + 1 : 0
        )
    }

    const prevImage = () => {
        setOpenIndex((prev) =>
            prev === 0 ? amenity.images.length - 1 : prev - 1
        )
    }

    return (
        <div className='mt-24 px-6 sm:px-10 lg:px-16'>

            <h1 className='text-xl sm:text-4xl font-bold text-center text-gray-700 mb-8'
                style={{ fontFamily: "Times New Roman, serif" }}>
                {amenity.title}
            </h1>
            <div
                className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-12 space-y-4 leading-7"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                {amenity.description.map((line, index) => (
                    <p key={index} className="opacity-90">
                        {line}
                    </p>
                ))}
            </div>



            {/* Image Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4'>
                {amenity.images.map((image, index) => (
                    <div
                        key={index}
                        className='overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer'
                        onClick={() => setOpenIndex(index)}
                    >
                        <img src={image} className="w-full h-60 object-cover" />
                    </div>
                ))}
            </div>

            {/* IMAGE SLIDER MODAL */}
            {openIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setOpenIndex(null)}
                >
                    <div className="relative max-w-4xl w-full px-6"
                        onClick={(e) => e.stopPropagation()}>

                        {/* Close Button */}
                        <button className="absolute top-4 right-4 text-white text-3xl"
                            onClick={() => setOpenIndex(null)}>
                            ×
                        </button>

                        <img
                            src={amenity.images[openIndex]}
                            className="w-full max-h-[80vh] object-contain rounded-lg"
                        />

                        <button
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
                            onClick={prevImage}
                        >
                            ‹
                        </button>

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
    )
}

export default AnimitiesDetails
