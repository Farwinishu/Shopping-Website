import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiButterflyFlower } from "react-icons/gi";
import { FiHeart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-8">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <h1 className="text-4xl">
              <GiButterflyFlower />
            </h1>
            <h6 className="text-2xl font-bold">Hony Beast</h6>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-[600px] relative">
            <input
              className="border-gray-200 border py-3 px-4 pr-12 rounded-lg w-full"
              type="text"
              placeholder="   Enter any product name..."
            />
            <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </div>

          {/* Header Icons - All Together */}
          <div className="header-icons">
            <FaUser />

            <div className="relative">
              <FiHeart />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </div>

            <div className="relative">
              <HiShoppingBag />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
