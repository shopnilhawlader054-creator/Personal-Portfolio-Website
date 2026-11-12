import React from 'react'

function ProjectHeader() {
  return (
    <>
      {/* সেকশন হেডার */}
 {/* সেকশন হেডার */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-white/70 font-medium">Multi-TV Project Channel</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          Featured Works on <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">Retro Channels</span>
        </h2>
      </div>

    </>
  )
}

export default ProjectHeader