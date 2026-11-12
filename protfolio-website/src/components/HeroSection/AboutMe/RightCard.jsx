import React from 'react'

function RightCard() {
  return (
    <>
     {/* ডান পাশ: বিস্তারিত প্যারাগ্রাফ ও হাইলাইট কার্ডগুলো */}
        <div className="lg:col-span-7 z-10 space-y-6">
          
          {/* মূল প্যারাগ্রাফ কার্ড */}
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-4 text-neutral-400 text-sm md:text-base font-light leading-relaxed hover:border-white/20 transition-all">
            <p>
              Hi, I'm <span className="text-white font-medium">Shopnil Hawlader</span> — a dedicated Full-Stack Web Developer based in Bangladesh, focused on building robust backend architectures, secure database management, and high-performance applications.
            </p>
            <p>
              I believe in understanding core mechanics and data lifecycles rather than relying blindly on boilerplate code. Whether I'm engineering custom e-commerce platforms with <span className="text-neutral-200">Python & Django</span> or designing intuitive user interfaces using <span className="text-neutral-200">React & Tailwind CSS</span>, my objective is to translate complex logic into seamless digital experiences.
            </p>
          </div>

          {/* তিনটি মিনি হাইলাইট বক্স (Stats) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
              <span className="block text-white text-2xl font-bold">10+</span>
              <span className="text-neutral-400 text-xs mt-1 block">Completed Projects</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
              <span className="block text-white text-2xl font-bold">Backend</span>
              <span className="text-neutral-400 text-xs mt-1 block">Django & REST APIs</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
              <span className="block text-white text-2xl font-bold">Frontend</span>
              <span className="text-neutral-400 text-xs mt-1 block">React & Tailwind</span>
            </div>
          </div>

          {/* নিচের ছোট কল টু অ্যাকশন বাটন */}
          <div className="pt-2">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <span>View Featured Works</span>
              <span>→</span>
            </a>
          </div>
          </div>

    </>
  )
}

export default RightCard