import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b-[1px] border-gray-200 font-primary">
      <div className="md:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex h-16 w-auto items-center justify-center bg-[#0096ff] cursor-pointer">
            <img
              src="/icons/icon.png"
              alt="Logo"
              className="h-12 w-16 object-contain"
            />
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex md:space-x-8">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Support
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Partners
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Foundry
            </a>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-800 hover:text-blue-600">
              <i className="fas fa-user"></i>
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              <i className="fas fa-globe"></i>
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              <i className="fas fa-search"></i>
            </a>

            {/* Hamburger Menu for Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Products
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Support
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Solutions
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Developers
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Partners
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Foundry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
