import React from 'react';

function SocialDropdown({isDarkMode }) {
  return (
    /* 
      isDarkMode true হলে -> আপনার ওয়েবসাইটের ব্যাকগ্রাউন্ড #121212
      isDarkMode false হলে -> আপনার দেওয়া ব্যাকগ্রাউন্ড #0f172a
    */
    <div className={`w-full md:absolute md:right-0 md:top-full md:mt-2 md:w-56 p-3 rounded-2xl border backdrop-blur-2xl shadow-2xl z-50 flex flex-col space-y-2 animate-fadeIn transition-colors duration-300 ${
      isDarkMode 
        ?  'bg-[#121212]/95 border-neutral-800 text-white' 
        : 'bg-[#0f172a]/95 border-slate-700/80 text-slate-100'
    }`}>
      
      {/* হেডার লেবেল */}
      <div className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 border-b ${
        isDarkMode 
          ? 'text-neutral-400 border-neutral-800' 
          : 'text-slate-400 border-slate-700/80'
      }`}>
        Social Links
      </div>

      {/* GitHub Link */}
      <a
        href="https://github.com/shopnilhawlader054-creator"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all text-xs font-medium group ${
          isDarkMode 
            ? 'bg-white/[0.03] border-neutral-800 text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-neutral-700' 
            : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-700/80 hover:border-slate-600'
        }`}
      >
        <span>GitHub</span>
        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://www.linkedin.com/in/shopnil-hawlader-560929418"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all text-xs font-medium group ${
          isDarkMode 
            ? 'bg-white/[0.03] border-neutral-800 text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-neutral-700' 
            : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-700/80 hover:border-slate-600'
        }`}
      >
        <span>LinkedIn</span>
        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
      </a>

      {/* Email Link */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=shopnilhawlader054@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-between px-3 py-2.5 rounded-xl border transition-all text-xs font-medium group ${
          isDarkMode 
            ? 'bg-white/[0.03] border-neutral-800 text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-neutral-700' 
            : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-700/80 hover:border-slate-600'
        }`}
      >
        <span>Email</span>
        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
      </a>

    </div>
  );
}

export default SocialDropdown;