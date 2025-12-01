import React from 'react'

const ReviewCard = ({ name, description, role }) => {
    return (
        <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Quote icon */}
            <div className="mb-6 text-blue-100">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4z" />
                </svg>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{description}"
            </p>

            {/* Separator and Name */}
            <div className="flex items-center">
                <div className="w-12 h-1 bg-blue-500 rounded-full mr-4"></div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                    {role && (
                        <p className="text-gray-600 text-sm mt-1">{role}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReviewCard