import React from 'react'
import Hero from './components/HeroSection/Hero'
import Navbar from './components/NavberSection/Navber'
import Project from './components/MainSection/ProjectSection/Project'
import About from './components/HeroSection/AboutMe/About'
import TechGlobe from './components/MainSection/Skill'
// import { useState } from 'react';
// const [bgcolor,setBgcolor] = useState('')



function App() {
  return (
    <section  className='relative w-full min-h-screen  bg-[#121212] text-white flex flex-col items-center justify-center px-4 md:px-12 overflow-hidden'>
      
      <Navbar/>
     <Hero/>
     <About/>
     <Project/>
   
    <TechGlobe/>
    </section>

  )
}

export default App