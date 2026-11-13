import React from 'react'
import ProjectHeader from './ProjectHeader'
import ProjectCard from './ProjectCard'

function Project() {
  return (
   <section id='projects' className='relative w-full py-24 px-4 md:px-12 max-w-7xl mx-auto text-white'>
    <ProjectHeader/>
    <ProjectCard/>
    </section>
  )
}

export default Project