import React from 'react';

export default function RetroTVProjects() {
  // আপনার প্রজেক্টগুলোর তালিকা এবং ইমেজ পাথ বা লিঙ্ক
  const projects = [
    {
      id: 1,
      title: "Pack Solution BD",
      category: "Full-Stack E-commerce",
      desc: "Custom e-commerce landing page & order management system with custom admin views.",
      tech: ["Django", "PostgreSQL", "Tailwind"],
      // এখানে আপনার প্রজেক্টের ইমেজের লিঙ্ক বা লোকাল পাথ বসাবেন
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
    <section id="projects" className="relative w-full py-24 px-4 md:px-12 max-w-7xl mx-auto text-white">
      
      {/* কাস্টম CRT টিভি ও স্ক্যানলাইনের জন্য CSS */}
      <style>{`
        .crt-screen {
          background: radial-gradient(circle at center, #1f1f1f 0%, #0a0a0a 100%);
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.9);
        }
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

      {/* প্রজেক্ট অনুযায়ী একাধিক টিভি গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="relative p-5 rounded-3xl bg-[#161616] border-2 border-[#262626] shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
          >
            {/* টিভির ছোট অ্যান্টেনা */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#222] rounded-t-md border-t border-neutral-700 flex justify-center items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-ping"></div>
            </div>

            {/* টিভি স্ক্রিন (যেখানে প্রজেক্ট ইমেজ ও ডিটেইলস থাকবে) */}
            <div className="relative w-full h-[220px] rounded-xl crt-screen overflow-hidden border border-neutral-800 flex flex-col justify-between p-4">
              
              {/* স্ক্যানলাইন ওভারলে */}
              <div className="absolute inset-0 scanlines pointer-events-none z-20 opacity-50"></div>

              {/* ব্যাকগ্রাউন্ড প্রজেক্ট ইমেজ (স্ক্রিনের ভেতরে শো করবে) */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
              </div>

              {/* স্ক্রিন হেডার (চ্যানেল ইনফো) */}
              <div className="relative z-30 flex justify-between items-center text-[10px] font-mono text-neutral-300 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                <span>CH 0{index + 1}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> LIVE
                </span>
              </div>

              {/* স্ক্রিন ফুটার (প্রজেক্ট টাইটেল ওভারলে) */}
              <div className="relative z-30 bg-black/70 backdrop-blur-md p-2.5 rounded-lg border border-white/10">
                <h3 className="text-base font-bold text-white truncate">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-xs line-clamp-1 font-light mt-0.5">
                  {project.desc}
                </p>
              </div>
            </div>

            {/* টিভির নিচের কন্ট্রোল প্যানেল ও টেকনোলজি ট্যাগ */}
            <div className="mt-4 pt-3 border-t border-neutral-800 flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/10 text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-1">
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

    </section>
  );
}