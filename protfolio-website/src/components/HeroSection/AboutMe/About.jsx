import React from 'react'
import LeftCard from './LeftCard'
import RightCard from './RightCard'

function About() {
  return (
<section 
      id="about" 
      className="relative w-full min-h-[80vh] py-24 px-4 md:px-12 max-w-6xl mx-auto text-white flex items-center overflow-hidden">
        <div className="w-full  grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
         <LeftCard/>
         <RightCard/>
         
        </div>
      
    </section>
  )
}

export default About