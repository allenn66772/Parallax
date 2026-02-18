import React from 'react'
import logo01 from '../assets/logo01.png'

function Header() {
  return (
    <>
    <div className="w-full h-[72px] bg-black flex justify-center  items-center">
        <div className='w-[1312px] h-[45px] flex justify-between items-center '>
            <div className="w-[260.5px] h-[36px] flex items-center justify-center"><img src={logo01} alt="" /></div>
            <div className="w-[387px] h-[29] ms-[222px] flex items-center  justify-evenly">
         <p className="text-white cursor-pointer transition-all duration-300 ease-in-out
              hover:text-[#05eded] hover:drop-shadow-[0_0_8px_#05eded] hover:scale-105">
              Services</p>

                <p className=' text-white cursor-pointer transition-all duration-300 ease-in-out
              hover:text-[#05eded] hover:drop-shadow-[0_0_8px_#05eded] hover:scale-105'>About Us</p>
                <p className=' text-white cursor-pointer transition-all duration-300 ease-in-out
              hover:text-[#05eded] hover:drop-shadow-[0_0_8px_#05eded] hover:scale-105'>Contact</p>
                <p className='text-white cursor-pointer transition-all duration-300 ease-in-out
              hover:text-[#05eded] hover:drop-shadow-[0_0_8px_#05eded] hover:scale-105'>More</p>
            </div>
            <div className="w-[430.5px] h-[45px] ms-[32px] flex justify-end">
               <button
  className="
    w-[83px] h-[45px]
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
        </div>
    </div>
    </>
  )
}

export default Header