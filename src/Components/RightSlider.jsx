import React from 'react';

const RightSlider = () => {
  return (
    <div className="bg-white shadow-md fixed top-0 right-0 h-screen overflow-y-auto p-6 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] mt-16 hidden md:block">
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">The Overflow Blog</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-black hover:text-gray-700 text-sm">
              The unexpected benefits of mentoring others
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-700 text-sm">
              Podcast 354: Building for AR with Niantic Labs’ augmented reality SDK
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">Featured & Meta</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-black hover:text-gray-700 text-sm">
              Beta release of Collectives™ on Stack Overflow
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-8 bg-[#f5f5f5] p-4 rounded-md">
        <h2 className="text-lg font-bold mb-4">Hot meta post</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-black hover:text-gray-700 text-sm">
              Tags (driver) and (device-driver) appear to be redundant
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-700 text-sm">
              How to handle dupes where A is closed as dup of B but I have an answer that...
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-700 text-sm">
              Ambiguous tag (containers)
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Custom filter</h2>
        <button className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300">
          add custom filters
        </button>
      </div>
    </div>
  );
};

export default RightSlider;
