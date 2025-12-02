import React, { useState, useEffect } from 'react'
import ReviewCard from '../components/ReviewCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ReviewPage = () => {
const [currentIndex, setCurrentIndex] = useState(0)
const [itemsPerPage, setItemsPerPage] = useState(3)

const customerReviews = [
    { 
        name: "Dr. Himanshu Aeran", 
        description: "I have always chosen 3 Acres Resort to celebrate my family's special occasions. The resort consistently delivers exceptional hospitality, with a team that is attentive and genuinely caring. Their food is consistently of the highest quality, making every event memorable and enjoyable.",
        img:"https://res.cloudinary.com/dynfbapnz/image/upload/v1764662994/DSC_0339_mew6gj.jpg" 
    },
        { 
        name: "Dr. Himanshu Aeran", 
        description: "I have always chosen 3 Acres Resort to celebrate my family's special occasions. The resort consistently delivers exceptional hospitality, with a team that is attentive and genuinely caring. Their food is consistently of the highest quality, making every event memorable and enjoyable.",
        img:"https://res.cloudinary.com/dynfbapnz/image/upload/v1764662994/DSC_0339_mew6gj.jpg" 
    },
        { 
        name: "Dr. Himanshu Aeran", 
        description: "I have always chosen 3 Acres Resort to celebrate my family's special occasions. The resort consistently delivers exceptional hospitality, with a team that is attentive and genuinely caring. Their food is consistently of the highest quality, making every event memorable and enjoyable.",
        img:"https://res.cloudinary.com/dynfbapnz/image/upload/v1764662994/DSC_0339_mew6gj.jpg" 
    },
]

// Update itemsPerPage based on screen width
useEffect(() => {
    const handleResize = () => {
        setItemsPerPage(window.innerWidth < 768 ? 1 : 3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
}, [])

const totalPages = Math.ceil(customerReviews.length / itemsPerPage)
const currentPage = Math.floor(currentIndex / itemsPerPage) + 1

const handleNext = () => {
    const maxIndex = customerReviews.length - itemsPerPage
    setCurrentIndex(prev => (prev + itemsPerPage > maxIndex ? 0 : prev + itemsPerPage))
}

const handlePrev = () => {
    const maxIndex = customerReviews.length - itemsPerPage
    setCurrentIndex(prev => (prev - itemsPerPage < 0 ? maxIndex : prev - itemsPerPage))
}

const visibleReviews = customerReviews.slice(currentIndex, currentIndex + itemsPerPage)

return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-700 ">What Our Customers Say</h1>

        <div className="relative">
            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 p-2 rounded-full bg-white shadow-md border border-gray-200 hover:shadow-lg transition-all"
                aria-label="Previous reviews"
            >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 p-2 rounded-full bg-white shadow-md border border-gray-200 hover:shadow-lg transition-all"
                aria-label="Next reviews"
            >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </button>

            {/* Reviews Grid */}
            <div className={`grid grid-cols-1 gap-4 md:grid-cols-${itemsPerPage} md:gap-6`}>
                {visibleReviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        img={review.img}
                        name={review.name}
                        description={review.description}
                    />
                ))}
            </div>

            {/* Page Indicator */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <span className="text-sm text-gray-600">
                    {currentPage} / {totalPages}
                </span>
            </div>
        </div>
    </div>
)

}


export default ReviewPage