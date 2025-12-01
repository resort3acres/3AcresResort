import React, { useState } from 'react'

// Accept 'onClose' prop to allow the form to close itself
const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkin: '',
    checkout: '',
    guests: '1',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://sheetdb.io/api/v1/d2dhl0g5hbgmb"

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            checkin: formData.checkin,
            checkout: formData.checkout,
            guests: formData.guests,
          }
        }),
      });

      const result = await response.json();
      console.log("SheetDB Response:", result);
      alert("Thank you for your enquiry! We will get back to you soon.");

      onClose();
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Something went wrong! Please try again.");
    }

  };

  return (
    // Compact wrapper for dialog box
    <div className="w-full max-w-2xl mx-auto  bg-[#e7dfd8] rounded-2xl shadow-2xl overflow-hidden border border-white/10">

      {/* Header with close button */}
      <div className="flex justify-between items-center p-6 bg-[#2c1d0a]">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">
            Resort Enquiry
          </h1>
          <p className="text-sm text-white/90">
            Fill out the form below to plan your dream vacation
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all duration-200"
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Form Container */}
      <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#fc8b0a] focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-700 bg-white/5 backdrop-blur-sm"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#fc8b0a] focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-700 bg-white/5 backdrop-blur-sm"
                placeholder="+91 000 0000 000"
              />
            </div>

            {/* Email - Full width on mobile, spans 2 cols on desktop */}
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#fc8b0a] focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-700 bg-white/5 backdrop-blur-sm"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Stay Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Check-in Date */}
            <div>
              <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-2">
                Check-in Date *
              </label>
              <input
                type="date"
                id="checkin"
                name="checkin"
                required
                value={formData.checkin}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#fc8b0a] focus:border-transparent transition-all duration-200 text-gray-800 bg-white/70"
              />
            </div>

            {/* Check-out Date */}
            <div>
              <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-2">
                Check-out Date *
              </label>
              <input
                type="date"
                id="checkout"
                name="checkout"
                required
                value={formData.checkout}
                onChange={handleChange}
                min={formData.checkin || new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#fc8b0a] focus:border-transparent transition-all duration-200 text-gray-800 bg-white"
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                Guests *
              </label>
              <select
                name="guests"
                id="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#fc8b0a] focus:border-transparent transition-all duration-200 text-gray-800 bg-white"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num} className="text-gray-800">
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}


          {/* Quick Contact Info */}
          <div className="  rounded-lg p-4">
            <p className=" text-sm text-center mb-2 text-gray-700">
              Need immediate assistance?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm">
              <span className="flex items-center gap-1">
                📞 +91 8923596448
              </span>
              <span className="flex items-center gap-1">
                ✉️ 3acresresort@gmail.com
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#2c1d0a] from-[#fc8b0a] to-[#e07a05] hover:from-[#e07a05] hover:to-[#d06900] text-white py-3 px-6 rounded-lg font-semibold text-lg border border-white/20 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Submit Enquiry
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-center text-xs text-gray-700 mt-2">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;