import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const Links = [
    { name: 'Collection', path: '' },
    { name: 'Men', path: '' },
    { name: 'Women', path: '' },
    { name: 'New Arrivals', path: '' },
    { name: 'About', path: '' },
  ];

  const Support = [
    { name: 'Contact Us', path: '' },
    { name: 'FAQ', path: '' },
    { name: 'Shipping & Returns', path: '' },
    { name: 'Privacy Policy', path: '' },
    { name: 'Terms of Service', path: '' },
  ];

  return (
    <footer className="bg-white text-black py-12 border-t border-gray-200">
      {/*Newsletter section*/}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 lg:px-0">
        <div>
          <h3 className="text-red-600 text-md font-small uppercase  ">Newsletter</h3>
          <p className="text-sm mt-4 font-light text-gray-300">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <p className="text-xs mt-4 font-medium uppercase text-red-500">
            Sign up and get 10% off your first purchase!
          </p>
          <form className="flex mt-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 border-red-600 bg-black text-white p-2 focus:outline-none text-sm placeholder:text-gray-500 "
            />
            <button
              className="bg-red-600 text-white text-xs w-full font-medium uppercase hover:bg-red-700 cursor-pointer"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/*quick links section*/}
        <div>
          <h3 className="text-black text-md font-small uppercase">Shop</h3>
          <ul className="mt-4 space-y-4">
            {Links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-black text-sm font-light uppercase block hover:text-red-600 transition-transform duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/*Support section*/}

        <div>
          <h3 className="text-black text-md font-small uppercase">Support</h3>
          <ul className="mt-4 space-y-4">
            {Support.map((support, index) => (
              <li key={index}>
                <Link
                  to={support.path}
                  className="text-black text-sm font-light uppercase block hover:text-red-600 transition-transform duration-200 hover:translate-x-1 transform"
                >
                  {support.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/*Social media section*/}

        <div>
          <h3 className="text-black text-md font-small uppercase">Follow SOLO</h3>
          <button></button>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4 border-t border-gray-200 pt-4">
        <p className="text-xs text-center font-light tracking-tighter text-gray-600">
          2025, SOLO. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
