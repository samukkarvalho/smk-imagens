import { useState } from 'react';
import { X } from 'lucide-react';

// Dados dos projetos organizados por categoria
const projectCategories = {
  fotografia: [
    {
      id: 'universo-paralello-2025',
      name: 'Universo Paralello Teaser Party Portugal 2025',
      description: 'Cobertura fotográfica do evento UP',
      items: [
        { id: 'f1-1', type: 'image', url: 'https://i.imgur.com/jHuZj8U.jpg', title: 'Foto 1' },
        { id: 'f1-2', type: 'image', url: 'https://i.imgur.com/WlsE9L9.jpg', title: 'Foto 2' },
        { id: 'f1-3', type: 'image', url: 'https://i.imgur.com/VZuvG1F.jpg', title: 'Foto 3' },
        { id: 'f1-4', type: 'image', url: 'https://i.imgur.com/SOO30RG.jpg', title: 'Foto 4' },
        { id: 'f1-5', type: 'image', url: 'https://i.imgur.com/kdnn4xY.jpg', title: 'Foto 5' },
      ]
    },
    {
      id: 'festa-2',
      name: 'Festa 2',
      description: 'Cobertura fotográfica da Festa 2',
      items: [
        { id: 'f2-1', type: 'image', url: 'https://via.placeholder.com/800x600/1a1a1a/666666?text=Em+Breve', title: 'Foto 1' },
      ]
    },
    {
      id: 'festa-5',
      name: 'Festa 5',
      description: 'Cobertura fotográfica da Festa 5',
      items: [
        { id: 'f5-1', type: 'image', url: 'https://via.placeholder.com/800x600/1a1a1a/666666?text=Em+Breve', title: 'Foto 1' },
      ]
    },
  ],
  videos: [
    {
      id: 'eventos-eletronica',
      name: 'Eventos de Eletrônica',
      description: 'Cobertura de eventos de música eletrônica',
      items: [
        { id: 'v1', type: 'video', url: 'https://www.youtube.com/embed/QL1B8MEJFHU', title: 'Evento 1' },
      ]
    },
  ]
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState('fotografia');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const currentCategories = projectCategories[selectedType];

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="w-full bg-black py-20 relative">
      <div className="container">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-12">
          Portfólio
        </h2>

        {/* Botões para trocar entre Fotografia e Vídeos */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => {
              setSelectedType('fotografia');
              setSelectedCategory(null);
            }}
            className={`px-6 py-3 font-montserrat font-bold transition-all rounded-lg ${
              selectedType === 'fotografia'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            📸 Fotografia
          </button>
          <button
            onClick={() => {
              setSelectedType('videos');
              setSelectedCategory(null);
            }}
            className={`px-6 py-3 font-montserrat font-bold transition-all rounded-lg ${
              selectedType === 'videos'
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            🎬 Vídeos
          </button>
        </div>

        {/* Mostrar categorias da seção selecionada */}
        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 transition-all group border border-gray-800 hover:border-blue-500/50"
              >
                <div className="relative h-48 overflow-hidden">
                  {category.items[0].type === 'image' ? (
                    <img
                      src={category.items[0].url}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <iframe
                      src={category.items[0].url}
                      className="w-full h-full object-cover pointer-events-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                    <span className="text-white font-montserrat font-bold text-center px-4">
                      {category.items.length} {selectedType === 'fotografia' ? 'Fotos' : 'Vídeos'}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-montserrat font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Mostrar itens da categoria selecionada */
          <div>
            {/* Botão voltar */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-6 px-4 py-2 bg-blue-500 text-white font-montserrat font-bold hover:bg-blue-600 transition-all flex items-center gap-2 rounded-lg"
            >
              ← Voltar
            </button>

            {/* Título da categoria */}
            <h3 className="text-3xl font-montserrat font-bold text-white mb-8">
              {currentCategories.find(c => c.id === selectedCategory)?.name}
            </h3>

            {/* Grid de imagens/vídeos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategories
                .find(c => c.id === selectedCategory)
                ?.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-900 rounded-lg overflow-hidden group cursor-pointer border border-gray-800 hover:border-blue-500/50 transition-all"
                    onClick={() => item.type === 'image' && openLightbox(item.url)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      {item.type === 'image' ? (
                        <>
                          <img
                            src={item.url}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="text-white font-montserrat text-lg">🔍 Ver Imagem</span>
                          </div>
                        </>
                      ) : (
                        <iframe
                          src={item.url}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* LIGHTBOX Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Botão Fechar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors p-2 bg-black/50 rounded-full hover:bg-black/70"
          >
            <X size={32} />
          </button>

          {/* Imagem Maximizada */}
          <img
            src={lightboxImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
