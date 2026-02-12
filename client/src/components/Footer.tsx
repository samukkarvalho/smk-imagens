import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container py-16 md:py-20">
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
            <ul className="space-y-3">
              {['Portfólio', 'Sobre', 'Contato'].map((link) => (
                <li key={link}>
                  
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300 font-sans text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

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

        <div className="border-t border-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 font-sans text-sm text-center md:text-left">
            © {currentYear} Fotografia & Filme. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            {[
              { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/samuelcarvalho.imagens/' },
              { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/SamuelCarvalhoImagens' },
            ].map(({ icon: Icon, label, href }) => (
              
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
