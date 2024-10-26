import React from 'react';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';
import { useSelector } from 'react-redux';

export default function Home() {
  const { portfolioData } = useSelector(state => state.root || {});

  return (
    <>
      <Header />
      {portfolioData && (
        <div className='bg-primary px-8 sm:px-20 lg:px-40 xl:px-100'>
          <Intro />
          <About />
          <Experience />
          <Project />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
    </>
  );
}