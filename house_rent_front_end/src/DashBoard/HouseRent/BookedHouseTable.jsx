import React from 'react';

const BookedHouseTableRow = ({ house }) => {

  const handleDelete = (House_id, id) => {
    fetch(`http://localhost:5001/UpdateBooked/${House_id}`, {

      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isAvailable: true }),
    })

      .then(res => res.json()).then(result => { }

      )
      
    fetch(`http://localhost:5001/deleteBookedHouse/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json()).then(result => window.location.href = "/dashboard/mybooked")


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
          onClick={() => handleDelete(house?.appendData?._id, house?._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BookedHouseTableRow;
