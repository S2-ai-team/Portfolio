import React from 'react';
import { AppMode, LocationData } from '../types';

interface ControlPanelProps {
  currentMode: AppMode;
  onModeChange: (mode: AppMode) => void;
  targetLocation: LocationData | null;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ currentMode, onModeChange, targetLocation }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 pointer-events-none z-10">
      
      <div className="pointer-events-auto space-y-8">
        
        {/* Intro / Status */}
        <div className="space-y-2 animate-in slide-in-from-left-10 duration-700">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Harrison's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                3D EARTH!
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md">
              3D visualization of global weather and cultural insights.
            </p>
        </div>

        {/* Information Display Card */}
        {(currentMode !== AppMode.IDLE && targetLocation) && (
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-md transform transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-5">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-3 h-3 rounded-full ${currentMode === AppMode.WEATHER ? 'bg-blue-400' : 'bg-emerald-400'}`}></div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  {targetLocation.name}
              </h3>
            </div>
            
            <p className="text-slate-100 leading-relaxed text-lg font-light">
                {currentMode === AppMode.WEATHER ? targetLocation.weatherInfo : targetLocation.description}
            </p>
          </div>
        )}

        {/* Control Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onModeChange(AppMode.WEATHER)}
            className={`group relative flex items-center justify-center px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 border border-white/10 overflow-hidden ${
              currentMode === AppMode.WEATHER 
                ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)] text-white' 
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative font-semibold tracking-wide">🌦 날씨 (Weather)</span>
          </button>

          <button
            onClick={() => onModeChange(AppMode.COUNTRY)}
            className={`group relative flex items-center justify-center px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 border border-white/10 overflow-hidden ${
              currentMode === AppMode.COUNTRY 
                ? 'bg-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.5)] text-white' 
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative font-semibold tracking-wide">🌏 나라 (Country)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;