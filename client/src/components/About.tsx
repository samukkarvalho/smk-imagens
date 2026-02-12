import { Camera, Video, Award, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Camera,
      title: 'Fotografia Profissional',
      description: 'Capturamos a essência de cada momento com equipamento de ponta e olhar artístico.',
    },
    {
      icon: Video,
      title: 'Produção Audiovisual',
      description: 'Vídeos cinematográficos que contam histórias e conectam emocionalmente.',
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Comprometimento com excelência em cada projeto, do planejamento à entrega.',
    },
    {
      icon: Users,
      title: 'Foco no Cliente',
      description: 'Trabalhamos lado a lado para transformar sua visão em realidade visual.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Título da seção */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6">
            Sobre <span className="text-blue-400">Nós</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-sans">
            Somos apaixonados por criar memórias visuais que transcendem o tempo. 
            Com anos de experiência e dedicação, transformamos momentos em arte.
          </p>
        </div>

        {/* Grid de features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-lg transition-all duration-500" />

              <div className="relative z-10">
                {/* Ícone */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <feature.icon className="text-white" size={28} />
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-montserrat font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#contato"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-montserrat font-bold rounded-sm hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            Vamos Trabalhar Juntos
          </a>
        </div>
      </div>
    </section>
  );
}
