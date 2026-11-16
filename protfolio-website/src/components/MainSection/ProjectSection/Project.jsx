import React from 'react'
import ProjectHeader from './ProjectHeader'
import ProjectCard from './ProjectCard'

function Project({ isDarkMode,safePackingImg}) {
  return (
   <section id='projects' className='relative w-full py-24 px-4 md:px-12 max-w-7xl mx-auto text-white'>
    <ProjectHeader/>
    <ProjectCard  isDarkMode={ isDarkMode} safePackingImg={safePackingImg}/>
    </section>
  )
}

export default Project