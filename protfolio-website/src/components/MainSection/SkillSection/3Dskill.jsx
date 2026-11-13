import React from 'react'

function AnimationSkill() {
  return (
    <>
      {/* কাস্টম স্পিনিং ও অরবিট অ্যানিমেশনের জন্য CSS (রেসপন্সিভ ট্রান্সলেট সহ) */}
      <style>{`
        @keyframes orbitSlow {
          0% { transform: rotate(0deg) translate(95px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(95px) rotate(-360deg); }
        }
        @keyframes orbitReverse {
          0% { transform: rotate(360deg) translate(75px) rotate(-360deg); }
          100% { transform: rotate(0deg) translate(75px) rotate(0deg); }
        }

        /* বড় স্ক্রিনের জন্য (md বা তার বেশি) রেডিয়াস বাড়িয়ে দেওয়া হলো */
        @media (min-width: 768px) {
          @keyframes orbitSlow {
            0% { transform: rotate(0deg) translate(135px) rotate(0deg); }
            100% { transform: rotate(360deg) translate(135px) rotate(-360deg); }
          }
          @keyframes orbitReverse {
            0% { transform: rotate(360deg) translate(105px) rotate(-360deg); }
            100% { transform: rotate(0deg) translate(105px) rotate(0deg); }
          }
        }

        .orbit-item-1 { animation: orbitSlow 18s linear infinite; }
        .orbit-item-2 { animation: orbitReverse 14s linear infinite; }
        .orbit-item-3 { animation: orbitSlow 22s linear infinite; animation-delay: -9s; }
        .orbit-item-4 { animation: orbitReverse 16s linear infinite; animation-delay: -7s; }
      `}</style>

      {/* সেন্ট্রাল গ্লোব বা অরবিট কন্টেইনার (মোবাইলে সাইজ ছোট করা হয়েছে) */}
      <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] flex items-center justify-center my-6 mx-auto overflow-hidden">
        
        {/* ব্যাকগ্রাউন্ড সফট গ্লো ইফেক্ট */}
        <div className="absolute w-36 h-36 md:w-48 md:h-48 bg-white/[0.04] rounded-full blur-3xl pointer-events-none"></div>

        {/* সেন্ট্রাল কোর */}
        <div className="relative z-20 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/[0.03] border border-white/15 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white">SH</span>
          <span className="text-[9px] md:text-[10px] font-mono text-neutral-400 uppercase tracking-widest mt-0.5">Core</span>
        </div>

        {/* অরবিট রিং ১ (ডটেড বর্ডার) */}
        <div className="absolute w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full border border-dashed border-white/10 pointer-events-none"></div>
        
        {/* অরবিট রিং ২ */}
        <div className="absolute w-[230px] h-[230px] md:w-[340px] md:h-[340px] rounded-full border border-white/5 pointer-events-none"></div>

        {/* ঘূর্ণায়মান আইকনসমূহ */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          
          {/* আইকন ১: Python */}
          <div className="absolute orbit-item-1 pointer-events-auto cursor-pointer">
            <div className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-3.5 md:py-2 rounded-xl bg-neutral-900/90 border border-white/15 backdrop-blur-md shadow-lg hover:border-white/30 transition-all hover:scale-110">
              <span className="text-sm md:text-base">🐍</span>
              <span className="text-[11px] md:text-xs font-mono text-white font-medium">Python</span>
            </div>
          </div>

          {/* আইকন ২: React */}
          <div className="absolute orbit-item-2 pointer-events-auto cursor-pointer">
            <div className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-3.5 md:py-2 rounded-xl bg-neutral-900/90 border border-white/15 backdrop-blur-md shadow-lg hover:border-white/30 transition-all hover:scale-110">
              <span className="text-sm md:text-base">⚛️</span>
              <span className="text-[11px] md:text-xs font-mono text-white font-medium">React</span>
            </div>
          </div>

          {/* আইকন ৩: Django */}
          <div className="absolute orbit-item-3 pointer-events-auto cursor-pointer">
            <div className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-3.5 md:py-2 rounded-xl bg-neutral-900/90 border border-white/15 backdrop-blur-md shadow-lg hover:border-white/30 transition-all hover:scale-110">
              <span className="text-sm md:text-base">🚀</span>
              <span className="text-[11px] md:text-xs font-mono text-white font-medium">Django</span>
            </div>
          </div>

          {/* আইকন ৪: Tailwind */}
          <div className="absolute orbit-item-4 pointer-events-auto cursor-pointer">
            <div className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-3.5 md:py-2 rounded-xl bg-neutral-900/90 border border-white/15 backdrop-blur-md shadow-lg hover:border-white/30 transition-all hover:scale-110">
              <span className="text-sm md:text-base">🎨</span>
              <span className="text-[11px] md:text-xs font-mono text-white font-medium">Tailwind</span>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default AnimationSkill