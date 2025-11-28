import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Globe3D from './components/Globe3D';
import ControlPanel from './components/ControlPanel';
import Portfolio from './components/Portfolio';
import { AppMode, LocationData, LOCATIONS } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.IDLE);
  const [targetLocation, setTargetLocation] = useState<LocationData | null>(null);

  const handleModeChange = useCallback((newMode: AppMode) => {
    // Pick a random location
    const randomIndex = Math.floor(Math.random() * LOCATIONS.length);
    const location = LOCATIONS[randomIndex];
    
    setMode(newMode);
    setTargetLocation(location);
  }, []);

  return (
    <main className="relative w-full bg-slate-900 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* 
        3D Background: Fixed position so it stays while scrolling 
        (Optional: change to absolute if you want it to scroll away, but fixed is cooler for portfolio headers)
      */}
      <div className="fixed inset-0 z-0 h-screen w-full">
        <Globe3D mode={mode} targetLocation={targetLocation} />
      </div>

      <Navbar />

      {/* Content Container */}
      <div className="relative z-10">
        
        {/* Hero Section (100vh) - Contains the interactive Control Panel */}
        <section className="h-screen w-full relative">
          <ControlPanel 
            currentMode={mode} 
            onModeChange={handleModeChange}
            targetLocation={targetLocation}
          />
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none text-white/50">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
             </svg>
          </div>
        </section>

        {/* Portfolio Content (Scrolls over the fixed background or has its own background) */}
        {/* We give it a background color to cover the 3D globe as we scroll down */}
        <div className="bg-[#0d1117] shadow-2xl relative">
             {/* Gradient fade from 3D scene to dark content */}
             <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0d1117] -mt-32 pointer-events-none"></div>
             
             <Portfolio />
        </div>

      </div>
    </main>
  );
};

export default App;