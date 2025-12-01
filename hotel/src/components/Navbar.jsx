import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import BookingModel from "./BookingModel";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const location = useLocation();
  const transparentPage = ["/", "/rooms"];
  const isTransparentPage = transparentPage.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModel1 = () => setIsModelOpen(true);
  const closeModel1 = () => setIsModelOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 overflow-x-hidden transition-all duration-500
    ${isTransparentPage
          ? scrolled
            ? "bg-[#e7dfd8] shadow-md"
            : "bg-transparent"
          : "bg-[#e7dfd8] shadow-md"
        }
  `}
    >
      <div className="w-full flex justify-between items-center px-4 md:px-10 h-20 mx-auto overflow-x-hidden">
        <div className="w-14 h-14 sm:w-20 sm:h-20 shrink-0 ">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-8 text-md font-medium 
            ${isTransparentPage ? (scrolled ? "text-gray-700" : "text-white") : "text-gray-700"}`}
        >
          <Link to={"/"}> <li className="cursor-pointer hover:text-[#fc8b0a]">HOME</li></Link>
          <Link to={"/rooms"} id="rooms"> <li className="cursor-pointer hover:text-[#fc8b0a]">ROOMS</li></Link>
          <Link to={"/events"}> <li className="cursor-pointer hover:text-[#fc8b0a]">EVENTS</li></Link>
          <li
            className="cursor-pointer hover:text-[#fc8b0a]"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            CONTACT
          </li>
        </ul>

        {/* Desktop Book Now Button */}
        <button
          className={`hidden md:block px-6 py-2 rounded-full font-semibold transition-all duration-500 cursor-pointer hover:bg-[#fc8b0a] hover:text-white ${scrolled ? "bg-[#001526] text-white" : "bg-white text-[#001526]"
            }`}
          onClick={openModel1}
        >
          Book Now
        </button>

        {/* Hamburger icon for mobile */}
        <div
          className={`md:hidden text-3xl cursor-pointer ${scrolled ? "text-black" : "text-white"
            }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full transition-all duration-500 overflow-hidden  ${open ? "max-h-96 opacity-100 bg-[#e7dfd8]" : "max-h-0 opacity-0 "
          } `}
      >
        <ul
          className={`flex flex-col gap-6 text-center py-6 text-md font-medium  font-sans ${scrolled ? "text-gray-800" : "text-gray-700"
            }`}
        >
          <Link to={"/"}> <li className="cursor-pointer hover:text-[#fc8b0a]">HOME</li></Link>
          <Link to={"/rooms"} id="rooms"> <li className="cursor-pointer hover:text-[#fc8b0a]">ROOMS</li></Link>
          <Link to={"/events"}> <li className="cursor-pointer hover:text-[#fc8b0a]">EVENTS</li></Link>
          <li
            className="cursor-pointer hover:text-[#fc8b0a]"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            CONTACT
          </li>
          <button
            className={`px-6 py-2 rounded-full font-semibold mx-auto mt-2 w-40 cursor-pointer hover:bg-[#fc8b0a] hover:text-white ${scrolled ? "bg-[#001526] text-white" : "bg-white text-[#001526]"
              }`}
            onClick={openModel1}
          >
            Book Now
          </button>
        </ul>
      </div>

      <BookingModel isOpen={isModelOpen} onClose={closeModel1} />
    </nav>
  );
};

export default Navbar;