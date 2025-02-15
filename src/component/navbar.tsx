import React, { useState } from "react";
import { Link } from "react-router-dom";
import { companyInfo } from "../config/CompanyDetails";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <img src={companyInfo.imagePath} alt="Logo" className="h-15 w-auto" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? "block" : "hidden"} lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto mt-4 lg:mt-0`}>
          <Link to="/" className="block text-gray-700 hover:text-blue-500 transition duration-300 py-2 lg:py-0">
            Home
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-500 transition duration-300 py-2 lg:py-0">
            About
          </Link>
          <Link to="/service" className="block text-gray-700 hover:text-blue-500 transition duration-300 py-2 lg:py-0">
            Services
          </Link>
          <Link to="/contactus" className="block text-gray-700 hover:text-blue-500 transition duration-300 py-2 lg:py-0">
            Contact
          </Link>
        </div>

        {/* Call to Action Button (Hidden on Mobile) */}
        <div className="hidden lg:block">
          <Link to="/signup" className="p-4 text-gray-700 hover:text-blue-500 transition duration-300 py-2 lg:py-0">
            Sign In
          </Link>
          <Link to="/signin" className="text-gray-700 hover:text-blue-500 transition duration-300 py-2 lg:py-0">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
