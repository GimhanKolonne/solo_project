import React from 'react';
import { useState } from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';

export const CartContent = () => {
  const cartProducts = [
    {
      productID: 1,
      productName: 'Solo Graphic Sweater',
      productPrice: '20.99',
      size: 'M',
      color: 'White',
      quantity: 1,
      image: '../assets/images/product3.png',
    },
    {
      productID: 2,
      productName: 'Solo Graphic Tee',
      productPrice: '15.99',
      size: 'S',
      color: 'Pink',
      quantity: 2,
      image: '../assets/images/product4.png',
    },
     {
      productID: 3,
      productName: 'Original Solo T-shirt',
      productPrice: '29.99',
      size: 'L',
      color: 'Black',
      quantity: 2,
      image: '../assets/images/product5.png',
    },
     {
      productID: 4,
      productName: 'Solo Sweater',
      productPrice: '23.99',
      size: 'S',
      color: 'Brown',
      quantity: 1,
      image: '../assets/images/product6.png',
    },
  ];



  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={index} className="flex items-start justify-between py-4 border-b border-gray-300">
          <div className="flex items-center">
            <img src={product.image} className="w-30 h-35 mr-4 object-contain rounded " />
            <div>
              <h3 className='uppercase font-semibold'>{product.productName} </h3>

              <p className="text-sm text-gray-500">
                Size: {product.size} | Color: {product.color}
              </p>
              <div className='flex items-center mt-2'>
                <button className='border border-gray-200 px-2 text-xl font-medium cursor-pointer' >
                    -
                </button>
                <span className='mx-4'>{product.quantity}</span>
                <button className='border border-gray-200  px-2 text-xl font-medium cursor-pointer' >
                    +
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Price: ${product.quantity * product.productPrice.toLocaleString()}
              </p>
              <button>
                <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600 cursor-pointer'/>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
