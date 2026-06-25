import React from 'react';
import { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { AiOutlineShopping } from 'react-icons/ai';
import { CartContent } from '../cart/CartContent';

export const CartDrawer = ({ drawerOpen, toggleDrawer }) => {
  return (
    <>
      {drawerOpen && <div className="fixed inset-0 bg-black/50" onClick={toggleDrawer}></div>}

      <div
        className={`fixed top-0 right-0  sm:w-1/2 md:w-[30rem] h-full bg-white transform transition-transform duration-300 flex flex-col z-50 ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between p-2.5 border-b border-gray-300">
          <button>
            <AiOutlineShopping className="h-6 w-6" />
          </button>
          <h2 className="text-md font-medium uppercase">Shopping Cart</h2>
          <button onClick={toggleDrawer}>
            <IoIosCloseCircleOutline className="h-6 w-6 cursor-pointer hover:text-red-500" />
          </button>
        </div>
        <div className="flex-grow p-4 overflow-y-auto">
          <CartContent />
        </div>
        <div className="p-4 bg-white sticky bottom-0">
          <button className=" w-full font-mono bg-black text-lg text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer">
            Checkout
          </button>
          <p className="text-sm font-mono tracking-tighter text-gray-500 mt-2 text-center">
            Shipping, taxes and promotions calculated at checkout{' '}
          </p>
        </div>
      </div>
    </>
  );
};
