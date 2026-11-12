import React from 'react'
import { useState } from 'react';

function Logo() {
    const[activeSection,setActiveSection] = useState('Home');
      const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'More', href: '#More' },
  ];
  return (
    <>
    <nav className='hidden md:flex items-center  gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md'>
        
        {navLinks.map((link)=>{
          const isActive = activeSection === link.name
          return(
            <a
            key={link.name}
            href={link.href}
            onClick={() =>setActiveSection(link.name)}
            className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-black bg-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                     : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }` }>
                    {link.name}
                </a>

                
          )
        })

        }
    </nav>
    
    </>
  )
}

export default Logo