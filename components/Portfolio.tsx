
import React, { useState, useEffect } from 'react';

const Portfolio: React.FC = () => {
  const [showTeam, setShowTeam] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
      if (window.scrollY < 150 && showTeam) {
        setShowTeam(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showTeam]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0d1117] text-white font-sans relative z-10">
      
      {/* About Section */}
      <section id="about" className="pt-24 pb-12 px-4 max-w-5xl mx-auto">
        <div className="w-full mb-10 overflow-hidden rounded-xl">
           <img 
             src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=280&section=header&text=Harrison%20Lee&fontAlignY=40&fontColor=ffffff&desc=Robotics%20and%20AI%20Developer%20-%20Way%20Maker%20School&descAlignY=60" 
             className="w-full object-cover"
             alt="Header"
           />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 -mt-10 md:mt-0">
          <div className="text-center">
            <div className="relative w-36 h-36 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-[#0d1117] p-1.5 border-4 border-[#58a6ff] overflow-hidden relative z-10">
                <img 
                  src="https://avatars.githubusercontent.com/u/187257358?v=4" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -right-2 top-0 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold border border-gray-700 z-20">
                •••
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-2">Harrison Lee</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Robotics & AI Developer<br/>
              Way Maker School · S2 AI Team
            </p>
            
            <a href="https://github.com/S2-ai-team" target="_blank" rel="noreferrer" className="inline-block transition-transform hover:scale-105">
              <img src="https://img.shields.io/badge/GitHub_Profile-181717?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
            </a>
          </div>

          <div className="max-w-md text-left space-y-3 p-4">
            <h2 className="text-2xl font-bold mb-4">🧠 About Me</h2>
            <p className="text-gray-300"><strong>🤖 Robotics & AI Developer</strong></p>
            <p className="text-gray-300"><strong>🏫 Way Maker School Member</strong></p>
            <p className="text-gray-300"><strong>⚙️ Exploring Robotics, AI, Embedded Systems</strong></p>
          </div>
        </div>
      </section>

      <hr className="border-gray-800 max-w-5xl mx-auto" />

      {/* Tech Stack */}
      <section id="stack" className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">💡 Tech Stack Overview</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
           <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=S2-ai-team&theme=tokyonight" className="max-w-full h-auto" alt="Stats"/>
           <img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=S2-ai-team&theme=tokyonight" className="max-w-full h-auto" alt="Stats"/>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
           <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=S2-ai-team&theme=tokyonight" className="max-w-full h-auto" alt="Stats"/>
           <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=S2-ai-team&theme=tokyonight&utcOffset=9" className="max-w-full h-auto" alt="Stats"/>
        </div>

        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">🧩 Language</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white" alt="Python"/>
              <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=C&logoColor=white" alt="C"/>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5"/>
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" alt="CSS3"/>
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JS"/>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">⚙️ Library / Framework</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=PyTorch&logoColor=white" alt="PyTorch"/>
              <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="TensorFlow"/>
              <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=NumPy&logoColor=white" alt="NumPy"/>
              <img src="https://img.shields.io/badge/TensorRT-76B900?style=for-the-badge&logo=NVIDIA&logoColor=white" alt="TensorRT"/>
              <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=OpenCV&logoColor=white" alt="OpenCV"/>
              <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white" alt="Flask"/>
              <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black" alt="React"/>
            </div>
          </div>

          <div className="text-center">
             <h3 className="text-xl font-semibold mb-6 text-gray-300">🔩 Hardware / Embedded</h3>
             <div className="flex flex-wrap justify-center gap-2">
               <img src="https://img.shields.io/badge/Raspberry%20Pi-A22846?style=for-the-badge&logo=Raspberry-Pi&logoColor=white" alt="RPI"/>
               <img src="https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white" alt="Arduino"/>
               <img src="https://img.shields.io/badge/AVR-EE4C2C?style=for-the-badge&logoColor=white" alt="AVR"/>
               <img src="https://img.shields.io/badge/Bambu%20Lab-76B900?style=for-the-badge&logo=bambulab&logoColor=white" alt="Bambu"/>
               <img src="https://img.shields.io/badge/Autodesk%20Fusion%20360-FF6F00?style=for-the-badge&logo=Autodesk&logoColor=white" alt="Fusion360"/>
             </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
         <h2 className="text-3xl font-bold text-center mb-12">🛠️ Projects</h2>
         {/* Changed to 3 columns on large screens for better balance */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* CodeSync */}
            <a href="https://s2-ai-team.github.io/codesync/" target="_blank" rel="noreferrer" className="group h-full">
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#58a6ff] h-full flex flex-col">
                <div className="h-48 w-full mb-4 overflow-hidden rounded-lg bg-gray-800">
                  <img src="https://github.com/user-attachments/assets/b350c7a1-628e-4a36-a8fa-e9e7b8c8dee4" alt="CodeSync" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#58a6ff]">CodeSync</h3>
                <p className="text-gray-400 text-sm flex-grow">A web-based code editor equipped with AI-powered debugging and automated code analysis tools.</p>
              </div>
            </a>

            {/* AI_SOCCER */}
            <a href="https://github.com/S2-ai-team/AI-soccer_HSU" target="_blank" rel="noreferrer" className="group h-full">
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#58a6ff] h-full flex flex-col">
                <div className="h-48 w-full mb-4 overflow-hidden rounded-lg bg-gray-800">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWxLId3msV2xSQmmyOKRaQDSo6F_PoR9NTA&s" alt="AI_SOCCER" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#58a6ff]">AI_SOCCER</h3>
                <p className="text-gray-400 text-sm flex-grow">AI_SOCCER Competition</p>
              </div>
            </a>

            {/* X.B.T */}
            <a href="https://github.com/S2-ai-team/X.B.T" target="_blank" rel="noreferrer" className="group h-full">
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#58a6ff] h-full flex flex-col">
                <div className="h-48 w-full mb-4 overflow-hidden rounded-lg bg-gray-800">
                  <img src="https://github.com/S2-ai-team/X.B.T/raw/master/test.png" alt="X.B.T" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#58a6ff]">X.B.T</h3>
                <p className="text-gray-400 text-sm flex-grow">Xceeper hacking tool</p>
              </div>
            </a>
         </div>
      </section>

      {/* Competitions */}
      <section id="competitions" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">🏆 Competitions</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#1f2937]">
                <th className="p-4 border border-[#444] font-semibold">🏅 Year</th>
                <th className="p-4 border border-[#444] font-semibold">Competition</th>
                <th className="p-4 border border-[#444] font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2025", "제14회 로봇융합페스티벌 IRO Camp AI Soccer", "🥇 1등 (대전시 교육감상)"],
                ["2024", "국제로봇올림피아드 세계대회 그리스 (창작)", "🥈 은메달"],
                ["2024", "IRO 한국대회 본선 (창작)", "🥈 위원장상"],
                ["2024", "IRO 전국예선 (창작)", "🥇 교육감상"],
                ["2024", "IRO 본선 로봇축구", "🥉 동상"],
                ["2024", "K-로봇대회 (로빛)", "🎖️ 장려상"],
              ].map(([year, title, result], idx) => (
                <tr key={idx} className="hover:bg-white/5">
                  <td className="p-4 border border-[#444]">{year}</td>
                  <td className="p-4 border border-[#444]">{title}</td>
                  <td className="p-4 border border-[#444]">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-shadow-blue">📬 Contact</h2>
        
        <div className="inline-block relative overflow-hidden rounded-2xl bg-white/5 p-10 border border-white/20 backdrop-blur-md shadow-[0_0_25px_rgba(0,140,255,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,140,255,0.55)] group">
           <div className="absolute inset-[-2px] bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20 blur-xl z-0"></div>
           <div className="relative z-10 space-y-4 text-lg">
             <p className="text-gray-300">
               <span className="inline-block w-24 font-bold text-[#00c8ff]">Email</span>
               <a href="mailto:harry.srobot.2011@gmail.com" className="hover:bg-[#00c8ff]/20 px-2 py-1 rounded transition-colors">harry.srobot.2011@gmail.com</a>
             </p>
             <p className="text-gray-300">
               <span className="inline-block w-24 font-bold text-[#00c8ff]">MakerWorld</span>
               <a href="https://makerworld.com/ko/@user_1850621605" target="_blank" rel="noreferrer" className="hover:bg-[#00c8ff]/20 px-2 py-1 rounded transition-colors">makerworld.com/@user_1850621605</a>
             </p>
             <p className="text-gray-300">
               <span className="inline-block w-24 font-bold text-[#00c8ff]">Github</span>
               <a href="https://github.com/S2-ai-team" target="_blank" rel="noreferrer" className="hover:bg-[#00c8ff]/20 px-2 py-1 rounded transition-colors">github.com/S2-ai-team</a>
             </p>
           </div>
        </div>
      </section>

      {/* S2 AI Team Popup Section */}
      <div id="s2ai" className={`py-12 bg-black/50 text-center transition-all duration-500 ${showTeam ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 hidden'}`}>
        <h2 className="text-2xl font-bold mb-2">🚀 S2 AI Team</h2>
        <p className="text-gray-400 mb-6">Way Maker School · Advanced Robotics & AI Development Team</p>
        <div className="flex flex-col items-center">
          <img src="https://avatars.githubusercontent.com/u/187257358?v=4" alt="Team" className="w-32 h-32 rounded-full border-4 border-[#58a6ff] mb-4"/>
          <a href="https://github.com/S2-ai-team" target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline">
             Visit Team GitHub →
          </a>
        </div>
      </div>

      {/* Floating Buttons */}
      {showTopBtn && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 bg-[#58a6ff] text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-[#4facfe] transition-colors z-50"
        >
          Top
        </button>
      )}
      
      {/* Hidden trigger for S2AI team display */}
      <button id="s2ai-trigger" className="hidden" onClick={() => setShowTeam(true)}></button>
    </div>
  );
};

export default Portfolio;
