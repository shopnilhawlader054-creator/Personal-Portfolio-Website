import React from 'react'
import AnimationSkill from './3Dskill'
import SkillCard from './SkillCard'
function Skill() {
  return (
        <section id="skills" className="relative w-full py-24 px-4 md:px-12 max-w-6xl mx-auto text-white flex flex-col items-center justify-center overflow-hidden">
    
      {/* সেকশন হেডার */}
      <div className="text-center mb-16 z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-white/70 font-medium">Interactive Skill Orbit</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          Tech Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">Universe</span>
        </h2>
        <p className="text-neutral-400 text-sm md:text-base font-light mt-2 max-w-lg mx-auto">
          Core languages, frameworks, and tools I use to architect robust digital solutions.
        </p>
         
      </div>

    <AnimationSkill/>
    <SkillCard/>
    

     </section>
      
  )
}

export default Skill