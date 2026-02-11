/**
 * WhatsApp Button Component
 * Design: Minimalismo Cinematográfico
 * - Botão flutuante fixo no canto inferior direito
 * - Pulsação sutil para chamar atenção
 * - Integração com WhatsApp Business
 * - Responsivo para mobile
 */

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  // Número de WhatsApp em Portugal
  const phoneNumber = '351962279674';
  const message = 'Olá! Gostaria de solicitar um orçamento para um projeto de fotografia e/ou filmagem. Poderia me informar mais detalhes sobre seus serviços?';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Abrir WhatsApp"
    >
      {/* Pulse Background */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-75"></div>
      
      {/* Button */}
      <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 cursor-pointer">
        <MessageCircle size={32} className="text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gray-700">
        Solicite um orçamento
        <div className="absolute bottom-0 right-4 transform translate-y-1 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </a>
  );
}
