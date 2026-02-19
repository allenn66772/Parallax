import React, { useState } from 'react'
import logo01 from '../assets/logo01.png'
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="w-full w-[375px] bg-black">
      <div className="max-w-[1312px] mx-auto h-[72px] flex items-center justify-between px-4 lg:px-0">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo01} alt="logo" className="h-[126px] w-[170px] " />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <p className="text-white cursor-pointer transition-all duration-300 ease-in-out
              hover:text-[#05eded] hover:drop-shadow-[0_0_8px_#05eded] hover:scale-105">
            Services
          </p>

          <p className="text-white cursor-pointer transition-all duration-300 ease-in-out
              hover:text-[#05eded] hover:drop-shadow-[0_0_8px_#05eded] hover:scale-105">
            About Us
          </p>

          <p className="text-white cursor-pointer transition-all duration-300 ease-in-out
              hover:text-[#05eded] hover:drop-shadow-[0_0_8px_#05eded] hover:scale-105">
            Contact
          </p>

          <p className="text-white cursor-pointer transition-all duration-300 ease-in-out
              hover:text-[#05eded] hover:drop-shadow-[0_0_8px_#05eded] hover:scale-105">
            More
          </p>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <button
            className="
              px-6 h-[45px]
              text-white text-[14px] font-medium
              rounded-full
              bg-gradient-to-b from-[#1e5a8a] to-[#0B3A66]
              shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),_0_4px_10px_rgba(0,0,0,0.4)]
              flex items-center justify-center
              transition-all duration-300
              hover:scale-105
              hover:shadow-[inset_0_2px_6px_rgba(255,255,255,0.35),_0_6px_16px_rgba(0,0,0,0.5)]
            "
          >
            Button
          </button>
        </div>

        {/* Mobile Icon */}
        <div
          className="lg:hidden text-white text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-black flex flex-col items-center gap-6 py-6 border-t border-gray-800">

          <p className="text-white hover:text-[#05eded] cursor-pointer">Services</p>
          <p className="text-white hover:text-[#05eded] cursor-pointer">About Us</p>
          <p className="text-white hover:text-[#05eded] cursor-pointer">Contact</p>
          <p className="text-white hover:text-[#05eded] cursor-pointer">More</p>

          <button
            className="
              px-6 h-[42px]
              text-white text-[14px] font-medium
              rounded-full
              bg-gradient-to-b from-[#1e5a8a] to-[#0B3A66]
              shadow-[0_4px_10px_rgba(0,0,0,0.4)]
              transition-all duration-300
              hover:scale-105
            "
          >
            Button
          </button>
        </div>
      )}
    </div>
    </>
  )
}

export default Header