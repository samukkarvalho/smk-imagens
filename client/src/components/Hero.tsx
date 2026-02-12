import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Conteúdo Principal */}
      <div className="container relative z-10 text-center px-4 mx-auto">
        {/* Título Principal */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-bold text-white mb-6 leading-tight">
            <span className="block">SMK</span>
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              IMAGENS
            </span>
          </h1>
        </div>

        {/* Subtítulo com delay */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-sans text-gray-300 mb-4 max-w-3xl mx-auto">
            Fotografia & Filmagem Profissional
          </p>
          <p className="text-base md:text-lg font-sans text-gray-400 mb-12 max-w-2xl mx-auto">
            Transformando momentos em histórias visuais que permanecem para sempre
          </p>
        </div>

        {/* Botões de ação com delay maior */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#portfolio"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-montserrat font-bold rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              <span className="relative z-10">Ver Portfólio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contato"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-montserrat font-bold rounded-sm hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
            >
              Entre em Contato
            </a>
          </div>
        </div>

        {/* Stats com delay ainda maior */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-blue-400 mb-2">
                500+
              </div>
              <div className="text-sm md:text-base text-gray-400 font-sans">
                Projetos
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-blue-400 mb-2">
                100+
              </div>
              <div className="text-sm md:text-base text-gray-400 font-sans">
                Clientes Satisfeitos
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-blue-400 mb-2">
                5+
              </div>
              <div className="text-sm md:text-base text-gray-400 font-sans">
                Anos de Experiência
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#portfolio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-blue-400 hover:text-blue-300 transition-colors"
      >
        <ArrowDown size={32} />
      </a>

      {/* Gradiente de overlay para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />
    </section>
  );
}
