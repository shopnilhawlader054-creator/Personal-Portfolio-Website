import React from 'react'
import Hero from './components/HeroSection/Hero'
import Navbar from './components/NavberSection/Navber'
import Project from './components/MainSection/ProjectSection/Project'
import About from './components/HeroSection/AboutMe/About'
import Skill from './components/MainSection/SkillSection/Skill'
import Contect from './components/MainSection/ContectSection/Contect'
import Fotter from './components/FotterSection/Fotter'
// import { useState } from 'react';
// const [bgcolor,setBgcolor] = useState('')



function App() {
  return (
    <>
    <section id='Home'  className='relative w-full min-h-screen  bg-[#121212] text-white flex flex-col items-center justify-center px-4 md:px-12 overflow-hidden'>
      
    <Navbar/>
     <Hero/>
     <About/>
     <Project/>
   
    <Skill/>
    <Contect/>
    
    </section>
    <Fotter/>
    </>

  )
}

export default App