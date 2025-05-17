import React, { useEffect, useState } from 'react';

import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IoIosCloseCircleOutline  } from 'react-icons/io';
import { IoSearchCircle } from 'react-icons/io5';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <div className=" flex items-center justify-center relative">
      <div className={`duration-500  ${isOpen ? 'lg:w-64 w-40' : 'opacity-0 w-0 overflow-hidden'}`}>
        <form className="relative flex items-center w-full ">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search..."
            className="bg-white w-full text-xs border border-gray-300 rounded-lg shadow-sm h-10 pl-4 focus:outline-none transition-all duration-400 hover:shadow-sm"
          />

          <button
            type="submit"
            className="absolute right-2 mt-1 cursor-pointer hover:text-red-600 transition-colors"
          >
            <IoSearchCircle className="h-6 w-6 " />
          </button>
        </form>
        
      </div>

      {!isOpen ? 
        <button>
          <HiMagnifyingGlass
            className="h-6 w-6 text-black cursor-pointer hover:text-red-500"
            onClick={handleSearchToggle}
          />
        </button>
      : 
      <button
            type="button"
            onClick={handleSearchToggle}
            className="mt-1 ml-4 cursor-pointer hover:text-red-600 transition-colors"
          >
            <IoIosCloseCircleOutline  className="h-6 w-6 " />
          </button>}
    </div>
  );
};
