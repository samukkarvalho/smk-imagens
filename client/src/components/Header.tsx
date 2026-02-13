import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="container flex items-center justify-between py-3">
        
        {/* Logo SMK IMAGENS - 1cm das bordas */}
        <a href="#" className="ml-4 mt-1">
          <img 
            src="/smk-logo-header.png" 
            alt="SMK Imagens Logo" 
            className="h-10 md:h-12 w-auto hover:scale-105 transition-transform duration-300"
            style={{ filter: 'drop-shadow(0 0 15px rgba(0, 200, 255, 0.6))' }}
          />
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 mr-8">
          <a
            href="#portfolio"
            className="text-white hover:text-blue-400 font-montserrat font-medium transition-colors"
          >
            Portfólio
          </a>
          <a
            href="#sobre"
            className="text-white hover:text-blue-400 font-montserrat font-medium transition-colors"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="text-white hover:text-blue-400 font-montserrat font-medium transition-colors"
          >
            Contatos
          </a>
        </nav>

        {/* Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:text-cyan-400 transition-colors mr-4"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <nav className="container py-4 flex flex-col gap-4">
            <a
              href="#portfolio"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-400 font-montserrat font-medium transition-colors py-2"
            >
              Portfólio
            </a>
            <a
              href="#sobre"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-400 font-montserrat font-medium transition-colors py-2"
            >
              Sobre
            </a>
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-400 font-montserrat font-medium transition-colors py-2"
            >
              Contatos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
