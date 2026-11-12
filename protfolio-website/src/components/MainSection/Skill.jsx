import React from 'react';

export default function TechGlobe() {
  // আপনার মূল টেকনোলজি ও টুলসগুলোর তালিকা
  const techStack = [
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🚀" },
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "JS" },
    { name: "Tailwind", icon: "🎨" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git", icon: "📦" },
    { name: "REST APIs", icon: "⚡" }
  ];

  return (
    <section id="skills" className="relative w-full py-24 px-4 md:px-12 max-w-6xl mx-auto text-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* কাস্টম স্পিনিং ও অরবিট অ্যানিমেশনের জন্য CSS */}
      <style>{`
        @keyframes orbitSlow {
          0% { transform: rotate(0deg) translate(130px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(130px) rotate(-360deg); }
        }
        @keyframes orbitReverse {
          0% { transform: rotate(360deg) translate(100px) rotate(-360deg); }
          100% { transform: rotate(0deg) translate(100px) rotate(0deg); }
        }
        .orbit-item-1 { animation: orbitSlow 18s linear infinite; }
        .orbit-item-2 { animation: orbitReverse 14s linear infinite; }
        .orbit-item-3 { animation: orbitSlow 22s linear infinite; }
        .orbit-item-4 { animation: orbitReverse 16s linear infinite; }
      `}</style>

      {/* সেকশন হেডার */}
      <div className="text-center mb-16 z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-white/70 font-medium">Interactive Skill Orbit</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          Tech Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">Universe</span>
        </h2>
        <p className="text-neutral-400 text-sm md:text-base font-light mt-2 max-w-lg mx-auto">
          Core languages, frameworks, and tools I use to architect robust digital solutions.
        </p>
      </div>

      {/* সেন্ট্রাল গ্লোব বা অরবিট কন্টেইনার */}
      <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] flex items-center justify-center my-6">
        
        {/* ব্যাকগ্রাউন্ড সফট গ্লো ইফেক্ট */}
        <div className="absolute w-48 h-48 bg-white/[0.04] rounded-full blur-3xl pointer-events-none"></div>

        {/* সেন্ট্রাল কোর (আপনার নামের প্রথম অক্ষর বা লোগো) */}
        <div className="relative z-20 w-24 h-24 rounded-2xl bg-white/[0.03] border border-white/15 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <span className="text-2xl font-black tracking-tighter text-white">SH</span>
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mt-0.5">Core</span>
        </div>

        {/* অরবিট রিং ১ (ডটেড বর্ডার) */}
        <div className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border border-dashed border-white/10 pointer-events-none"></div>
        
        {/* অরবিট রিং ২ */}
        <div className="absolute w-[320px] h-[320px] md:w-[360px] md:h-[360px] rounded-full border border-white/5 pointer-events-none"></div>

        {/* ঘূর্ণায়মান আইকনসমূহ (Floating Orbiting Tech Cards) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          
          {/* আইকন ১: Python */}
          <div className="absolute orbit-item-1 pointer-events-auto cursor-pointer">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-white/15 backdrop-blur-md shadow-lg hover:border-white/30 transition-all hover:scale-110">
              <span className="text-base">🐍</span>
              <span className="text-xs font-mono text-white font-medium">Python</span>
            </div>
          </div>

          {/* আইকন ২: React */}
          <div className="absolute orbit-item-2 pointer-events-auto cursor-pointer">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-white/15 backdrop-blur-md shadow-lg hover:border-white/30 transition-all hover:scale-110">
              <span className="text-base">⚛️</span>
              <span className="text-xs font-mono text-white font-medium">React</span>
            </div>
          </div>

          {/* আইকন ৩: Django */}
          <div className="absolute orbit-item-3 pointer-events-auto cursor-pointer">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-white/15 backdrop-blur-md shadow-lg hover:border-white/30 transition-all hover:scale-110">
              <span className="text-base">🚀</span>
              <span className="text-xs font-mono text-white font-medium">Django</span>
            </div>
          </div>

          {/* আইকন ৪: Tailwind */}
          <div className="absolute orbit-item-4 pointer-events-auto cursor-pointer">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-white/15 backdrop-blur-md shadow-lg hover:border-white/30 transition-all hover:scale-110">
              <span className="text-base">🎨</span>
              <span className="text-xs font-mono text-white font-medium">Tailwind</span>
            </div>
          </div>

        </div>

      </div>

      {/* নিচের দিকে সমস্ত স্কিল ব্যাজের একটি ক্লিন গ্রিড (সহজে পড়ার জন্য) */}
      <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 z-10">
        {techStack.map((tech, index) => (
          <div 
            key={index}
            className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex items-center gap-3 hover:border-white/20 transition-all group"
          >
            <span className="text-xl p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
              {tech.icon}
            </span>
            <div>
              <h4 className="text-sm font-semibold text-white">{tech.name}</h4>
              <span className="text-[11px] text-neutral-400 font-mono">Verified Stack</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}