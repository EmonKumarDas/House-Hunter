import React from 'react';

const Card = () => {
  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="object-cover w-full h-48"
        src="https://via.placeholder.com/300x200" // Replace with the actual image URL
        alt="Property"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">Property Name</h3>
        <p className="text-gray-600 font-medium mb-2">$1,200 per month</p>
        <p className="text-gray-600 font-medium mb-2">City: New York</p>
        <p className="text-gray-600 font-medium mb-2">Bedrooms: 3</p>
        <p className="text-gray-600 font-medium mb-2">Room Size: 1500 sqft</p>
        <p>Availability: Available Now</p>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md focus:outline-none hover:bg-indigo-700 mb-2">Book Now</button>
      </div>
    
    </div>
  );
};

export default Card;
