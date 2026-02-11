/**
 * Footer Component
 * Design: Minimalismo Cinematográfico
 * - Fundo preto com bordas azuis
 * - Informações de contato e redes sociais
 * - Links rápidos de navegação
 */

import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-montserrat font-bold text-white mb-4">
              SMK IMAGENS
            </h3>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Transformando momentos em histórias visuais memoráveis através de fotografia e filmagem profissional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-bold text-white mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {['Portfólio', 'Sobre', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300 font-sans text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-montserrat font-bold text-white mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 font-sans text-sm hover:text-blue-500 transition-colors">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                <span>+351 962 279 674</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-sans text-sm hover:text-blue-500 transition-colors">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <span>saasouzaplay@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-sans text-sm hover:text-blue-500 transition-colors">
                <MapPin size={18} className="text-blue-500 flex-shrink-0" />
                <span>Portugal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-500 font-sans text-sm text-center md:text-left">
            © {currentYear} Fotografia & Filme. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {[
              { icon: Instagram, label: 'Instagram', href: '#' },
              { icon: Youtube, label: 'YouTube', href: '#' },
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
