import { useState } from 'react';

// Dados dos projetos organizados por categoria
const projectCategories = {
  fotografia: [
    {
      id: 'cat-1',
      name: 'Universo Paralelo Portugal',
      description: 'Evento especial em Portugal',
      images: [
        { id: '1', url: 'https://i.imgur.com/jHuZj8U.jpg', title: 'Foto 1' },
        { id: '2', url: 'https://i.imgur.com/WlsE9L9.jpg', title: 'Foto 2' },
      ]
    },
  ],
  videos: [
    {
      id: 'cat-3',
      name: 'Documentário Portugal',
      description: 'Documentário sobre Portugal',
      images: [
        { id: '6', url: 'https://i.imgur.com/njyiG1Y.jpg', title: 'Vídeo 1' },
        { id: '7', url: 'https://i.imgur.com/njyiG1Y.jpg', title: 'Vídeo 2' },
      ]
    },
  ]
};

export default function Portfolio( ) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState('fotografia');

  const currentCategories = projectCategories[selectedType];

  return (
    <section id="portfolio" className="w-full bg-black py-20">
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
            className={`px-6 py-3 font-montserrat font-bold transition-all ${
              selectedType === 'fotografia'
                ? 'bg-blue-500 text-white'
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
            className={`px-6 py-3 font-montserrat font-bold transition-all ${
              selectedType === 'videos'
                ? 'bg-blue-500 text-white'
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
                className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.images[0].url}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                    <span className="text-white font-montserrat font-bold text-center px-4">
                      {category.images.length} {selectedType === 'fotografia' ? 'Fotos' : 'Vídeos'}
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
          /* Mostrar imagens da categoria selecionada */
          <div>
            {/* Botão voltar */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-6 px-4 py-2 bg-blue-500 text-white font-montserrat font-bold hover:bg-blue-600 transition-all flex items-center gap-2"
            >
              ← Voltar
            </button>

            {/* Título da categoria */}
            <h3 className="text-3xl font-montserrat font-bold text-white mb-8">
              {currentCategories.find(c => c.id === selectedCategory)?.name}
            </h3>

            {/* Grid de imagens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategories
                .find(c => c.id === selectedCategory)
                ?.images.map((image) => (
                  <div
                    key={image.id}
                    className="bg-gray-900 rounded-lg overflow-hidden group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white font-montserrat">Ver</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
