import React from "react";
import { FaLocationDot, FaPhone, FaEnvelope, FaInstagram, FaWhatsapp, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#e7dfd8] text-gray-700 pt-16 pb-6 px-6 md:px-16">

      <div>
        {/* <h1
          className="text-2xl md:text-3xl font-semibold"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Subscribe To Receive Exclusive <br className="hidden md:block" /> Offers And News
        </h1> */}

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between w-full text-lg">

          {/* Left paragraph */}
          {/* <p className="text-sm md:text-base max-w-lg">
            Subscribe to receive exclusive offers and the latest news from 3Acres resort.
          </p> */}

          {/* Right email section */}
          {/* <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">

            <input
              type="email"
              className="rounded-full border border-gray-700 text-black w-full sm:w-auto px-4 py-2"
              placeholder="Enter your Email"
            />

            <button className="flex bg-[#e7dfd8] border border-gray-700 hover:bg-[#fc8b0a] transition rounded-full px-6 py-2 text-lg items-center justify-center w-full sm:w-auto">
              Subscribe <IoIosArrowRoundForward size={32} />
            </button>
          </div> */}
        </div>
      </div>
      {/* <hr className="w-full h-1 mb-2 roundex-full text-gray-700" /> */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">3Acres resort</h2>
          <p className="text-sm leading-relaxed">
            Welcome to <span className="text-gray-700 font-semibold">3Acres resort</span> — where luxury meets comfort.
            Experience the royal essence of hospitality with modern amenities and timeless elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <a href="#"> <li className="cursor-pointer hover:text-[#fc8b0a]">Home</li></a>
            <Link to={"/rooms"} id="rooms"> <li className="cursor-pointer hover:text-[#fc8b0a]">Rooms</li></Link>
            {/* <Link to={"/facilities"}><li className="cursor-pointer hover:text-[#fc8b0a]">FACILITIES</li></Link> */}
            <Link to={"/events"}> <li className="cursor-pointer hover:text-[#fc8b0a]">Events</li></Link>

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Us</h3>


          <ul className="space-y-3 text-sm">

            {/* Location */}
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-gray-700" />
              Upper Kandoli, Dehradun Uttarakhand, India
            </li>

            {/* Phone - Click to Call */}
            <li className="flex items-center gap-2">
              <FaPhone className="text-gray-700" />
              <a href="tel:+918923596448" className="hover:text-blue-600">+91 8923596448</a>,
              <a href="tel:+919090118484" className="hover:text-blue-600">+91 9090118484</a>
            </li>

            {/* Email - Click to Mail */}
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-700" />
              <a href="mailto:3acresresort@gmail.com" className="hover:text-blue-600">
                3acresresort@gmail.com
              </a>
            </li>

            {/* WhatsApp */}
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-600" />
              <a
                href="https://wa.me/918923596448"
                target="_blank"
                className="hover:text-green-700"
              >
                Chat on WhatsApp
              </a>
            </li>

            {/* Instagram */}
            <li className="flex items-center gap-2">
              <FaInstagram className="text-pink-600" />
              <a
                href="https://www.instagram.com/3acre.s/?igsh=MWppN3VrOWR0YXhxdg%3D%3D#"
                target="_blank"
                className="hover:text-pink-700"
              >
                Visit Instagram
              </a>
            </li>

            {/* YouTube */}
            <li className="flex items-center gap-2">
              <FaYoutube className="text-red-600" />
              <a
                href="https://www.youtube.com/@3acresresort"
                target="_blank"
                className="hover:text-red-700"
              >
                Watch on YouTube
              </a>
            </li>
          </ul>

          {/* <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-[#fc8b0a] transition"><FaFacebookF /></a>
            <a href="https://www.instagram.com/3acre.s?igsh=YTczOGcyemR3eDR1" target="_blank" className="hover:text-[#fc8b0a] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#fc8b0a] transition"><FaTwitter /></a>
          </div> */}
        </div>

        {/* Map */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Find Us</h3>
          <div className="rounded-lg overflow-hidden shadow-lg border border-[#fc8b0a]/30">
            <iframe
              title="3AcreIn Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5288783964023!2d77.9627013!3d30.3943625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d50054e47b8b%3A0xb90983ecf74b5325!2s3Acres%20Resort!5e0!3m2!1sen!2sin!4v1731939070000!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-700">
        © {new Date().getFullYear()} <span className="text-gray-700 font-semibold">3AcreIn</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
