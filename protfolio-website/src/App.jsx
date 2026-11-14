import React from 'react'
import Hero from './components/HeroSection/Hero'
import Navbar from './components/NavberSection/Navber'
import Project from './components/MainSection/ProjectSection/Project'
import About from './components/HeroSection/AboutMe/About'
import Skill from './components/MainSection/SkillSection/Skill'
import Contect from './components/MainSection/ContectSection/Contect'
import Fotter from './components/FotterSection/Fotter'
import { useState } from 'react';
// const [bgcolor,setBgcolor] = useState('')



function App() {
    const[isDarkMode,setIsDarkMode] = useState(true)
     function darkbtn(){
    setIsDarkMode(!isDarkMode)
   }
  return (
    <>
    <section id='Home'  className={`relative w-full min-h-screen ${ isDarkMode ?' bg-[#121212]': 'bg-[#0f172a]'} text-white flex flex-col items-center justify-center px-4 md:px-12 overflow-hidden`}>
      
    <Navbar DarkModeFunction={darkbtn} isDarkMode={isDarkMode}/>
     <Hero/>
     <About/>
     <Project  isDarkMode={isDarkMode}/>
   
    <Skill  isDarkMode={isDarkMode}/>
    <Contect/>
    
    </section>
    <Fotter/>
    </>

  )
}

export default App