/**
 * Header Component
 * Design: Minimalismo Cinematográfico
 * - Navegação limpa e minimalista
 * - Fundo preto puro com tipografia branca
 * - Logo/nome em Montserrat bold
 * - Links de navegação em Roboto
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl md:text-2xl font-montserrat font-bold text-white tracking-wider">
            SMK
          </h1>
          <p className="text-xs text-blue-500 font-montserrat font-semibold">IMAGENS</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white hover:text-blue-500 transition-colors duration-300 font-sans text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white hover:text-blue-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black border-t border-gray-800 py-4">
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-blue-500 transition-colors duration-300 font-sans text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
