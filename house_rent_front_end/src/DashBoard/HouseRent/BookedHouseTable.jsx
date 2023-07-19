import React from 'react';

const BookedHouseTableRow = ({ house, onDelete, onEdit }) => {

  const handleEdit = () => {
    onEdit(house);
  };

  const handleDelete = () => {
    onDelete(house.id);
  };

  return (
    <tr className="border-b border-gray-200">
      <td className="px-6 py-4 whitespace-nowrap">{house?.appendData?.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house?.appendData?.address}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house?.appendData?.city}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house?.appendData?.bedrooms}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house?.appendData?.bathrooms}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house?.appendData?.roomSize}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house?.appendData?.availabilityDate}</td>
      <td className="px-6 py-4 whitespace-nowrap">${house?.appendData?.rentPerMonth}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house?.appendData?.phoneNumber}</td>
      <td className="px-6 py-4 whitespace-nowrap">{house?.appendData?.description}</td>
      <td className="px-6 py-4 whitespace-nowrap space-x-2">
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

export default BookedHouseTableRow;
