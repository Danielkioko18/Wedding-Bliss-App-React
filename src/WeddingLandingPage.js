import React, { useState } from "react";
import BookingModal from "./BookingModal"; 

const WeddingLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen]= useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-pink-600">Wedding Bliss</h1>

          {/* Hamburger Icon (Visible on small screens) */}
          <button
            className="block lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex space-x-6 absolute lg:relative lg:top-auto top-16 left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent py-4 lg:py-0 shadow-md lg:shadow-none`}
          >
            <a
              href="#moments"
              className="block lg:inline text-gray-700 hover:text-pink-600 px-6 lg:px-0"
            >
              Moments
            </a>
            <a
              href="#venues"
              className="block lg:inline text-gray-700 hover:text-pink-600 px-6 lg:px-0"
            >
              Venues
            </a>
            <a
              href="#catering"
              className="block lg:inline text-gray-700 hover:text-pink-600 px-6 lg:px-0"
            >
              Catering
            </a>
            <a
              href="#photographs"
              className="block lg:inline text-gray-700 hover:text-pink-600 px-6 lg:px-0"
            >
              Photographs
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{
          backgroundImage: "url('back 1.jpg')",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-40">
          <h1 className="text-4xl lg:text-6xl font-bold">Your Dream Wedding Awaits</h1>
          <p className="text-lg lg:text-xl mt-4">
            Let us make your special day unforgettable.
          </p>
          <button onClick={() => setModalOpen(true)} className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <BookingModal 
          setModalOpen={setModalOpen}  // Close modal function passed as prop
        />
      )}

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-pink-600">Venue Selection</h3>
              <p className="text-gray-600 mt-4">
                Choose from the best venues for your big day.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-pink-600">Catering Services</h3>
              <p className="text-gray-600 mt-4">
                A wide range of menus crafted by top chefs.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-pink-600">Photography</h3>
              <p className="text-gray-600 mt-4">
                Capture every precious moment with professional photographers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pictures/Moments Section */}
      <section id="moments" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Cherished Moments</h2>
          <p className="text-center text-gray-600 mt-4">
            Relive the magic through stunning moments captured during our weddings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <img
              src="wed 2.jpg"
              alt="bride and family"
              className="rounded-lg shadow-md"
            />
            <img
              src="wed 4.jpg"
              alt="Moment 2"
              className="rounded-lg shadow-md"
            />
            <img
              src="wed 5.jpg"
              alt="Moment 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section id="venues" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Exquisite Venues</h2>
          <p className="text-center text-gray-600 mt-4">
            Find the perfect location for your wedding, from grand halls to serene gardens.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-pink-600">Grand Ballroom</h3>
              <p className="text-gray-600 mt-2">
                A spacious venue for luxurious celebrations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-pink-600">Garden Bliss</h3>
              <p className="text-gray-600 mt-2">
                Perfect for outdoor weddings with breathtaking views.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-pink-600">Rustic Barn</h3>
              <p className="text-gray-600 mt-2">
                A charming choice for a cozy, intimate wedding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Catering Delights</h2>
          <p className="text-center text-gray-600 mt-4">
            Indulge your guests with exceptional cuisine crafted by our chefs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <img
              src="cake 1.jpg"
              alt="Catering 1"
              className="rounded-lg shadow-md"
            />
            <img
              src="cake 2.jpg"
              alt="Catering 2"
              className="rounded-lg shadow-md"
            />
            <img
              src="cake 3.jpg"
              alt="Catering 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section id="photographs" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Photography</h2>
          <p className="text-center text-gray-600 mt-4">
            Capture every moment with our professional photographers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <img
              src="deco 1.jpg"
              alt="decorat of venue"
              className="rounded-lg shadow-md"
            />
            <img
              src="wed 6.jpg"
              alt=""
              className="rounded-lg shadow-md"
            />
            <img
              src="wed 7.jpg"
              alt="looking for us here are some good photos"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Wedding Bliss. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WeddingLandingPage;
