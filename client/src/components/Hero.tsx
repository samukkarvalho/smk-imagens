import { useEffect, useState } from 'react';
import { ArrowDown, Camera, Music, Video } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container relative z-10 text-center px-4 mx-auto">
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-bold text-white mb-6 leading-tight">
            <span className="block">SMK</span>
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              IMAGENS
            </span>
          </h1>
        </div>

        <div>
          <p className="text-xl md:text-2xl lg:text-3xl font-sans text-gray-300 mb-4 max-w-3xl mx-auto">
            Fotografia & Filmagem Profissional
          </p>
          <p className="text-base md:text-lg font-sans text-gray-400 mb-12 max-w-2xl mx-auto">
            Transformando momentos em histórias visuais que permanecem para sempre
          </p>
        </div>

        <div>
          <div className="relative inline-block mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-lg blur-sm animate-pulse"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
            
            <img
              src="https://i.imgur.com/6WCx1VTm.jpg"
              alt="Fotógrafo SMK em ação capturando momentos em evento"
              className="relative rounded-lg w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl"
              loading="eager"
              fetchPriority="high"
              width="320"
              height="320"
            />
          </div>
        </div>

        {/* Tech Stats - MOBILE OTIMIZADO */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-3 gap-3 md:gap-6 mt-12 md:mt-20 max-w-4xl mx-auto">
            
            {/* Card 1 - Fotografia */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative bg-black/90 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  <div className="p-2 md:p-3 bg-cyan-500/20 rounded-full">
                    <Camera size={20} className="md:hidden text-cyan-400" aria-hidden="true" />
                    <Camera size={32} className="hidden md:block text-cyan-400" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-cyan-400 text-sm md:text-xl lg:text-2xl font-orbitron font-bold mb-1 md:mb-2 tracking-wider">
                  ⚡ FOTOGRAFIA
                </div>
                <div className="text-gray-300 text-xs md:text-sm font-sans uppercase tracking-widest">
                  Profissional
                </div>
              </div>
            </div>

            {/* Card 2 - Festivais */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative bg-black/90 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-blue-500/30 hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  <div className="p-2 md:p-3 bg-blue-500/20 rounded-full">
                    <Music size={20} className="md:hidden text-blue-400" aria-hidden="true" />
                    <Music size={32} className="hidden md:block text-blue-400" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-blue-400 text-sm md:text-xl lg:text-2xl font-orbitron font-bold mb-1 md:mb-2 tracking-wider">
                  🌊 FESTIVAIS
                </div>
                <div className="text-gray-300 text-xs md:text-sm font-sans uppercase tracking-widest">
                  Eletrônicos
                </div>
              </div>
            </div>

            {/* Card 3 - Vídeo */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative bg-black/90 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300">
                <div className="flex items-center justify-center mb-2 md:mb-3">
                  <div className="p-2 md:p-3 bg-purple-500/20 rounded-full">
                    <Video size={20} className="md:hidden text-purple-400" aria-hidden="true" />
                    <Video size={32} className="hidden md:block text-purple-400" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-purple-400 text-sm md:text-xl lg:text-2xl font-orbitron font-bold mb-1 md:mb-2 tracking-wider">
                  🎥 VÍDEO 4K
                </div>
                <div className="text-gray-300 text-xs md:text-sm font-sans uppercase tracking-widest">
                  Premium
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <a
        href="#portfolio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-blue-400 hover:text-blue-300 transition-colors"
        aria-label="Rolar para a seção de portfólio"
      >
        <ArrowDown size={32} aria-hidden="true" />
      </a>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" aria-hidden="true" />
    </section>
  );
}
