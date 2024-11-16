import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white  py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/logo-stackoverflow.svg" 
            alt="StackOverflow Logo"
            className="h-8 w-auto "
          />
        </div>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search Your Answers Here..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-500">
            🔍
          </button>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-orange-500">
            🏠
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            📩
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            🔔
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            👤
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
