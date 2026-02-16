import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, X, Copy, Check } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showInstagramModal, setShowInstagramModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyUsername = () => {
    navigator.clipboard.writeText('@smkimagens');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
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
                {/* Desktop: Link direto */}
                <a href="https://www.instagram.com/smkimagens/" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300">
                  <Instagram size={20} />
                  Instagram
                </a>
                
                {/* Mobile: Modal */}
                <button onClick={() => setShowInstagramModal(true)} className="flex md:hidden items-center gap-2 px-4 py-2 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300">
                  <Instagram size={20} />
                  Instagram
                </button>
                
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

      {showInstagramModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setShowInstagramModal(false)}>
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 max-w-md w-full relative border border-purple-500/30" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowInstagramModal(false)} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="mb-6">
                <h2 className="text-4xl font-montserrat font-bold text-white mb-2">
                  SMK
                </h2>
                <h3 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  IMAGENS
                </h3>
              </div>

              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full mb-4">
                <Instagram size={32} className="text-white" />
              </div>

              <h4 className="text-xl font-montserrat font-bold text-white mb-2">
                Siga no Instagram
              </h4>
              
              <p className="text-gray-400 mb-6 text-sm">
                Copie nosso @ e cole no Instagram
              </p>

              <div className="bg-black/60 rounded-xl p-6 mb-6 border border-cyan-500/30">
                <p className="text-4xl font-bold text-cyan-400 font-mono">
                  @smkimagens
                </p>
              </div>

              <button onClick={handleCopyUsername} className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 text-lg">
                {copied ? (
                  <>
                    <Check size={24} />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy size={24} />
                    Copiar @
                  </>
                )}
              </button>

              <p className="text-gray-500 text-xs mt-4">
                Cole no Instagram para ir direto ao perfil
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
