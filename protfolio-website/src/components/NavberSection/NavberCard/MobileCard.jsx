import React from 'react'

function MobileCard({navLinks,isOpen,hmgbtn,activeSection,navcardbtn}) {
  function hmgbtnrun(card){
    navcardbtn(card)
    hmgbtn()
  }
  return (
    <>
           {isOpen && (
        <div className="absolute md:hidden top-full w-full left-0 border-b border-white/10 bg-[#121212]/95 backdrop-blur-xl px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                
                hmgbtnrun(link.name);
              }}
              className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                activeSection === link.name
                  ? 'bg-white text-black font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

export default MobileCard