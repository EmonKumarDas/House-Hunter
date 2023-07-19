import React, { useContext, useState } from 'react';
import { ApiContext } from '../../ApiProvider/ApiProvider';

const AddHouse = () => {
    const {setFormData,formData} = useContext(ApiContext);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (number) => {
    const bdPhoneNumberRegex = /^(?:\+8801|8801|01)[13-9]{1}(?:\d{8})$/;
    return bdPhoneNumberRegex.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const validationErrors = {};
    for (const key in formData) {
      if (formData[key] === '') {
        validationErrors[key] = 'This field is required.';
      }
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      validationErrors.phoneNumber = 'Invalid Bangladeshi phone number.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit the form or save the data
      console.log(formData);
      // Reset the form after submission
      setFormData({
        name: '',
        address: '',
        city: '',
        bedrooms: '',
        bathrooms: '',
        roomSize: '',
        picture: '',
        availabilityDate: '',
        rentPerMonth: '',
        phoneNumber: '',
        description: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="mx-auto mt-8 p-4">
      <form onSubmit={handleSubmit} className=' grid grid-cols-4 gap-4'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            House Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
          {errors.address && <p className="text-red-500 mt-1">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
          {errors.city && <p className="text-red-500 mt-1">{errors.city}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="bedrooms" className="block text-gray-700 font-semibold mb-2">
            Bedrooms <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
          {errors.bedrooms && <p className="text-red-500 mt-1">{errors.bedrooms}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="bathrooms" className="block text-gray-700 font-semibold mb-2">
            Bathrooms <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
          {errors.bathrooms && <p className="text-red-500 mt-1">{errors.bathrooms}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="roomSize" className="block text-gray-700 font-semibold mb-2">
            Room Size <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="roomSize"
            name="roomSize"
            value={formData.roomSize}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
          {errors.roomSize && <p className="text-red-500 mt-1">{errors.roomSize}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">
            Phone Number (Bangladeshi) <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
          {errors.phoneNumber && <p className="text-red-500 mt-1">{errors.phoneNumber}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="rentPerMonth" className="block text-gray-700 font-semibold mb-2">
            Rent per Month <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="rentPerMonth"
            name="rentPerMonth"
            value={formData.rentPerMonth}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
          {errors.rentPerMonth && <p className="text-red-500 mt-1">{errors.rentPerMonth}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="availabilityDate" className="block text-gray-700 font-semibold mb-2">
            Availability Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="availabilityDate"
            name="availabilityDate"
            value={formData.availabilityDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
          {errors.availabilityDate && <p className="text-red-500 mt-1">{errors.availabilityDate}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="picture" className="block text-gray-700 font-semibold mb-2">
            Picture URL <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="picture"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
          {errors.picture && <p className="text-red-500 mt-1">{errors.picture}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
          {errors.description && <p className="text-red-500 mt-1">{errors.description}</p>}
        </div><br></br>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddHouse;
