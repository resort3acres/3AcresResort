import React, { useState } from 'react';

const EnquireForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkin: '',
    checkout: '',
    guests: '1',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Resort Enquiry
          </h1>
          <p className="text-lg text-white max-w-md mx-auto">
            Ready for your perfect getaway? Fill out the form below and we'll help you plan your dream vacation.
          </p>
        </div>

        {/* Form Container with Glass Effect */}
        <div className=" backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white border-opacity-20">
          <div className="  p-6">
            <h2 className="text-2xl font-semibold text-white text-center">
              Plan Your Stay
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="space-y-4">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-white border-opacity-30 pb-2">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-white placeholder-white placeholder-opacity-70"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-white placeholder-white placeholder-opacity-70"
                      placeholder="+91 000 0000 000"
                    />
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-white placeholder-white placeholder-opacity-70"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Stay Details */}
              <div>
                {/* <h3 className="text-lg font-semibold text-white mb-4 border-b border-white border-opacity-30 pb-2">
                  Stay Details
                </h3> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Check-in Date */}
                  <div>
                    <label htmlFor="checkin" className="block text-sm font-medium text-white mb-2">
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
                      className="w-full px-4 py-3 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-white"
                    />
                  </div>

                  {/* Check-out Date */}
                  <div>
                    <label htmlFor="checkout" className="block text-sm font-medium text-white mb-2">
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
                      className="w-full px-4 py-3 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-white"
                    />
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-white mb-2">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      id="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3  border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-white"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num} className="text-gray-800">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full text-white py-4 px-6 rounded-lg font-semibold text-lg border border-white border-opacity-30 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Submit Enquiry
                </button>
              </div>

              {/* Privacy Note */}
              <p className="text-center text-sm text-white text-opacity-80 mt-4">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center text-white font-extrabold text-lg">
          <p>Prefer to call? Reach us at <span className="font-semibold">+91 8923596448</span></p>
          <p className="mt-1">Or email us at <span className="font-semibold">3acresresort@gmail.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default EnquireForm;