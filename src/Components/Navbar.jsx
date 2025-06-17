import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = () => {
    navigate('/sign-up');
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <nav className='h-12 w-full bg-[#262626] flex items-center justify-between px-6'>
        <a href="/" className='text-white text-lg font-bold'>
          envato <span className='font-light'>market</span>
        </a>
        <button
          className='bg-[#82b440] cursor-pointer text-white text-sm px-4 py-2 rounded-md font-semibold'
          onClick={handleNavigate}
        >
          Buy now
        </button>
      </nav>

      {/* Main Navbar */}
      <header className='w-full bg-gradient-to-r from-[#1f140d] to-[#2b180c] px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='text-4xl font-extrabold text-white'>
          <span className='text-white'>SE</span>
          <span className='text-[#dd7109]'>O</span>
          <span className='text-white'>i</span>
          <span className='text-white'>NUX</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className='hidden md:flex gap-8 text-sm font-medium text-white'>
          <li className='hover:text-[#dd7109] cursor-pointer'><a href="/">Home ▾</a></li>
          <li className='hover:text-[#dd7109] cursor-pointer'><a href="/about">About Us ▾</a></li>
          <li className='hover:text-[#dd7109] cursor-pointer'><a href="/our-portfolio">Our Portfolio ▾</a></li>
          <li className='hover:text-[#dd7109] cursor-pointer'><a href="/our-services">Our Services ▾</a></li>
          <li className='hover:text-[#dd7109] cursor-pointer'><a href="/blog">Blogs ▾</a></li>
          <li className='hover:text-[#dd7109] cursor-pointer'><a href="/contact-us">Contact</a></li>
          <li className='hover:text-[#dd7109] cursor-pointer'><a href="/sign-up">SignUp</a></li>
        </ul>

        {/* Icons & Hamburger for mobile */}
        <div className='flex items-center gap-4 text-white text-2xl md:hidden'>
          <CiSearch className='cursor-pointer' />
          <RxHamburgerMenu className='cursor-pointer' onClick={toggleMenu} />
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-[#2b180c] text-white px-6 py-4 space-y-4'>
          <a href="/" className='block hover:text-[#dd7109]'>Home</a>
          <a href="/about" className='block hover:text-[#dd7109]'>About Us</a>
          <a href="/our-portfolio" className='block hover:text-[#dd7109]'>Our Portfolio</a>
          <a href="/our-services" className='block hover:text-[#dd7109]'>Our Services</a>
          <a href="/blog" className='block hover:text-[#dd7109]'>Blogs</a>
          <a href="/contact-us" className='block hover:text-[#dd7109]'>Contact</a>
          <a href="/sign-up" className='block hover:text-[#dd7109]'>SignUp</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
