import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer id='footer' className='bg-darkBlueSuper'>
      {/* parent flex container */}
      <div className='container mx-auto flex flex-col-reverse justify-between px-6 py-10 space-y-8 md:space-y-0 md:flex-row'>
        {/* logo and social icons */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
          </div>
          <div className='relative w-48 h-8'>
            <Image src='/logo-white.svg' fill alt='logo' />
          </div>
          <div className='flex justify-center space-x-4'>
            <Link href='#' className='relative w-8 h-8'>
              <Image src='/icon-facebook.svg' fill alt='logo' />
            </Link>

            <Link href='#' className='relative w-8 h-8'>
              <Image src='/icon-youtube.svg' fill alt='logo' />
            </Link>

            <Link href='#' className='relative w-8 h-8'>
              <Image src='/icon-twitter.svg' fill alt='logo' />
            </Link>

            <Link href='#' className='relative w-8 h-8'>
              <Image src='/icon-pinterest.svg' fill alt='logo' />
            </Link>

            <Link href='#' className='relative w-8 h-8'>
              <Image src='/icon-instagram.svg' fill alt='logo' />
            </Link>
          </div>
        </div>

        {/* List container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <Link href='#' className='hover:text-brightRed'>
              Home
            </Link>
            <Link href='#' className='hover:text-brightRed'>
              Pricing
            </Link>
            <Link href='#' className='hover:text-brightRed'>
              Products
            </Link>
            <Link href='#' className='hover:text-brightRed'>
              About
            </Link>
            <Link href='#' className='hover:text-brightRed'>
              Home
            </Link>
          </div>

          <div className='flex flex-col space-y-3 text-white'>
            <Link href='#' className='hover:text-brightRed'>
              Careers
            </Link>
            <Link href='#' className='hover:text-brightRed'>
              Community
            </Link>
            <Link href='#' className='hover:text-brightRed'>
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* input container */}
        <div className='flex flex-col justify-between'>
          <form>
            <div className='flex space-x-3'>
              <input
                type='text'
                className='flex-1 px-4 rounded-full focus:outline-none placeholder:italic'
                placeholder='Updates in your inbox'
              />
              <button
                type='button'
                className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'
              >
                Go
              </button>
            </div>
          </form>
          <div className='hidden text-white md:block'>
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
