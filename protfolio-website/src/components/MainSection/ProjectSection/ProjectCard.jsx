import React from 'react'

function ProjectCard({isDarkMode}) {
  const projects = [
    {
      id: 1,
      title: "Pack Solution BD",
      category: "Full-Stack E-commerce",
      desc: "Custom e-commerce landing page & order management system with custom admin views.",
      tech: ["Django", "PostgreSQL", "Tailwind"],
      image: "https://images.unsplash.com/photo-1557821552-17105176674c?w=600&auto=format&fit=crop&q=60" 
    },
    {
      id: 2,
      title: "Blood Donate System",
      category: "Web Application",
      desc: "Donor profiles, multi-field filtering, and secure user authentication workflow.",
      tech: ["Django", "Python", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "Bank Management App",
      category: "Frontend UI",
      desc: "Interactive dashboard with React Router DOM, state management, and Tailwind.",
      tech: ["React", "Vite", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <>
      {/* স্ক্যানলাইনের জন্য CSS */}
      <style>{`
        .scanlines {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0, 0, 0, 0.25) 50%,
            rgba(0, 0, 0, 0.25)
          );
          background-size: 100% 4px;
        }
      `}</style>

      {/* প্রজেক্ট অনুযায়ী একাধিক টিভি গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`relative p-5 rounded-3xl border-2 shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group transition-all duration-300 ${
              isDarkMode 
                ? 'bg-[#161616] border-[#262626] hover:border-white/20' 
                : 'bg-[#1e293b] border-slate-700/80 hover:border-sky-400/30'
            }`}
          >
            {/* টিভির ছোট অ্যান্টেনা */}
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-4 rounded-t-md border-t flex justify-center items-center transition-colors duration-300 ${
              isDarkMode ? 'bg-[#222] border-neutral-700' : 'bg-slate-800 border-slate-600'
            }`}>
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-ping"></div>
            </div>

            {/* টিভি স্ক্রিন (কন্ডিশনাল ব্যাকগ্রাউন্ড গ্রেডিয়েন্টসহ) */}
            <div 
              className={`relative w-full h-[220px] rounded-xl overflow-hidden border flex flex-col justify-between p-4 transition-all duration-300 ${
                isDarkMode ? 'border-neutral-800' : 'border-slate-700'
              }`}
              style={{
                background: isDarkMode 
                  ? 'radial-gradient(circle at center, #1f1f1f 0%, #0a0a0a 100%)' 
                  : 'radial-gradient(circle at center, #334155 0%, #0f172a 100%)',
                boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.9)'
              }}
            >
              
              {/* স্ক্যানলাইন ওভারলে */}
              <div className="absolute inset-0 scanlines pointer-events-none z-20 opacity-50"></div>

              {/* ব্যাকগ্রাউন্ড প্রজেক্ট ইমেজ */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
              </div>

              {/* স্ক্রিন হেডার (চ্যানেল ইনফো) */}
              <div className={`relative z-30 flex justify-between items-center text-[10px] font-mono px-2 py-1 rounded backdrop-blur-sm transition-colors duration-300 ${
                isDarkMode ? 'text-neutral-300 bg-black/60' : 'text-slate-200 bg-slate-950/70'
              }`}>
                <span>CH 0{index + 1}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> LIVE
                </span>
              </div>

              {/* স্ক্রিন ফুটার (প্রজেক্ট টাইটেল ওভারলে) */}
              <div className={`relative z-30 backdrop-blur-md p-2.5 rounded-lg border transition-colors duration-300 ${
                isDarkMode ? 'bg-black/70 border-white/10' : 'bg-slate-950/75 border-slate-700/50'
              }`}>
                <h3 className="text-base font-bold text-white truncate">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-xs line-clamp-1 font-light mt-0.5">
                  {project.desc}
                </p>
              </div>
            </div>

            {/* টিভির নিচের কন্ট্রোল প্যানেল ও টেকনোলজি ট্যাগ */}
            <div className={`mt-4 pt-3 border-t flex flex-col gap-3 transition-colors duration-300 ${
              isDarkMode ? 'border-neutral-800' : 'border-slate-700/70'
            }`}>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span key={idx} className={`px-2 py-0.5 text-[10px] font-mono rounded border transition-colors duration-300 ${
                    isDarkMode ? 'bg-white/5 border-white/10 text-neutral-300' : 'bg-slate-800 border-slate-600 text-slate-200'
                  }`}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-1">
                <span>MODEL: CRT-V{index + 1}</span>
                <a 
                  href="#contact" 
                  className="text-white hover:underline flex items-center gap-1 font-medium"
                >
                  View Details →
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectCard