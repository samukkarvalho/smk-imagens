import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

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

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-blue-400 mb-2" aria-label="500 projetos realizados">500+</div>
              <div className="text-sm md:text-base text-gray-400 font-sans">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-blue-400 mb-2" aria-label="100 clientes satisfeitos">100+</div>
              <div className="text-sm md:text-base text-gray-400 font-sans">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-blue-400 mb-2" aria-label="5 anos de experiência">5+</div>
              <div className="text-sm md:text-base text-gray-400 font-sans">Anos de Experiência</div>
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
