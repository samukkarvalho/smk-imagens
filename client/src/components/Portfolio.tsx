import { useState } from 'react';
import { X, Facebook } from 'lucide-react';

const projectCategories = {
  fotografia: [
    {
      id: 'universo-paralello-2025',
      name: 'Universo Paralello Teaser Party Portugal 2025',
      description: 'Cobertura fotográfica do evento UP',
      facebookUrl: 'https://www.facebook.com/SamuelCarvalhoImagens',
      items: [
        { id: 'f1-1', type: 'image', url: 'https://i.imgur.com/jHuZj8U.jpg', title: 'Foto 1' },
        { id: 'f1-2', type: 'image', url: 'https://i.imgur.com/WlsE9L9.jpg', title: 'Foto 2' },
        { id: 'f1-3', type: 'image', url: 'https://i.imgur.com/VZuvG1F.jpg', title: 'Foto 3' },
        { id: 'f1-4', type: 'image', url: 'https://i.imgur.com/SOO30RG.jpg', title: 'Foto 4' },
        { id: 'f1-5', type: 'image', url: 'https://i.imgur.com/kdnn4xY.jpg', title: 'Foto 5' },
        { id: 'f1-6', type: 'image', url: 'https://i.imgur.com/uCl6svE.jpg', title: 'Foto 6' },
        { id: 'f1-7', type: 'image', url: 'https://i.imgur.com/zOOXmUc.jpg', title: 'Foto 7' },
        { id: 'f1-8', type: 'image', url: 'https://i.imgur.com/TNqvFJa.jpg', title: 'Foto 8' },
        { id: 'f1-9', type: 'image', url: 'https://i.imgur.com/dBWPN6X.jpg', title: 'Foto 9' },
        { id: 'f1-10', type: 'image', url: 'https://i.imgur.com/qEbGZyy.jpg', title: 'Foto 10' },
        { id: 'f1-11', type: 'image', url: 'https://i.imgur.com/RffcgVa.jpg', title: 'Foto 11' },
        { id: 'f1-12', type: 'image', url: 'https://i.imgur.com/ve3JFHj.jpg', title: 'Foto 12' },
        { id: 'f1-13', type: 'image', url: 'https://i.imgur.com/NgYuo2F.jpg', title: 'Foto 13' },
        { id: 'f1-14', type: 'image', url: 'https://i.imgur.com/aQXPalK.jpg', title: 'Foto 14' },
        { id: 'f1-15', type: 'image', url: 'https://i.imgur.com/vRBgYHH.jpg', title: 'Foto 15' },
        { id: 'f1-16', type: 'image', url: 'https://i.imgur.com/blV09FY.jpg', title: 'Foto 16' },
        { id: 'f1-17', type: 'image', url: 'https://i.imgur.com/gpaRFO0.jpg', title: 'Foto 17' },
        { id: 'f1-18', type: 'image', url: 'https://i.imgur.com/gtZnMmO.jpg', title: 'Foto 18' },
        { id: 'f1-19', type: 'image', url: 'https://i.imgur.com/5X7UTGf.jpg', title: 'Foto 19' },
        { id: 'f1-20', type: 'image', url: 'https://i.imgur.com/YYAJZRJ.jpg', title: 'Foto 20' },
      ]
    },
    {
      id: 'music-day',
      name: 'Music Day 2021',
      description: 'Cobertura fotográfica Music Day',
      items: [
        { id: 'f2-1', type: 'image', url: 'https://i.imgur.com/0rkL9YG.jpg', title: 'Foto 1' },
        { id: 'f2-2', type: 'image', url: 'https://i.imgur.com/T73CIKG.jpg', title: 'Foto 2' },
        { id: 'f2-3', type: 'image', url: 'https://i.imgur.com/2Yu9OiM.jpg', title: 'Foto 3' },
        { id: 'f2-4', type: 'image', url: 'https://i.imgur.com/ILdCiE7.jpg', title: 'Foto 4' },
        { id: 'f2-5', type: 'image', url: 'https://i.imgur.com/LGx7BSY.jpg', title: 'Foto 5' },
        { id: 'f2-6', type: 'image', url: 'https://i.imgur.com/qVOl8lM.jpg', title: 'Foto 6' },
        { id: 'f2-7', type: 'image', url: 'https://i.imgur.com/TDmrrc9.jpg', title: 'Foto 7' },
        { id: 'f2-8', type: 'image', url: 'https://i.imgur.com/xaJOfvU.jpg', title: 'Foto 8' },
        { id: 'f2-9', type: 'image', url: 'https://i.imgur.com/Yvy4nmh.jpg', title: 'Foto 9' },
        { id: 'f2-10', type: 'image', url: 'https://i.imgur.com/FOAi4k8.jpg', title: 'Foto 10' },
        { id: 'f2-11', type: 'image', url: 'https://i.imgur.com/YcSsaY7.jpg', title: 'Foto 11' },
        { id: 'f2-12', type: 'image', url: 'https://i.imgur.com/oHsbQe9.jpg', title: 'Foto 12' },
        { id: 'f2-13', type: 'image', url: 'https://i.imgur.com/AfT6eoe.jpg', title: 'Foto 13' },
        { id: 'f2-14', type: 'image', url: 'https://i.imgur.com/ZdMWypg.jpg', title: 'Foto 14' },
        { id: 'f2-15', type: 'image', url: 'https://i.imgur.com/hLHGnEP.jpg', title: 'Foto 15' },
        { id: 'f2-16', type: 'image', url: 'https://i.imgur.com/vLNgNEN.jpg', title: 'Foto 16' },
        { id: 'f2-17', type: 'image', url: 'https://i.imgur.com/spbLGuF.jpg', title: 'Foto 17' },
        { id: 'f2-18', type: 'image', url: 'https://i.imgur.com/w1nxnxO.jpg', title: 'Foto 18' },
        { id: 'f2-19', type: 'image', url: 'https://i.imgur.com/eQY1eCe.jpg', title: 'Foto 19' },
        { id: 'f2-20', type: 'image', url: 'https://i.imgur.com/63Nm9FT.jpg', title: 'Foto 20' },
        { id: 'f2-21', type: 'image', url: 'https://i.imgur.com/ogkkEiA.jpg', title: 'Foto 21' },
        { id: 'f2-22', type: 'image', url: 'https://i.imgur.com/8MDAEx0.jpg', title: 'Foto 22' },
        { id: 'f2-23', type: 'image', url: 'https://i.imgur.com/MdbHvrt.jpg', title: 'Foto 23' },
        { id: 'f2-24', type: 'image', url: 'https://i.imgur.com/PQI1bT6.jpg', title: 'Foto 24' },
        { id: 'f2-25', type: 'image', url: 'https://i.imgur.com/nWXSazC.jpg', title: 'Foto 25' },
      ]
    },
    {
      id: 'shakti-festival-2019',
      name: 'Shakti Festival 2019',
      description: 'Cobertura fotográfica Shakti Festival',
      items: [
        { id: 'f3-1', type: 'image', url: 'https://i.imgur.com/PQlI8Wb.jpg', title: 'Foto 1' },
        { id: 'f3-2', type: 'image', url: 'https://i.imgur.com/3eGv8mh.jpg', title: 'Foto 2' },
        { id: 'f3-3', type: 'image', url: 'https://i.imgur.com/qxw2F9H.jpg', title: 'Foto 3' },
        { id: 'f3-4', type: 'image', url: 'https://i.imgur.com/rjEcgbo.jpg', title: 'Foto 4' },
        { id: 'f3-5', type: 'image', url: 'https://i.imgur.com/xdvw58u.jpg', title: 'Foto 5' },
        { id: 'f3-6', type: 'image', url: 'https://i.imgur.com/oar1ItR.jpg', title: 'Foto 6' },
        { id: 'f3-7', type: 'image', url: 'https://i.imgur.com/E98mWKX.jpg', title: 'Foto 7' },
        { id: 'f3-8', type: 'image', url: 'https://i.imgur.com/fadPAiA.jpg', title: 'Foto 8' },
        { id: 'f3-9', type: 'image', url: 'https://i.imgur.com/BWKsyAb.jpg', title: 'Foto 9' },
        { id: 'f3-10', type: 'image', url: 'https://i.imgur.com/edYGQwS.jpg', title: 'Foto 10' },
        { id: 'f3-11', type: 'image', url: 'https://i.imgur.com/D6v6udV.jpg', title: 'Foto 11' },
        { id: 'f3-12', type: 'image', url: 'https://i.imgur.com/FbbGHqx.jpg', title: 'Foto 12' },
        { id: 'f3-13', type: 'image', url: 'https://i.imgur.com/KvRmwv6.jpg', title: 'Foto 13' },
        { id: 'f3-14', type: 'image', url: 'https://i.imgur.com/X7QMmiw.jpg', title: 'Foto 14' },
        { id: 'f3-15', type: 'image', url: 'https://i.imgur.com/WxqNA0m.jpg', title: 'Foto 15' },
        { id: 'f3-16', type: 'image', url: 'https://i.imgur.com/huOswQA.jpg', title: 'Foto 16' },
        { id: 'f3-17', type: 'image', url: 'https://i.imgur.com/PjUv4Oe.jpg', title: 'Foto 17' },
        { id: 'f3-18', type: 'image', url: 'https://i.imgur.com/O5BdpCJ.jpg', title: 'Foto 18' },
        { id: 'f3-19', type: 'image', url: 'https://i.imgur.com/VVDUeBW.jpg', title: 'Foto 19' },
        { id: 'f3-20', type: 'image', url: 'https://i.imgur.com/kaJJ9Fh.jpg', title: 'Foto 20' },
        { id: 'f3-21', type: 'image', url: 'https://i.imgur.com/DesG61C.jpg', title: 'Foto 21' },
        { id: 'f3-22', type: 'image', url: 'https://i.imgur.com/Qv8fL9a.jpg', title: 'Foto 22' },
        { id: 'f3-23', type: 'image', url: 'https://i.imgur.com/zOysWjy.jpg', title: 'Foto 23' },
        { id: 'f3-24', type: 'image', url: 'https://i.imgur.com/p6Q9dSK.jpg', title: 'Foto 24' },
        { id: 'f3-25', type: 'image', url: 'https://i.imgur.com/gejDpsz.jpg', title: 'Foto 25' },
        { id: 'f3-26', type: 'image', url: 'https://i.imgur.com/417b2cm.jpg', title: 'Foto 26' },
        { id: 'f3-27', type: 'image', url: 'https://i.imgur.com/1pFMxOR.jpg', title: 'Foto 27' },
        { id: 'f3-28', type: 'image', url: 'https://i.imgur.com/aE7fbg6.jpg', title: 'Foto 28' },
        { id: 'f3-29', type: 'image', url: 'https://i.imgur.com/QeUZdAG.jpg', title: 'Foto 29' },
        { id: 'f3-30', type: 'image', url: 'https://i.imgur.com/LCnVHzB.jpg', title: 'Foto 30' },
        { id: 'f3-31', type: 'image', url: 'https://i.imgur.com/kVhyXPL.jpg', title: 'Foto 31' },
        { id: 'f3-32', type: 'image', url: 'https://i.imgur.com/vLs1uTC.jpg', title: 'Foto 32' },
        { id: 'f3-33', type: 'image', url: 'https://i.imgur.com/mzXNXq8.jpg', title: 'Foto 33' },
        { id: 'f3-34', type: 'image', url: 'https://i.imgur.com/vm2kH9T.jpg', title: 'Foto 34' },
        { id: 'f3-35', type: 'image', url: 'https://i.imgur.com/F33zlwK.jpg', title: 'Foto 35' },
        { id: 'f3-36', type: 'image', url: 'https://i.imgur.com/6pIBqMF.jpg', title: 'Foto 36' },
        { id: 'f3-37', type: 'image', url: 'https://i.imgur.com/ggyIe0T.jpg', title: 'Foto 37' },
        { id: 'f3-38', type: 'image', url: 'https://i.imgur.com/onanJXc.jpg', title: 'Foto 38' },
        { id: 'f3-39', type: 'image', url: 'https://i.imgur.com/ftx8Slg.jpg', title: 'Foto 39' },
        { id: 'f3-40', type: 'image', url: 'https://i.imgur.com/WkLYevl.jpg', title: 'Foto 40' },
        { id: 'f3-41', type: 'image', url: 'https://i.imgur.com/ClTNtK3.jpg', title: 'Foto 41' },
        { id: 'f3-42', type: 'image', url: 'https://i.imgur.com/IAAo1cy.jpg', title: 'Foto 42' },
        { id: 'f3-43', type: 'image', url: 'https://i.imgur.com/VnAGN1L.jpg', title: 'Foto 43' },
        { id: 'f3-44', type: 'image', url: 'https://i.imgur.com/CWFYKf0.jpg', title: 'Foto 44' },
      ]
    },
  ],
  videos: [
    {
      id: 'video-1',
      name: 'Evento Eletrônica - Vídeo 1',
      description: 'Cobertura de evento de música eletrônica',
      items: [
        { id: 'v1', type: 'video', url: 'https://www.youtube.com/embed/Sy0KGukdVxM', title: 'Vídeo 1' },
      ]
    },
    {
      id: 'video-2',
      name: 'Evento Eletrônica - Vídeo 2',
      description: 'Cobertura de evento de música eletrônica',
      items: [
        { id: 'v2', type: 'video', url: 'https://www.youtube.com/embed/QL1B8MEJFHU', title: 'Vídeo 2' },
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

  const currentCategory = currentCategories.find(c => c.id === selectedCategory);

  return (
    <section id="portfolio" className="w-full py-20 relative">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-12">
          Portfólio
        </h2>

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

        {selectedType === 'videos' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <iframe
                  src={category.items[0].url}
                  className="w-full h-64 md:h-80"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        ) : !selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.items[0].url}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all flex items-center justify-center">
                    <span className="text-white font-montserrat font-bold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {category.items.length} Fotos
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
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-6 px-4 py-2 bg-blue-500 text-white font-montserrat font-bold hover:bg-blue-600 transition-all flex items-center gap-2 rounded-lg"
            >
              ← Voltar
            </button>

            <h3 className="text-3xl font-montserrat font-bold text-white mb-8">
              {currentCategory?.name}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory?.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden group cursor-pointer transition-all"
                  onClick={() => openLightbox(item.url)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all flex items-center justify-center">
                      <span className="text-white font-montserrat text-lg opacity-0 group-hover:opacity-100 transition-opacity">🔍 Ver Imagem</span>
                    </div>
                  </div>
                </div>
              ))}

              {currentCategory?.facebookUrl && (
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                  <Facebook size={48} className="text-white mb-4" />
                  <h3 className="text-xl font-montserrat font-bold text-white mb-3">
                    Quer ver o álbum completo?
                  </h3>
                  <p className="text-blue-100 mb-6 text-sm">
                    Confira na nossa Página do Facebook !
                  </p>
                  <a
                    href={currentCategory.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all"
                  >
                    Abrir no Facebook
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors p-2 bg-black/50 rounded-full hover:bg-black/70"
          >
            <X size={32} />
          </button>

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
