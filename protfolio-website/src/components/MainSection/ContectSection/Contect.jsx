import React from 'react'
import ContectForm from './ContectForm'

function Contect() {
  return (
    <>
    <section id='contact' className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 z-10">
      
      {/* সেকশন হেডার */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-white/70 font-medium">
            Get In Touch
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
          Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">Together</span>
        </h2>
        <p className="text-neutral-400 text-sm font-light mt-2">
          Have a project in mind, a question, or want to collaborate? My inbox is always open.
        </p>
      </div>

    <ContectForm/>

    </section>
    </>
  )
}

export default Contect