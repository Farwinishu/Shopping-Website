import React from "react";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="container py-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <div className="header_top__icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <FaInstagramSquare />
            </div>
            <div className="header_top__icon_wrapper">
              <FaTwitterSquare />
            </div>
            <div className="header_top__icon_wrapper">
              <FaLinkedin />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
          </div>
          <div className="header-section">
            <div className="flex gap-4">
              <div className="margin">
                <select
                  className="text-gray-500 text-[12px] w-[80px]"
                  name="Currency"
                  id="Currency"
                >
                  <option value="USD $">USD $</option>
                  <option value="EUR $">EUR</option>
                  <option value="LKR">LKR</option>
                </select>
              </div>
              <select
                className="text-gray-500 text-[12px] w-[80px]"
                name="Language"
                id="Language"
              >
                <option value="ENGLISH">ENGLISH</option>
                <option value="TAMIL">TAMIL</option>
                <option value="SINHALA">SINHALA</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
