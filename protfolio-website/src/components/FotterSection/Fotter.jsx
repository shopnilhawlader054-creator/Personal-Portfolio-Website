import React from 'react';

function Footer({ isDarkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* একবার টাইপ হয়ে থেমে যাওয়ার জন্য কাস্টম CSS অ্যানিমেশন */}
      <style>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          0%, 100% { border-color: rgba(255, 255, 255, 0.7); }
          50% { border-color: transparent; }
        }
        .animate-typing-once {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid rgba(255, 255, 255, 0.7);
          animation: typing 3s steps(18, end) 1 forwards, blink 0.8s infinite;
        }
      `}</style>

      <footer className={`w-full border-t py-8 sm:py-12 px-4 sm:px-8 relative z-10 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-neutral-950 border-white/10 text-white' 
          : 'bg-[#0f172a] border-slate-800 text-slate-100'
      }`}>
        {/* 
          মোবাইলে flex-col দিয়ে উপরে নাম এবং নিচে বাটনগুলো সাজানো হয়েছে (space-y-6)
          md:flex-row দিয়ে পিসিতে আবার আগের মতো পাশাপাশি রাখা হয়েছে 
        */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
          
          {/* বাম পাশ / উপরে: সিগনেচার স্টাইল এবং টাইপিং অ্যানিমেশন নাম */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif italic tracking-wide inline-block">
              <span className="inline-block animate-typing-once pr-1">
                Shopnil Hawlader
              </span>
            </h3>
            <p className={`text-[11px] sm:text-xs font-mono uppercase tracking-widest mt-1.5 ${
              isDarkMode ? 'text-neutral-400' : 'text-slate-400'
            }`}>
              Full-Stack Developer © {currentYear}
            </p>
          </div>

          {/* ডান পাশ / নিচে: সোশ্যাল ও কন্টাক্ট লিংকসমূহ 
              flex-wrap এবং justify-center দিয়ে মোবাইলে বাটনগুলো ভেঙে নিচে সুন্দরভাবে র‍্যাপ হবে 
          */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-4 w-full md:w-auto">
            
            {/* GitHub */}
            <a
              href="https://github.com/shopnilhawlader054-creator" 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border text-xs font-medium transition-all flex items-center gap-2 group ${
                isDarkMode 
                  ? 'bg-white/[0.02] border-white/10 text-neutral-300 hover:text-white hover:border-white/25 hover:bg-white/[0.06]' 
                  : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-900'
              }`}
            >
              <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-mono transition-colors ${
                isDarkMode ? 'bg-white/10 group-hover:bg-white group-hover:text-black' : 'bg-slate-800 group-hover:bg-slate-100 group-hover:text-slate-950'
              }`}>
                GH
              </span>
              <span className="font-mono tracking-wide">GitHub</span>
              <span className={`text-[10px] transition-all ${isDarkMode ? 'text-neutral-500 group-hover:text-white' : 'text-slate-400 group-hover:text-white'} group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}>↗</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shopnil-hawlader-560929418" 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border text-xs font-medium transition-all flex items-center gap-2 group ${
                isDarkMode 
                  ? 'bg-white/[0.02] border-white/10 text-neutral-300 hover:text-white hover:border-white/25 hover:bg-white/[0.06]' 
                  : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-900'
              }`}
            >
              <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-mono transition-colors ${
                isDarkMode ? 'bg-white/10 group-hover:bg-white group-hover:text-black' : 'bg-slate-800 group-hover:bg-slate-100 group-hover:text-slate-950'
              }`}>
                IN
              </span>
              <span className="font-mono tracking-wide">LinkedIn</span>
              <span className={`text-[10px] transition-all ${isDarkMode ? 'text-neutral-500 group-hover:text-white' : 'text-slate-400 group-hover:text-white'} group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}>↗</span>
            </a>

            {/* Email (Gmail Web Compose Link) */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shopnilhawlader054@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border text-xs font-medium transition-all flex items-center gap-2 group ${
                isDarkMode 
                  ? 'bg-white/[0.02] border-white/10 text-neutral-300 hover:text-white hover:border-white/25 hover:bg-white/[0.06]' 
                  : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-900'
              }`}
            >
              <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-mono transition-colors ${
                isDarkMode ? 'bg-white/10 group-hover:bg-white group-hover:text-black' : 'bg-slate-800 group-hover:bg-slate-100 group-hover:text-slate-950'
              }`}>
                ✉
              </span>
              <span className="font-mono tracking-wide">Email</span>
              <span className={`text-[10px] transition-all ${isDarkMode ? 'text-neutral-500 group-hover:text-white' : 'text-slate-400 group-hover:text-white'} group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}>↗</span>
            </a>

          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;