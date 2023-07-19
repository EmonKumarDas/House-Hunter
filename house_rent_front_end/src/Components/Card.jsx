import React, { useContext } from 'react';
import { ApiContext } from '../Provider/ApiProvider';

const Card = ({ house }) => {
  const { getProductById } = useContext(ApiContext);
  const getId = (id) => {
    getProductById(id);
  }

  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="object-cover w-full h-48"
        src={house.picture}
        alt="Property"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{house?.name}</h3>
        <p className="text-gray-600 font-medium mb-2">${house?.rentPerMonth}</p>
        <p className="text-gray-600 font-medium mb-2">Address: {house?.address}</p>
        <p className="text-gray-600 font-medium mb-2">City: {house?.city}</p>
        <p className="text-gray-600 font-medium mb-2">Bedrooms: {house?.bedrooms}</p>
        <p className="text-gray-600 font-medium mb-2">Bathrooms: {house?.bathrooms}</p>
        <p className="text-gray-600 font-medium mb-2">Room Size: {house?.roomSize}</p>
        <p>Availability: Available Now</p>
        <button onClick={() => getId(house)} className="px-4 py-2 bg-indigo-600 text-white rounded-md focus:outline-none hover:bg-indigo-700 mb-2">Book Now</button>
      </div>

    </div>
  );
};

export default Card;
