import React from 'react'
import { FaFacebook } from "react-icons/fa";
const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper"></div>
            <FaFacebook />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
