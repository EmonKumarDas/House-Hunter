import React, { useContext, useState } from 'react';
import BookedHouseTableRow from './bookedHouseTable';
import { ApiContext } from '../../Provider/ApiProvider';

const BookedHouse = () => {
  const { bookedHouse, loading } = useContext(ApiContext)
  const handleDeleteHouse = (houseId) => {
    setHouses((prevHouses) => prevHouses.filter((house) => house.id !== houseId));
  };

  return (
    <>
    {
      loading?"Loading....": <div className="flex flex-col mt-8 w-[80vw]">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <table className="min-w-full border divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    City
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bedrooms
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bathrooms
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Room Size
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Availability Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rent Per Month
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookedHouse?.map((house) => (
                  <BookedHouseTableRow
                    key={house._id}
                    house={house}
                    onDelete={handleDeleteHouse}
                  // onEdit={() => console.log('Edit clicked for house', house.id)}
                  />
                ))}
              </tbody>


            </table>
          </div>
        </div>
      </div>
}
    </>

  );
};

export default BookedHouse;
