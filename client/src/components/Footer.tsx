import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="relative border-t border-gray-800/50 bg-black" role="contentinfo">
      <div className="container py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-montserrat font-bold text-white mb-4">
              SMK IMAGENS
            </h3>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Transformando momentos em histórias visuais memoráveis através de fotografia e filmagem profissional.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-bold text-white mb-6">
              Links Rápidos
            </h4>
            <div className="flex gap-4" role="group" aria-label="Redes sociais">
              <a href="https://www.instagram.com/samuelcarvalho.imagens?igsh=MTB6aDBra3locmN3cw==" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso Instagram (abre em nova aba)" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300">
                <Instagram size={20} aria-hidden="true" />
                Instagram
              </a>
              <a href="https://www.facebook.com/SamuelCarvalhoImagens" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso Facebook (abre em nova aba)" className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300">
                <Facebook size={20} aria-hidden="true" />
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-bold text-white mb-6">
              Contatos
            </h4>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400 font-sans text-sm hover:text-blue-500 transition-colors">
                  <Phone size={18} className="text-blue-500 flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+351962279674" aria-label="Ligar para +351 962 279 674">
                    +351 962 279 674
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 font-sans text-sm hover:text-blue-500 transition-colors">
                  <Mail size={18} className="text-blue-500 flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:saasouzaplay@gmail.com" aria-label="Enviar email para saasouzaplay@gmail.com">
                    saasouzaplay@gmail.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800/50 my-8" role="separator" aria-hidden="true"></div>

        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-gray-500 font-sans text-xs md:text-sm flex items-center gap-2 flex-wrap justify-center">
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-blue-500 flex-shrink-0" aria-hidden="true" />
              Portugal
            </span>
            <span className="hidden md:inline" aria-hidden="true">|</span>
            <span>© {currentYear} Fotografia & Filme.</span>
            <span>Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
