import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {
  const { userRegistration, loading } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    userRegistration.register(e);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-lg py-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register Account</h2>
        </div>
        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input id="fullName" name="fullName" type="text" required className="appearance-none mt-1 block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Full Name" />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select id="role" name="role" required className="appearance-none mt-1 block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="" disabled defaultValue>Select your role</option>
                <option value="houseOwner">House Owner</option>
                <option value="houseRenter">House Renter</option>
              </select>
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input id="phoneNumber" name="phoneNumber" type="text" required className="appearance-none mt-1 block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Phone Number" />
            </div>
            <div>
              <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email address</label>
              <input id="emailAddress" name="emailAddress" type="email" autoComplete="email" required className="appearance-none mt-1 block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none mt-1 block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Password" />
            </div>
          </div>
          <div>
            {
              loading ? <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Loading...
              </button> : <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Register
              </button>
            }

          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
