
import React from 'react';

const Slide = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Background"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Let's find a home</h1>
        <h1 className="text-4xl font-bold mb-5">that's perfect for you</h1>
        <div className="max-w-md mx-auto">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-l-md focus:outline-none text-black"
            placeholder="Search for a home"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-md mt-5 focus:outline-none hover:bg-indigo-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
