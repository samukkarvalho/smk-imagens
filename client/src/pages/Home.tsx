/**
 * Home Page
 * Design: Minimalismo Cinematográfico + Cyberpunk
 * - Integração de todos os componentes principais
 * - Background 3D animado
 * - Layout limpo e profissional
 * - Navegação fluida entre seções
 */

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background 3D Animado */}
      <AnimatedBackground />
      
      {/* Conteúdo do site */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Portfolio />
        <About />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}