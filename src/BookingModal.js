import React from "react";

const BookingModal = ({ setModalOpen }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Book Your Wedding</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-pink-600"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-pink-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Preferred Service</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-pink-600">
              <option>Venue Selection</option>
              <option>Catering Services</option>
              <option>Photography</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
              onClick={() => setModalOpen(false)} // Close the modal
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
