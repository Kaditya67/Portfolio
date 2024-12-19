// src/App.jsx
import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      
      <Element name="home">
        <Home />
      </Element>
      
      <Element name="about">
        <About />
      </Element>
      
      <Element name="skills">
        <Skills />
      </Element>
      
      <Element name="projects">
        <Projects />
      </Element>
      
      <Element name="contact">
        <Contact />
      </Element>
      
      <Footer />
    </>
  );
}

export default App;
