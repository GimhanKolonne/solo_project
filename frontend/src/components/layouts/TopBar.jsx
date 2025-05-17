import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-black text-white py-3">
      <div className="container mx-auto flex justify-between px-5">
        <div className="sm:text-xs md:text-sm  text-center">
          <span>Be Seen | Be SOLO</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <CiInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaXTwitter className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTiktok className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
