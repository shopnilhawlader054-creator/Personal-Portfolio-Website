import React from 'react'

function Contect() {
  return (
    <>
    <section className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 z-10">
      
      {/* সেকশন হেডার */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-white/70 font-medium">
            Get In Touch
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
          Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">Together</span>
        </h2>
        <p className="text-neutral-400 text-sm font-light mt-2">
          Have a project in mind, a question, or want to collaborate? My inbox is always open.
        </p>
      </div>

      {/* কন্টাক্ট ফর্ম কার্ড */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          
          {/* Name & Email (পাশাপাশি দেখানোর জন্য Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Shopnil Hawlader"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="shopnil@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-all"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Project Inquiry / Remote Role"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell me about your project requirements or what you'd like to discuss..."
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Send Message</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

        </form>
      </div>

    </section>
    </>
  )
}

export default Contect