import React, { useContext } from 'react';
import { ApiContext } from '../../ApiProvider/ApiProvider';

const LoginForm = () => {
  const {userLogin} = useContext(ApiContext);
  const handleLogin=(e)=>{
    e.preventDefault();
    userLogin.login(e);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-lg py-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log In</h2>
        </div>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-y-6">
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
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
