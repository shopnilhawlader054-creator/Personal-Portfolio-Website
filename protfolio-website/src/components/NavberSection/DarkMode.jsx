
import React, { useState } from 'react';

function DarkMode({isDarkMode,DarkModeFunction}) {
 function DarkBtn(){
  DarkModeFunction()
 }
   
  return (
    <>
    

          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={() =>DarkBtn()}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all shrink-0 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              /* Sun Icon (shown in dark mode to switch to light) */
              <svg className="w-5 h-5 transition-transform duration-300 hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              /* Moon Icon (shown in light mode to switch to dark) */
              <svg className="w-5 h-5 transition-transform duration-300 hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>  
    </>
  )
}

export default DarkMode