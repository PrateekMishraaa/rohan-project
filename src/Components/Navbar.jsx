import React from 'react';
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <nav className='h-12 w-full bg-[#262626] flex items-center justify-between px-6'>
        <a href="" className='text-white text-lg font-bold'>
          envato <span className='font-light'>market</span>
        </a>
        <button className='bg-[#82b440] text-white text-sm px-4 py-2 rounded-md font-semibold'>
          Buy now
        </button>
      </nav>

      {/* Main Navbar */}
      <header className='h-20 w-full bg-gradient-to-r from-[#1f140d] to-[#2b180c] flex items-center justify-between px-8'>
        {/* Logo */}
        <div className='text-4xl font-extrabold text-white'>
          <span className='text-white'>SE</span>
          <span className='text-[#dd7109]'>O</span>
          <span className='text-white'>i</span>
          <span className='text-white'>NUX</span>
        </div>

        {/* Nav Links */}
        <ul className='flex gap-8 text-sm font-medium text-white'>
          <li className='hover:text-[#dd7109] cursor-pointer transition-all'>Home ▾</li>
          <li className='hover:text-[#dd7109] cursor-pointer transition-all'>About Us ▾</li>
          <li className='hover:text-[#dd7109] cursor-pointer transition-all'>Our Portfolio ▾</li>
          <li className='hover:text-[#dd7109] cursor-pointer transition-all'>Our Services ▾</li>
          <li className='hover:text-[#dd7109] cursor-pointer transition-all'>Blog ▾</li>
          <li className='hover:text-[#dd7109] cursor-pointer transition-all'>Contact Us</li>
        </ul>

        {/* Icons */}
        <div className='flex items-center gap-4 text-white text-xl'>
          <CiSearch className='cursor-pointer' />
          {/* Hamburger icon */}
          <div className='space-y-1 cursor-pointer'>
            <div className='w-6 h-0.5 bg-white relative'>
              <div className="w-1 h-1 bg-[#dd7109] rounded-full absolute -right-1 top-0.5" />
            </div>
            <div className='w-6 h-0.5 bg-white relative'>
              <div className="w-1 h-1 bg-[#dd7109] rounded-full absolute -right-1 top-0.5" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
