import React from 'react';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experience from '../Experience';

export default function Home() {
  return (
    <>
      <Header />
      <div className='bg-primary px-8 sm:px-20 lg:px-40 xl:px-100'>
        <Intro />
        <About />
        <Experience />
      </div>
    </>
  );
}
