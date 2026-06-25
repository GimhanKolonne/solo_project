import React, { useState } from 'react';

import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';

export const SearchBar = ({ isOpen, handleSearchToggle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const popularSearch = [
    'Shoes',
    'T-shirts',
    'Jeans',
    'Jackets',
    'Accessories',
   
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/30" onClick={handleSearchToggle} />}

      <div
        className={`fixed top-0 left-0 w-full md:w-1/2 lg:w-[30rem] h-full  bg-white transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-end justify-between p-2.5 border-b border-gray-300">
          <span className="text-black text-sm font-medium uppercase">Search</span>
          <button onClick={handleSearchToggle} className="hover:text-red-500 cursor-pointer">
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>
        <div className="flex justify-center mt-5 px-4">
          <form className="flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-2xl gap-2">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              className="border border-gray-300 p-2 w-full  placeholder:text-sm focus:outline-none text-sm text-gray-500"
              placeholder="What are you looking for?"
            />
            <button
              type="submit"
              className="bg-black hover:bg-red-600 cursor-pointer  flex items-center justify-center text-white p-2 rounded-sm"
            >
              <HiMagnifyingGlass className="h-5 w-5" />
            </button>
          </form>
        </div>

        <div className="px-4 mt-6">
          <h2 className="text-black text-sm font-medium uppercase mb-4">Popular Searches</h2>
          <div className="flex flex-wrap gap-2">
            {popularSearch.map((item, index) => (
              <button
                key={index}
                onClick={() => setSearchTerm}
                className="bg-red-600 cursor-pointer hover:bg-black text-white rounded-full px-3 py-1 text-xs font-mono  transition duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
