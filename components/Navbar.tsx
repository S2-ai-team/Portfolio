import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Special handler for S2AI Team
    if (id === 's2ai') {
        const trigger = document.getElementById('s2ai-trigger');
        if (trigger) trigger.click();
        
        setTimeout(() => {
             const s2el = document.getElementById('s2ai');
             if(s2el) s2el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/5">
      {/* Logo */}
      <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-sm">
          3D EARTH
        </h1>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex space-x-6">
        <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wider">
          About
        </button>
        <button onClick={() => scrollToSection('stack')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wider">
          Stack
        </button>
        <button onClick={() => scrollToSection('projects')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wider">
          Projects
        </button>
        <button onClick={() => scrollToSection('competitions')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wider">
          Competitions
        </button>
        <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wider">
          Contact
        </button>
        <button onClick={() => scrollToSection('s2ai')} className="text-sm font-medium text-[#58a6ff] hover:text-white transition-colors uppercase tracking-wider">
          S2 AI Team
        </button>
      </div>
      
      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;