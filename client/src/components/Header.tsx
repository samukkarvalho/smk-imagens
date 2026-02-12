import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-blue-500/20' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo com Efeito Neon */}
            <a href="#" className="flex items-center gap-2">
              <h1 
                className="text-2xl md:text-3xl font-black tracking-wider"
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  background: 'linear-gradient(90deg, #00f3ff, #0066ff, #ff00ff, #00f3ff)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'logoGlow 2s ease-in-out infinite, gradientShift 3s linear infinite',
                  filter: 'drop-shadow(0 0 8px #00f3ff)'
                }}
              >
                SMK <span style={{ color: '#00f3ff' }}>IMAGENS</span>
              </h1>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 font-semibold transition-all duration-300 relative group"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:text-cyan-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl text-gray-300 hover:text-cyan-400 font-bold transition-colors"
              style={{ fontFamily: 'Impact, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes logoGlow {
          0%, 100% {
            filter: drop-shadow(0 0 8px #00f3ff) brightness(1);
          }
          50% {
            filter: drop-shadow(0 0 15px #ff00ff) brightness(1.3);
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </>
  );
}
