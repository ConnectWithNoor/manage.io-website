import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
          <Image src={'/logo.svg'} width={200} height={200} alt='logo' />
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
          className=' hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full  hover:bg-brightRedLight baseline'
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
