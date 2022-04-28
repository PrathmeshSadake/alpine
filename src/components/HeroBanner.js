import React from 'react';

const HeroBanner = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center'>
      <div>
        <h1 className='dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize'>
          Modern Interior Decor
        </h1>
        <p className='dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5'>
          Get inspired by our curated selection of luxiwood interiors. We hope
          get inspired to have luxiwood interior yourself. You’ll find tips here
          where you can buy a lot of cool furniture,decorations, plants, etc.
        </p>
        <button className='dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center'>
          Explore
          <div className='ml-2 mt-0.5'>
            <svg
              className='fill-stroke'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.33325 8H12.6666'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10 10.6667L12.6667 8'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10 5.33301L12.6667 7.99967'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
