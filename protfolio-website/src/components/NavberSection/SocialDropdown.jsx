import React from 'react';

function SocialDropdown() {
  return (
    /* 
      md:absolute -> পিসিতে এটি অ্যাবসোলিউট পজিশনে ডানে ড্রপডাউন হবে
      w-full md:w-56 -> মোবাইলে ফুল উইডথ এবং পিসিতে নির্দিষ্ট ফিট সাইজ নেবে
    */
    <div className="w-full md:absolute md:right-0 md:top-full md:mt-2 md:w-56 p-3 rounded-2xl bg-neutral-900/95 border border-white/15 backdrop-blur-2xl shadow-2xl z-50 flex flex-col space-y-2 animate-fadeIn">
      
      {/* হেডার লেবেল */}
      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest px-2 py-1 border-b border-white/10">
        Social Links
      </div>

      {/* GitHub Link */}
      <a
        href="https://github.com/shopnilhawlader054-creator"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-white/25 transition-all text-xs font-medium group"
      >
        <span>GitHub</span>
        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://www.linkedin.com/in/shopnil-hawlader-560929418"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-white/25 transition-all text-xs font-medium group"
      >
        <span>LinkedIn</span>
        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
      </a>

      {/* Email Link */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=shopnilhawlader054@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-white/25 transition-all text-xs font-medium group"
      >
        <span>Email</span>
        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
      </a>

    </div>
  );
}

export default SocialDropdown;