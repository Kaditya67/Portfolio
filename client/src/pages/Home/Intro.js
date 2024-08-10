import React from 'react';
import { useSelector } from 'react-redux';

export default function Intro() {
  const { loading, portfolioData } = useSelector(state => state.root || {});
  const {intro}=portfolioData;
  const {name,caption,description}=intro;

  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 w-full py-10 md:pt-20 ssm:py-5 ssm:px-5 ssm:h-auto'>
      <h1 className='text-white'>Hi, I am</h1>
      <h1 className='text-secondary text-7xl ssm:text-3xl font-semibold'>{name}</h1>
      <h1 className='text-white text-6xl ssm:text-3xl font-semibold'>{caption}</h1>
      <p className='text-white w-2/3 md:w-full ssm:w-full'>
       {description}
      </p>
      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>
        Contact Me
      </button>
    </div>
  );
}
