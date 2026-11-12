import React from 'react'

function LeftCard() {
  return (
    <>
     <div className='w-full md:w-1/2 z-10 text-left space-y-4'>
     {/* status */}
   <div className="inline-flex items-center gap-2  px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop:backdrop-blur-md">
   <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
   <span className="text-xs uppercase tracking-widest text-white/70 font-medium ">Full-Stack Developer</span>
   </div>

   <div>
    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_10px_20px_rgba(255,255,255,0.15)]">Hi,</h1>
    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] pt-1">I'm Shopnil Hawlader</h1>
   </div>
   <p className='text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-md'>
     Specializing in robust backend architecture, scalable REST APIs, and secure database management with Python, Django, and MySQL.
            
   </p>
   <div className='flex flex-wrap gap-2 pt-1'>
              <span className='px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-neutral-300'>Python</span>
              <span className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-neutral-300">Django</span>
              <span className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-neutral-300">MySQL / PostgreSQL</span>
              <span className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-neutral-300">REST APIs</span>
  </div>

  <div className='flex items-center gap-4 pt-4'>
       <a 
                href="#projects" 
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-xl bg-transparent border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Contact Me
              </a>
  </div>
    </div>
    </>
  )
}

export default LeftCard