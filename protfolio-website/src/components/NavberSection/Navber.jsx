import React from 'react'
import PcCard from './NavberCard/PcCard';
import DarkMode from './DarkMode'
import HmgBtn from './HmgBtn';
import MobileCard from './NavberCard/MobileCard';

import Logo from './logo';
import { useState } from 'react';
function Navber() {
   const [isOpen, setIsOpen] = useState(false);
   const [activeSection, setActiveSection] = useState('Home');
   
   function navcardbtn(card){
    setActiveSection(card)
   }
   function hmgbtn(){
    setIsOpen(!isOpen)
   }
        const navLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'More', href: '#More'},
  ];


  return (
    <header className=' fixed top-0 w-full left-0 z-50  bg-[#121212]/80 backdrop:backdrop-blur-md  border-b border-white/10  transition-all duration-300'>
       <div className="relative max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Logo/>

     <PcCard navLinks={navLinks} navcardbtn={navcardbtn} activeSection={activeSection}/>
   
     <div className="flex items-center  gap-3">
       <DarkMode/>
       <HmgBtn hmgbtn={hmgbtn} isOpen={isOpen}/>

     </div>
      <MobileCard  hmgbtn={hmgbtn} isOpen={isOpen} navLinks={navLinks} navcardbtn={navcardbtn} activeSection={activeSection}/>
       </div>
     
    </header>
  )
}

export default Navber




