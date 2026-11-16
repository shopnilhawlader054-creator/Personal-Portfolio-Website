import React from 'react'
import SocialDropdown from '../SocialDropdown'
import { useState } from 'react';

function MobileCard({ navLinks, isOpen, hmgbtn, activeSection, navcardbtn, isDarkMode }) {
  const [showmore, setShowMore] = useState(false)

  function hmgbtnrun(card, e) {
    const more = card === 'More'
    if (more) {
      if (e) e.preventDefault();
      navcardbtn(card)
      setShowMore(!showmore)
      return
    }
    navcardbtn(card)
    hmgbtn()
  }

  return (
    <>
      {isOpen && (
        <div className={`absolute md:hidden top-full right-0 w-1/2 border-l border-b backdrop-blur-2xl p-3 space-y-1.5 shadow-2xl transition-all duration-300 max-h-[70vh] overflow-y-auto text-left z-[999] animate-fadeIn rounded-bl-2xl ${
          isDarkMode 
            ? 'bg-[#121212]/95 border-white/10 text-white' 
            : 'bg-[#0f172a]/95 border-slate-700/80 text-slate-100'
        }`}>
          
          {/* ছোট একটি মেনু টাইটেল বা ডেকোরেশন হেডার (ফোনে দেখতে প্রিমিয়াম লাগবে) */}
          <div className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 mb-1 border-b ${
            isDarkMode ? 'text-neutral-500 border-white/5' : 'text-slate-400 border-slate-700/50'
          }`}>
            Navigation
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.name === 'More') {
                  e.preventDefault();
                }
                hmgbtnrun(link.name, e);
              }}
              className={`block px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left ${
                activeSection === link.name
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-neutral-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
            
          {/* সোশ্যাল ড্রপডাউন মেনু */}
          {showmore && (
            <div className="pt-2 animate-fadeIn z-50 flex flex-col items-start">
              <SocialDropdown isDarkMode={isDarkMode} />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default MobileCard;