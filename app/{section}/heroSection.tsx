import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function HeroSection() {
  return (
    <section id='hero'>
      {/* parent flex container */}
      <div className='container mx-auto flex flex-col-reverse md:flex-row items-center px-6 mt-10 space-y-0 md:space-y-0'>
        {/* left child */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Bring everyone together to build better products
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Manage.io makes it simple for software teams to plan day-to-day
            tasks while keeing the large team goals in view.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              href='#'
              className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full  hover:bg-brightRedLight baseline'
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* right child */}
        <div className='md:w-1/2'>
          <Image
            src={'/illustration-intro.svg'}
            alt='hero-image'
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
