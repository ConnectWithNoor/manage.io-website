import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2 relative w-48 h-8 self-center'>
          <Image src={'/logo.svg'} fill alt='logo' />
        </div>
        {/* Manu items */}
        <div className='hidden md:flex space-x-6'>
          <Link href='#' className='hover:text-darkGrayishBlue'>
            Pricing
          </Link>
          <Link href='#' className='hover:text-darkGrayishBlue'>
            Product
          </Link>
          <Link href='#' className='hover:text-darkGrayishBlue'>
            About Us
          </Link>
          <Link href='#' className='hover:text-darkGrayishBlue'>
            Careers
          </Link>
          <Link href='#' className='hover:text-darkGrayishBlue'>
            Community
          </Link>
        </div>
        {/* Button */}
        <Link
          href='#'
          className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full  hover:bg-brightRedLight baseline'
        >
          Get Started
        </Link>

        {/* Hamburger Icon */}
        <div className='relative group md:hidden focus:outline-none'>
          <button className='hamburger '>
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
          {/* Hamburger Menu */}
          <div className='absolute right-0 pt-4 md:hidden'>
            <div className='flex flex-col rounded-b border-transparent duration-500 group-hover:max-h-72 max-h-0 overflow-hidden self-end font-bold bg-white items-center drop-shadow-md'>
              <Link href='#' className='hover:bg-gray-300 px-32 py-4 w-full'>
                Pricing
              </Link>
              <Link href='#' className='hover:bg-gray-300 px-32 py-4 w-full'>
                Product
              </Link>
              <Link href='#' className='hover:bg-gray-300 px-32 py-4 w-full'>
                About Us
              </Link>
              <Link href='#' className='hover:bg-gray-300 px-32 py-4 w-full'>
                Careers
              </Link>
              <Link href='#' className='hover:bg-gray-300 px-32 py-4 w-full'>
                Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
