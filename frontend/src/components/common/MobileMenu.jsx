import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

export const MobileMenu = ({ navOpen, toggleNav }) => {
  return (
    <>
      {navOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-10" onClick={toggleNav} />}
      <div
        className={`fixed top-0 right-0 w-full md:w-1/2 h-full lg:hidden bg-white transform transition-transform duration-500 z-40 ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <Link to="/" className="text-2xl font-extrabold transition-colors duration-600 group">
            <span className="group-hover:text-red-600/70">SO</span>
            <span className="text-red-600/70 group-hover:text-black">LO</span>
          </Link>
          <button
            onClick={toggleNav}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
          >
            <IoMdClose className="h-6 w-6 text-black" />
          </button>
        </div>

        <div className="flex font-poppins text-lg uppercase p-4">
          <nav className="space-y-6 w-full py-2 tracking-wide font-medium">
            <Link
              to="#"
              onClick={toggleNav}
              className="block text-black hover:text-red-600 transition-colors duration-300"
            >
              Collections
            </Link>
            <Link
              to="#"
              onClick={toggleNav}
              className="block text-black hover:text-red-600 transition-colors duration-300"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNav}
              className="block text-black hover:text-red-600 transition-colors duration-300"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNav}
              className="block text-black hover:text-red-600 transition-colors duration-300"
            >
              New Arrivals
            </Link>
            <Link
              to="#"
              onClick={toggleNav}
              className="block text-black hover:text-red-600 transition-colors duration-300"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="mt-12 p-4">
          <a
            href="#"
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
          >
            <HiOutlineUser className="h-5 w-5" />
            <span>My Account</span>
          </a>
          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">Need help? Contact us at support@solo.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
