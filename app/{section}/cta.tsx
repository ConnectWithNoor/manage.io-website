import Link from 'next/link';

function CTA() {
  return (
    <section id='cta' className='bg-brightRed cta'>
      {/* parent flex container */}
      <div className='container mx-auto flex flex-col items-center justify-between px-6 py-24 space-y-12 md:flex-row md:space-x md:space-y-0'>
        <h2 className='text-5xl font-bold leading-tight text-center md:text-4xl md:max-w-xl md:text-left'>
          Simplify how your team work today
        </h2>
        <div>
          <Link
            href='#'
            className='p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl hover:bg-gray-300 transition duration-150'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
