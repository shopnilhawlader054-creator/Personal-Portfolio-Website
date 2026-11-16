import React from 'react'

function ProjectDetails({ selectedProject, isDarkMode, viewdetals }) {
  if (!selectedProject) return null;

  return (
    <>
      {/* ব্যাকগ্রাউন্ড ওভারলে */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300">
        
        {/* মোডাল বক্স */}
        <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-5 sm:p-8 rounded-3xl border shadow-2xl transform transition-all duration-300 custom-scrollbar ${
          isDarkMode ? 'bg-[#161616] border-neutral-700 text-white' : 'bg-slate-900 border-slate-700 text-white'
        }`}>
          
          {/* ক্লোজ বাটন */}
          <button 
            onClick={() => viewdetals()}
            className="sticky top-0 float-right z-10 w-8 h-8 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-white flex items-center justify-center text-sm font-mono transition-colors cursor-pointer shadow-lg"
          >
            ✕
          </button>

          {/* মোডাল হেডার */}
          <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
            {selectedProject.category}
          </span>
          <h2 className="text-xl sm:text-3xl font-bold mb-3 pr-8">
            {selectedProject.title}
          </h2>

          {/* প্রজেক্ট ইমেজ */}
          <div className="w-full h-40 sm:h-60 rounded-xl overflow-hidden mb-4 border border-white/10">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* লং ডেসক্রিপশন */}
          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
            {selectedProject.longDesc}
          </p>

          {/* মূল ফিচারসমূহ */}
          <div className="mb-5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
              Key Features:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedProject.features?.map((feature, idx) => (
                <li key={idx} className="text-[11px] sm:text-xs font-mono text-neutral-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* টেকনোলজি ট্যাগ */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 pt-3 border-t border-white/10">
            {selectedProject.tech?.map((t, idx) => (
              <span key={idx} className="px-2.5 py-1 text-[10px] sm:text-xs font-mono rounded bg-white/5 border border-white/10 text-neutral-300">
                {t}
              </span>
            ))}
          </div>

          {/* অ্যাকশন বাটনসমূহ (GitHub Repo & Live Demo) */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            
            {/* GitHub Repo Button */}
             
              <a 
                href={selectedProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-mono font-medium transition-all flex items-center justify-center gap-2 group"
              >
                <span>GitHub Repo</span>
                <span className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
          

            {/* Live Demo Button */}
            {selectedProject.live && (
              <a 
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[130px] px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs sm:text-sm font-mono font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 group"
              >
                <span>Live Preview</span>
                <span className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            )}

          </div>

        </div>
      </div>
    </>
  )
}

export default ProjectDetails;