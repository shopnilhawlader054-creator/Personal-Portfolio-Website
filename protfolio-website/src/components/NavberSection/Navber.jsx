import React from 'react'
import Logo from './logo'
import DarkMode from './DarkMode'
function Navber() {
  return (
    <header className=' fixed top-0 w-full left-0 z-50  bg-[#121212]/80 backdrop:backdrop-blur-md  border-b border-white/10  transition-all duration-300'>
       <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
         {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] shrink-0 group-hover:bg-white/10 transition-all">
            SH
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            Shopnil<span className="text-neutral-500">.</span>
          </span>
        </a>

       <Logo/>
       <DarkMode/>
       </div>
    </header>
  )
}

export default Navber