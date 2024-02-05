import React from 'react';
import illustration from '../assets/illustration.png'

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="bg-indigo-900 p-10 flex w-1/2 justify-center items-center">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
          <p className="text-lg">Explore the amazing features and benefits.</p>
          <img src={illustration} className="w-1/2"/>
        </div>
      </div>

      {/* Right Section */}
      <div className="p-10 flex w-1/2 items-center justify-center">
        <form className="w-1/2">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-950 text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
