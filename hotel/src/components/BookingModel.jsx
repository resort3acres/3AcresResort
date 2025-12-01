import React from 'react'
import BookingForm from '../pages/BookingForm';

const BookingModel = ({ isOpen, onClose }) => {
    if (!isOpen) return null
    
    const handleContentClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-all duration-300'
            onClick={onClose}>
            
            {/* Backdrop with blur effect */}
            <div className='fixed inset-0 backdrop-blur-sm' />
            
            {/* Modal Container */}
            <div className='relative w-full max-w-2xl transform transition-all duration-300 scale-100'
                onClick={handleContentClick}
            >
                <BookingForm onClose={onClose} />
            </div>
        </div>
    )
}

export default BookingModel