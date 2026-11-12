import React from 'react'

function LeftCard() {
  return (
    <>
    <style>{`
        @keyframes spin3D {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
        .animate-3d-cube {
          transform-style: preserve-3d;
          animation: spin3D 6s linear infinite;
        }
      `}</style>

    <div className="lg:col-span-5 space-y-6">
          {/* স্ট্যাটাস পিল ব্যাজ (কোনো iframe ছাড়াই পিওর CSS 3D জ্যামিতিক শেপ) */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            
            {/* 3D Rotating Wireframe Core */}
            <div className="relative w-5 h-5 flex items-center justify-center [perspective:200px]">
              {/* আউটার গ্লোয়িং 3D রিং */}
              <div className="w-4 h-4 rounded-sm border border-white/80 bg-gradient-to-tr from-white/30 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.6)] animate-3d-cube"></div>
              {/* ইনার ফিক্সড কোর */}
              <div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"></div>
            </div>

            <span className="text-xs uppercase tracking-widest text-white/80 font-medium">
              About Me
            </span>
          </div>

          {/* সেকশন হেডিং */}
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Behind the Code,
            </h2>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500 pt-1">
              Architecting Systems
            </h2>
          </div>

          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
            Focused on building scalable backend architectures, clean REST APIs, and reliable full-stack web applications from first principles.
          </p>

        </div>
        </>
   
  )
}

export default LeftCard