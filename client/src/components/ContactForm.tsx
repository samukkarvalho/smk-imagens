import { useState } from 'react';
import { X, MessageCircle, Mail } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `*Nova Solicitação de Orçamento*%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A%0A*Ideia do Projeto:*%0A${formData.message}`;
    const whatsappNumber = '351962279674';

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('Nova Solicitação de Orçamento');
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n\nEmail: ${formData.email}\n\nTelefone: ${formData.phone}\n\nIdeia do Projeto:\n${formData.message}`
    );

    window.location.href = `mailto:saasouzaplay@gmail.com?subject=${subject}&body=${body}`;
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-start justify-center overflow-y-auto p-4 py-8"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 rounded-lg max-w-2xl w-full p-6 md:p-8 relative border border-cyan-500/30 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 pr-8" style={{ fontFamily: 'Impact, sans-serif' }}>
          Vamos Trabalhar Juntos!
        </h2>
        <p className="text-sm md:text-base text-gray-400 mb-6">
          Preencha o formulário e escolha como prefere entrar em contato
        </p>

        <form className="space-y-3 md:space-y-4">
          <div>
            <label htmlFor="name" className="block text-white text-sm md:text-base font-semibold mb-1 md:mb-2">
              Nome *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base bg-gray-800 border border-gray-700 rounded text-white focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white text-sm md:text-base font-semibold mb-1 md:mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base bg-gray-800 border border-gray-700 rounded text-white focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white text-sm md:text-base font-semibold mb-1 md:mb-2">
              Telefone *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base bg-gray-800 border border-gray-700 rounded text-white focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="+351 000 000 000"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white text-sm md:text-base font-semibold mb-1 md:mb-2">
              Ideia do Projeto *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base bg-gray-800 border border-gray-700 rounded text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              placeholder="Conte-nos sobre sua ideia, evento, projeto..."
            />
          </div>

          {/* Botão WhatsApp */}
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full px-4 py-3 md:px-6 md:py-4 text-sm md:text-base bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Enviar via WhatsApp
          </button>

          {/* Divisor */}
          <div className="relative my-4 md:my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-xs md:text-sm">
              <span className="px-3 md:px-4 bg-gray-900 text-gray-400">
                Não tem WhatsApp? Envie-nos um email
              </span>
            </div>
          </div>

          {/* Botão Email */}
          <button
            type="button"
            onClick={handleEmail}
            className="w-full px-4 py-3 md:px-6 md:py-4 text-sm md:text-base bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            Enviar via Email
          </button>
        </form>
      </div>
    </div>
  );
}
