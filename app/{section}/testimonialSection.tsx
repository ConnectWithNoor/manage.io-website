import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function TestimonialBox({
  name,
  description,
  avatar,
  hidden = false,
}: {
  name: string;
  description: string;
  avatar: string;
  hidden?: boolean;
}) {
  return (
    <div
      className={`${
        hidden ? 'hidden md:flex' : 'flex'
      } flex-col items-center p-6 space-y-6 rounded-lg bg-GraySuperLight md:w-1/3`}
    >
      <div className='relative w-16 h-16 -mt-14'>
        <Image src={avatar} fill alt='avatar' />
      </div>
      <h5 className='text-lg font-bold'>{name}</h5>
      <p className='text-sm text-darkGrayishBlue'>{description}</p>
    </div>
  );
}

function TestimonialSection() {
  return (
    <section id='testimonial'>
      {/* parent flex container */}
      <div className='container max-w-6xl px-5 mx-auto mt-32 text-center'>
        <h2 className='text-4xl font-bold text-center'>
          What&apos;s the difference about Manage.io?
        </h2>

        {/* testimonial container */}
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
          <TestimonialBox
            avatar='/avatar-anisha.png'
            name='Anisha Li'
            description={`"Manage.io has supercharged our team's workflow. The ability to maintain visibilty on larger milestones at all times keeps everyone motivated."`}
          />
          <TestimonialBox
            avatar='/avatar-ali.png'
            name='Rubica Aslam'
            hidden={true}
            description={`"We have been able to cancel so many other subscriptions since using Manage.io There is no more cross-channel confusion and everyone is much more focused."`}
          />
          <TestimonialBox
            avatar='/avatar-richard.png'
            name='Richard Robinson'
            hidden={true}
            description={`"Manage.io has supercharged our team's workflow. The ability to maintain visibilty on larger milestones at all times keeps everyone motivated."`}
          />
        </div>

        <div className='my-16'>
          <Link
            href='#'
            className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight baseline'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
