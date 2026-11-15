import React from 'react'

function ProjectDetails({ selectedProject, isDarkMode, viewdetals }) {
  if (!selectedProject) return null;

  return (
    <>
      {/* ব্যাকগ্রাউন্ড ওভারলে */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300">
        
        {/* মোডাল বক্স: মোবাইলের জন্য max-h এবং overflow-y-auto যুক্ত করা হয়েছে */}
        <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-5 sm:p-8 rounded-3xl border shadow-2xl transform transition-all duration-300 custom-scrollbar ${
          isDarkMode ? 'bg-[#161616] border-neutral-700 text-white' : 'bg-slate-900 border-slate-700 text-white'
        }`}>
          
          {/* ক্লোজ বাটন (স্টিকি করা হয়েছে যাতে স্ক্রল করলেও উপরে থাকে) */}
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

          {/* প্রজেক্ট ইমেজ (মোবাইলে হাইট একটু ছোট করা হয়েছে) */}
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
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 border-t border-white/10">
            {selectedProject.tech?.map((t, idx) => (
              <span key={idx} className="px-2.5 py-1 text-[10px] sm:text-xs font-mono rounded bg-white/5 border border-white/10 text-neutral-300">
                {t}
              </span>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default ProjectDetails