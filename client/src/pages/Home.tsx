/**
 * Home Page
 * Design: Minimalismo Cinematográfico
 * - Integração de todos os componentes principais
 * - Layout limpo e profissional
 * - Navegação fluida entre seções
 */

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
