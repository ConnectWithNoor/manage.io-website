import React from 'react';

function ListItem({
  itemNumber,
  title,
  description,
}: {
  itemNumber: string;
  title: string;
  description: string;
}) {
  return (
    <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
      <div className='rounded-l-full bg-brightRedSuperLight md:bg-transparent'>
        <div className='flex items-center space-x-2 '>
          <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
            {itemNumber}
          </div>
          {/* for small screen only */}
          <h3 className='text-base font-bold md:mb-4 md:hidden'>{title}</h3>
        </div>
      </div>

      <div>
        {/* for medium or bigger screens */}
        <h3 className='hidden mb-4 text-lg font-bold md:block'> {title}</h3>
        <p className='text-darkGrayishBlue'>{description}</p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id='features'>
      {/* parent flex container */}
      <div className='container flex flex-col px-4 mx-auto space-y-12 md:space-y-0 md:flex-row'>
        {/* left child */}
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
            What&apos;s different about Manage.io?
          </h2>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital teams.
          </p>
        </div>
        {/* right child */}
        <div className='flex flex-col space-y-8 md:w-1/2'>
          {/* list items */}

          <ListItem
            itemNumber='01'
            title='Track company wide progress'
            description='See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lost sight of the bigger picture again.'
          />
          <ListItem
            itemNumber='02'
            title='Advanced built-in reports'
            description='Set internal delivery estimates amd track progress towards company goals. Our customisable.'
          />
          <ListItem
            itemNumber='03'
            title='Everything you needed in one place'
            description='Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all in one team productivity solution'
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
