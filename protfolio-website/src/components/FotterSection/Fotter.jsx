import React from 'react';

function Footer() {
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

      <footer className="w-full bg-neutral-950 border-t border-white/10 py-10 sm:py-12 px-4 sm:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* বাম পাশ: সিগনেচার স্টাইল এবং টাইপিং অ্যানিমেশন নাম */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif italic tracking-wide text-white inline-block">
              <span className="inline-block animate-typing-once pr-1">
                Shopnil Hawlader
              </span>
            </h3>
            <p className="text-[11px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest mt-1.5">
              Full-Stack Developer & Software Engineer © {currentYear}
            </p>
          </div>

          {/* ডান পাশ: গোল আইকন এবং টেক্সটসহ সোশ্যাল মিডিয়া লিংকসমূহ */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* GitHub */}
            <a
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-white/[0.02] border border-white/10 text-neutral-300 hover:text-white hover:border-white/25 hover:bg-white/[0.06] text-xs font-medium transition-all flex items-center gap-2.5 group"
            >
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-mono group-hover:bg-white group-hover:text-black transition-colors">
                GH
              </span>
              <span className="font-mono tracking-wide">GitHub</span>
              <span className="text-[10px] text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-white/[0.02] border border-white/10 text-neutral-300 hover:text-white hover:border-white/25 hover:bg-white/[0.06] text-xs font-medium transition-all flex items-center gap-2.5 group"
            >
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-mono group-hover:bg-white group-hover:text-black transition-colors">
                IN
              </span>
              <span className="font-mono tracking-wide">LinkedIn</span>
              <span className="text-[10px] text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-white/[0.02] border border-white/10 text-neutral-300 hover:text-white hover:border-white/25 hover:bg-white/[0.06] text-xs font-medium transition-all flex items-center gap-2.5 group"
            >
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[11px] font-mono group-hover:bg-white group-hover:text-black transition-colors">
                FB
              </span>
              <span className="font-mono tracking-wide">Facebook</span>
              <span className="text-[10px] text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
            </a>

          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;