import React, { useState } from 'react';
import BookedHouseTableRow from './bookedHouseTable';


const BookedHouse = () => {
  const [houses, setHouses] = useState([
    {
      id: 1,
      name: 'House 1',
      address: '123 Main St',
      city: 'New York',
      bedrooms: 3,
      bathrooms: 2,
      roomSize: '1500 sqft',
      availabilityDate: '2023-07-31',
      rentPerMonth: 1200,
      phoneNumber: '017XXXXXXXX',
      description: 'A beautiful house for rent.',
    },
    // Add more houses here...
  ]);

  const handleDeleteHouse = (houseId) => {
    setHouses((prevHouses) => prevHouses.filter((house) => house.id !== houseId));
  };

  return (
    <div className="flex flex-col mt-8 w-[80vw]">
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
              {houses.map((house) => (
                <BookedHouseTableRow
                  key={house.id}
                  house={house}
                  onDelete={handleDeleteHouse}
                  onEdit={() => console.log('Edit clicked for house', house.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookedHouse;
