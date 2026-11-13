import React from 'react'

function HmgBtn({hmgbtn,isOpen}) {
     function hmgbtnrun(){
        hmgbtn()}
  return (
    
    <>
    {/* Mobile Hamburger Toggle */}
          <button
            onClick={() =>hmgbtnrun()}
            className="md:hidden p-2 rounded-xl bg-white/5 text-neutral-300 hover:text-white border border-white/10 shrink-0 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
               {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : ( 
                 <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                />
              )} 
            </svg>
          </button>
    </>
  )
}

export default HmgBtn