import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 overflow-y-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/logo-stackoverflow.svg"
            alt="StackOverflow Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-1/3">
          <input
            type="text"
            placeholder="Search Your Answers Here..."
            className="w-full border rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-500">
            <img src="/search.svg" alt="" className="h-7 w-7" />
          </button>
        </div>

        {/* Icon Section */}
        <div className="hidden sm:flex space-x-10">
          <a href="#" className="text-gray-700 hover:text-orange-500">
            <img src="/message1.svg" alt="" className="h-7 w-7" />
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            <img src="/trophy.svg" alt="" className="h-7 w-7" />
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            <img src="/message2.svg" alt="" className="h-7 w-7" />
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            <img src="/user.svg" alt="" className="h-7 w-7" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
