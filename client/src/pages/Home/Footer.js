import React from 'react';

export default function Footer() {
  return (
    <div className='py-10'>
      <div className='h-[1px] w-full bg-gray-700 mb-5'></div>
      <div className='flex flex-col items-center sm:flex-row sm:justify-center sm:gap-2 text-center'>
        <h1 className='text-white'>
          Design & Developed by
        </h1>
        <h1 className='text-white'>
          <span className='text-tertiary'> © 2024 Aditya Ojha. All rights reserved.</span>
        </h1>
      </div>
    </div>
  );
}
