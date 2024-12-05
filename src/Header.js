import React, { useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="profile.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full border-2 border-white"
          />
          <h4 className="text-white text-lg font-bold ml-3">Daniel Kioko</h4>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // Cross icon when open
                  : "M4 6h16M4 12h16m-7 6h7" // Hamburger menu when closed
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center lg:space-x-6 lg:static absolute bg-primary w-full lg:w-auto top-full left-0 p-4 lg:p-0`}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 block py-2 lg:py-0"
          >
            Home
          </Link>
          <Link
            to="moments"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 block py-2 lg:py-0"
          >
            Moments
          </Link>
          <Link
            to="venues"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 block py-2 lg:py-0"
          >
            Venues
          </Link>
          <Link
            to="catering"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 block py-2 lg:py-0"
          >
            Catering
          </Link>
          <Link
            to="photographs"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 block py-2 lg:py-0"
          >
            Photographs
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 block py-2 lg:py-0"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
