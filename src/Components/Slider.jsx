import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-md h-screen w-64 fixed top-20 left-0 flex flex-col py-6 px-12">
      {/* Home Section */}
      <div className="mb-8">
        <ul className="space-y-4">
          <li className="">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <img src="/home.svg" alt="Home" className="h-5 w-5" />
              <span className="ml-3">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <img src="/public.svg" alt="Public" className="h-5 w-5" />
              <span className="ml-3">PUBLIC</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <span className="ml-8">Questions</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <span className="ml-8">Tags</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <span className="ml-8">Users</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <img src="/collectives.svg" alt="Companies" className="h-5 w-5" />
              <span className="ml-3">COLLECTIVES</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <span className="ml-8">Explore Jobs</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <img src="/jobs.svg" alt="Companies" className="h-5 w-5" />
              <span className="ml-3">FIND JOBS</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <span className="ml-8">Jobs</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <span className="ml-8">Companies</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <img src="/people.svg" alt="Companies" className="h-5 w-5" />
              <span className="ml-3">TEAMS</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <span className="ml-8">+ Create Teams</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
