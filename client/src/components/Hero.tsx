/**
 * Hero Section Component
 * Design: Minimalismo Cinematográfico
 * - Imagem de fundo cinematográfica com overlay escuro
 * - Tipografia grande e impactante em Montserrat
 * - CTA em azul elétrico
 * - Animação de fade-in ao carregar
 */

import { ChevronDown } from 'lucide-react';

const HERO_IMAGE = 'https://private-us-east-1.manuscdn.com/sessionFile/IIFVKZIMJF5RqEjVRKTr60/sandbox/CiIeAhFlKIKWpPQ8Tb2ZQx-img-1_1770637608000_na1fn_aGVyby1jaW5lbWF0b2dyYXBoeQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSUlGVktaSU1KRjVScUVqVlJLVHI2MC9zYW5kYm94L0NpSWVBaEZsS0lLV3BQUThUYjJaUXgtaW1nLTFfMTc3MDYzNzYwODAwMF9uYTFmbl9hR1Z5YnkxamFXNWxiV0YwYjJkeVlYQm9lUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qchOH3wT1qSV0vhaGDmhEz2A6XT~VLFlyy4FK8UQbJ2qx3pXa1E~4oJLjVTxz1G4BgVzW9B2wrkDog8km1msTVIQtHZPuEBT4gDhJ1kv9mpJ3AuWcnFURtCYzOMIDEY6onRuhD-PCv8z8gvlkgqUUj72gGXzgmUF6cQX~6k~uLC9ALOjW-FU5SqbPN7qHn9KIsNBsJHrHGcEeSYWFiK5XmX3xUyo0OJyWmRV2wyxICbvSHE4QfEjcrCETSHCVR9SuU8FQynUDfLFsM4qcRQYfbGV18L82FQLhZvo6YVlhch3jk3rOyvySj9MiXGagbA5EZvn4bMeHDE--86fN-NmTw__';

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full h-screen bg-black overflow-hidden pt-16 md:pt-20"
      style={{
        backgroundImage: `url('${HERO_IMAGE}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6 tracking-tight">
            SMK
            <br />
            <span className="text-blue-500">IMAGENS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-sans font-light mb-8 max-w-2xl mx-auto">
            Fotografia e filmagem profissional que transformam suas ideias em histórias visuais memoráveis
          </p>

          <button
            onClick={scrollToPortfolio}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold rounded transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Ver Portfólio
            <ChevronDown size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-blue-500" />
      </div>
    </section>
  );
}
