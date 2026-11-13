import React from 'react'

function logo() {
  return (
    <>
     {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] shrink-0 group-hover:bg-white/10 transition-all">
            SH
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            Shopnil<span className="text-neutral-500">.</span>
          </span>
        </a>
    </>
  )
}

export default logo