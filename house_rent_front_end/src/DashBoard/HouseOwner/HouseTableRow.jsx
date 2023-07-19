import React from 'react';

const HouseTableRow = ({ house, onDelete, onEdit }) => {
  const handleEdit = () => {
    onEdit(house);
  };

  const handleDelete = () => {
    onDelete(house.id);
  };

  return (
    <tr className="border-b border-gray-200">
      <td className="px-6 py-4 whitespace-nowrap">{house.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house.address}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house.city}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house.bedrooms}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house.bathrooms}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house.roomSize}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house.availabilityDate}</td>
      <td className="px-6 py-4 whitespace-nowrap">${house.rentPerMonth}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house.phoneNumber}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house.description}</td>
      <td className="px-6 py-4 whitespace-nowrap space-x-2">
        <button
          className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default HouseTableRow;
