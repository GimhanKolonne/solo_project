import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser } from 'react-icons/hi';
import { BiShoppingBag, BiSolidShoppingBag  } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { SearchBar } from './SearchBar';

export const NavBar = () => {
  return (
    <>
      <nav className="shadow-sm py-3">
        <div className="container mx-auto flex items-center justify-between px-4 ">
          
          <Link to="/" className="text-2xl font-extrabold transition-colors duration-600 group">
            <span className="group-hover:text-red-600/70">SO</span>
            <span className="text-red-500 group-hover:text-black">LO</span>
          </Link>
          <div className="hidden lg:flex space-x-6">
            <Link to="#" className="text-black hover:text-red-600 text-sm font-medium uppercase">
              Collections
            </Link>
            <Link to="#" className="text-black hover:text-red-600 text-sm font-medium uppercase">
              Men
            </Link>
            <Link to="#" className="text-black hover:text-red-600 text-sm font-medium uppercase">
              Women
            </Link>
            <Link to="#" className="text-black hover:text-red-600 text-sm font-medium uppercase">
              New Arrivals
            </Link>
            <Link to="#" className="text-black hover:text-red-600 text-sm font-medium uppercase">
              About
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <SearchBar />
            <Link to="/profile" className="hover:text-red-600">
              <HiOutlineUser className="h-6 w-6" />
            </Link>
            <button className="relative group">
              <BiShoppingBag className="h-6 w-6 text-black opacity-100 group-hover:opacity-0 transition-opacity duration-500 cursor-pointer"/>
              <BiSolidShoppingBag className='h-6 w-6 text-red-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 cursor-pointer'/>
              <span className='absolute -top-1 -right-3 group-hover:opacity-0 bg-red-500/70 text-white text-xs rounded-full px-2 py-0.5 border '>4</span>
            </button>
            <button className='relative lg:hidden'>
              <GiHamburgerMenu className='h1 w-6 text-black cursor-pointer'/>
            </button>
            
          </div>
        </div>
      </nav>
    </>
  );
};
