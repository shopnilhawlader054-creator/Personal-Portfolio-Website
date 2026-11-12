import React, { useState } from 'react';


function Navbarr() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'More', href: '#More' },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Optional: Add document class toggling for Tailwind dark mode setup
    // document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] shrink-0 group-hover:bg-white/10 transition-all">
            SH
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            Shopnil<span className="text-neutral-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-black bg-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls Container */}
        <div className="flex items-center gap-3">
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
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

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
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
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#121212]/95 backdrop-blur-xl px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveSection(link.name);
                setIsOpen(false);
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
    </header>
  );
}

export default Navbarr;