import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full bg-[#100a08] px-10 py-12 text-white flex flex-wrap justify-between gap-8'>
      
      {/* Logo and Contact Info */}
      <div className='w-full sm:w-[45%] md:w-[25%] space-y-6'>
        <div className='text-5xl font-bold'>
          <span>SE</span>
          <span className='text-[#dd7109]'>O</span>
          <span>i</span>
          <span>NUX</span>
        </div>

        <div className='flex flex-col gap-4 text-sm'>
          <div>
            <p className='uppercase font-semibold text-xs'>24/7 Call us</p>
            <p className='text-gray-400'>+(528) 456-7592</p>
          </div>
          <div>
            <p className='uppercase font-semibold text-xs'>24/7 Email us</p>
            <p className='text-gray-400'>pm921670@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className='w-full sm:w-[45%] md:w-[20%]'>
        <p className='text-2xl font-bold mb-4'>Quick Links</p>
        <ul className='space-y-2 text-sm text-gray-400'>
          <li className='hover:text-orange-400 transition'><a href="#">About Us</a></li>
          <li className='hover:text-orange-400 transition'><a href="#">Testimonials</a></li>
          <li className='hover:text-orange-400 transition'><a href="#">Our Team</a></li>
          <li className='hover:text-orange-400 transition'><a href="#">Latest Articles</a></li>
          <li className='hover:text-orange-400 transition'><a href="#">Privacy Policy</a></li>
          <li className='hover:text-orange-400 transition'><a href="#">Refund & Return Policy</a></li>
        </ul>
      </div>

      {/* Services */}
      <div className='w-full sm:w-[45%] md:w-[20%]'>
        <p className='text-2xl font-bold mb-4'>Our Services</p>
        <ul className='space-y-2 text-sm text-gray-400'>
          <li className='hover:text-orange-400 transition'><a href="#">Business Development</a></li>
          <li className='hover:text-orange-400 transition'><a href="#">Digital Marketing</a></li>
          <li className='hover:text-orange-400 transition'><a href="#">Investment Strategies</a></li>
          <li className='hover:text-orange-400 transition'><a href="#">Market Analysis</a></li>
          <li className='hover:text-orange-400 transition'><a href="#">Project Management</a></li>
          <li className='hover:text-orange-400 transition'><a href="#">Web Development</a></li>
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div className='w-full sm:w-[45%] md:w-[25%] space-y-4'>
        <p className='text-2xl font-bold'>Get Updates</p>
        <p className='text-sm text-gray-400'>
          Welcome to SeoInux. Sign up for our latest news & articles. We won't spam you.
        </p>
        <div className='relative'>
          <input
            type="text"
            placeholder='Email Address'
            className='w-full h-10 px-4 pr-12 rounded-xl border border-gray-300 text-white'
          />
          <button className='absolute right-2 cursor-pointer hover:text-white top-1/2 transform -translate-y-1/2 text-[#dd7109]'>
            <FaTelegramPlane className='text-2xl' />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
