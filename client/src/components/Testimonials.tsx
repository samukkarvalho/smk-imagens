import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alisson Farias',
    photo: 'https://ui-avatars.com/api/?name=Alisson+Farias&background=0D8ABC&color=fff',
    text: 'Que trabalho incrível parabéns 👍',
    rating: 5,
  },
  {
    id: 2,
    name: 'Leo Fares',
    photo: 'https://ui-avatars.com/api/?name=Leo+Fares&background=1877F2&color=fff',
    text: 'Obrigado pelo registro ❤️👏👏🙏',
    rating: 5,
  },
  {
    id: 3,
    name: 'Wagner Sousa',
    photo: 'https://ui-avatars.com/api/?name=Wagner+Sousa&background=8B5CF6&color=fff',
    text: 'Seu trabalho é incrível, mano!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Suzana Fregona',
    photo: 'https://ui-avatars.com/api/?name=Suzana+Fregona&background=EC4899&color=fff',
    text: 'Todas incríveis, parabéns ❤️😍',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 relative">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4 text-center">
          Depoimentos
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          O que nossos clientes dizem sobre nosso trabalho
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-blue-500/50 transition-all group"
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Foto e Nome */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-xs">Cliente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
