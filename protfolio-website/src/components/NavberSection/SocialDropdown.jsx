import React from 'react';

function SocialDropdown() {
  return (
    /* absolute পজিশনিং এবং গ্লাসমরফিজম স্টাইল */
    <div className="absolute right-0 top-full mt-2 w-56 p-3 rounded-2xl bg-neutral-900/90 border border-white/15 backdrop-blur-2xl shadow-2xl z-50 flex flex-col space-y-2">
      
      {/* হেডার লেবেল */}
      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest px-2 py-1 border-b border-white/10">
        Social Links
      </div>

      {/* GitHub Link */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-white/25 transition-all text-xs font-medium group"
      >
        <span>GitHub</span>
        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-white/25 transition-all text-xs font-medium group"
      >
        <span>LinkedIn</span>
        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
      </a>

      {/* Facebook Link */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-white/25 transition-all text-xs font-medium group"
      >
        <span>Facebook</span>
        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
      </a>

    </div>
  );
}

export default SocialDropdown;