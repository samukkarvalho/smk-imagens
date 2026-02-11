/**
 * About Section Component
 * Design: Minimalismo Cinematográfico
 * - Layout assimétrico com imagem e texto
 * - Tipografia clara com hierarquia visual
 * - Padrão geométrico de fundo
 */

import { Camera, Film, Zap } from 'lucide-react';

const ABSTRACT_PATTERN = 'https://private-us-east-1.manuscdn.com/sessionFile/IIFVKZIMJF5RqEjVRKTr60/sandbox/CiIeAhFlKIKWpPQ8Tb2ZQx-img-2_1770637605000_na1fn_YWJzdHJhY3QtcGF0dGVybi1ibHVlLWJsYWNr.png';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Camera size={32} className="text-blue-500" />,
    title: 'Fotografia Profissional',
    description: 'Sessões de fotografia com equipamento de ponta e tratamento profissional de imagens',
  },
  {
    icon: <Film size={32} className="text-blue-500" />,
    title: 'Produção de Vídeo',
    description: 'Filmagem cinematográfica com color grading profissional e pós-produção de qualidade',
  },
  {
    icon: <Zap size={32} className="text-blue-500" />,
    title: 'Consultoria Criativa',
    description: 'Orientação e planejamento de projetos visuais desde a concepção até a entrega final',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('${ABSTRACT_PATTERN}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Sobre Mim
          </h2>
          <div className="w-16 h-1 bg-blue-600"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Text */}
          <div>
            <p className="text-gray-300 font-sans text-lg leading-relaxed mb-6">
              Sou um fotógrafo e filmmaker apaixonado por capturar momentos únicos e transformá-los em histórias visuais impactantes. Com mais de uma década de experiência, desenvolvi uma abordagem cinematográfica que combina técnica profissional com criatividade sem limites.
            </p>
            <p className="text-gray-400 font-sans text-base leading-relaxed mb-8">
              Cada projeto é uma oportunidade de criar algo extraordinário. Trabalho com clientes que compartilham minha visão de excelência e inovação, entregando resultados que superam expectativas e deixam marcas duradouras.
            </p>
            <div className="flex gap-4">
              <div>
                <p className="text-3xl font-display font-bold text-blue-500">500+</p>
                <p className="text-gray-400 font-sans text-sm">Projetos Completos</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-blue-500">10+</p>
                <p className="text-gray-400 font-sans text-sm">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-blue-500">100%</p>
                <p className="text-gray-400 font-sans text-sm">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden">
            <img
              src={ABSTRACT_PATTERN}
              alt="Studio Setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        {/* Services */}
        <div className="border-t border-gray-800 pt-20">
          <h3 className="text-3xl font-display font-bold text-white mb-12">
            O Que Ofereço
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-blue-600 transition-colors duration-300 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
