import { useState, useEffect } from 'react';
import { X, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';

const projectCategories = {
  fotografia: [
    {
      id: 'universo-paralello-2025',
      name: 'Universo Paralello Portugal 2025',
      description: '',
      facebookUrl: 'https://www.facebook.com/SamuelCarvalhoImagens',
      items: [
        { id: 'f1-1', url: 'https://i.imgur.com/jHuZj8U.jpg' },
        { id: 'f1-2', url: 'https://i.imgur.com/WlsE9L9.jpg' },
        { id: 'f1-3', url: 'https://i.imgur.com/VZuvG1F.jpg' },
        { id: 'f1-4', url: 'https://i.imgur.com/SOO30RG.jpg' },
        { id: 'f1-5', url: 'https://i.imgur.com/kdnn4xY.jpg' },
        { id: 'f1-6', url: 'https://i.imgur.com/uCl6svE.jpg' },
        { id: 'f1-7', url: 'https://i.imgur.com/zOOXmUc.jpg' },
        { id: 'f1-8', url: 'https://i.imgur.com/TNqvFJa.jpg' },
        { id: 'f1-9', url: 'https://i.imgur.com/dBWPN6X.jpg' },
        { id: 'f1-10', url: 'https://i.imgur.com/qEbGZyy.jpg' },
        { id: 'f1-11', url: 'https://i.imgur.com/RffcgVa.jpg' },
        { id: 'f1-12', url: 'https://i.imgur.com/ve3JFHj.jpg' },
        { id: 'f1-13', url: 'https://i.imgur.com/NgYuo2F.jpg' },
        { id: 'f1-14', url: 'https://i.imgur.com/aQXPalK.jpg' },
        { id: 'f1-15', url: 'https://i.imgur.com/vRBgYHH.jpg' },
        { id: 'f1-16', url: 'https://i.imgur.com/blV09FY.jpg' },
        { id: 'f1-17', url: 'https://i.imgur.com/gpaRFO0.jpg' },
        { id: 'f1-18', url: 'https://i.imgur.com/gtZnMmO.jpg' },
        { id: 'f1-19', url: 'https://i.imgur.com/5X7UTGf.jpg' },
        { id: 'f1-20', url: 'https://i.imgur.com/YYAJZRJ.jpg' },
      ]
    },
    {
      id: 'music-day',
      name: 'Music Day 2021',
      description: '',
      facebookUrl: 'https://www.facebook.com/SamuelCarvalhoImagens',
      items: [
        { id: 'f2-1', url: 'https://i.imgur.com/0rkL9YG.jpg' },
        { id: 'f2-2', url: 'https://i.imgur.com/T73CIKG.jpg' },
        { id: 'f2-3', url: 'https://i.imgur.com/2Yu9OiM.jpg' },
        { id: 'f2-4', url: 'https://i.imgur.com/ILdCiE7.jpg' },
        { id: 'f2-5', url: 'https://i.imgur.com/LGx7BSY.jpg' },
        { id: 'f2-6', url: 'https://i.imgur.com/qVOl8lM.jpg' },
        { id: 'f2-7', url: 'https://i.imgur.com/TDmrrc9.jpg' },
        { id: 'f2-8', url: 'https://i.imgur.com/xaJOfvU.jpg' },
        { id: 'f2-9', url: 'https://i.imgur.com/Yvy4nmh.jpg' },
        { id: 'f2-10', url: 'https://i.imgur.com/FOAi4k8.jpg' },
        { id: 'f2-11', url: 'https://i.imgur.com/YcSsaY7.jpg' },
        { id: 'f2-12', url: 'https://i.imgur.com/oHsbQe9.jpg' },
        { id: 'f2-13', url: 'https://i.imgur.com/AfT6eoe.jpg' },
        { id: 'f2-14', url: 'https://i.imgur.com/ZdMWypg.jpg' },
        { id: 'f2-15', url: 'https://i.imgur.com/hLHGnEP.jpg' },
        { id: 'f2-16', url: 'https://i.imgur.com/vLNgNEN.jpg' },
        { id: 'f2-17', url: 'https://i.imgur.com/spbLGuF.jpg' },
        { id: 'f2-18', url: 'https://i.imgur.com/w1nxnxO.jpg' },
        { id: 'f2-19', url: 'https://i.imgur.com/eQY1eCe.jpg' },
        { id: 'f2-20', url: 'https://i.imgur.com/63Nm9FT.jpg' },
        { id: 'f2-21', url: 'https://i.imgur.com/ogkkEiA.jpg' },
        { id: 'f2-22', url: 'https://i.imgur.com/8MDAEx0.jpg' },
        { id: 'f2-23', url: 'https://i.imgur.com/MdbHvrt.jpg' },
        { id: 'f2-24', url: 'https://i.imgur.com/PQI1bT6.jpg' },
        { id: 'f2-25', url: 'https://i.imgur.com/nWXSazC.jpg' },
      ]
    },
    {
      id: 'Atlântida Trance 2020',
      name: 'Atlântida Trance 2020',
      description: '',
      facebookUrl: 'https://www.facebook.com/SamuelCarvalhoImagens',
      items: [
        { id: 'f4-1', url: 'https://i.imgur.com/jkPaIJF.jpg' },
        { id: 'f4-2', url: 'https://i.imgur.com/HJUdVws.jpg' }, 
        { id: 'f4-3', url: 'https://i.imgur.com/Ksx5T3q.jpg' }, 
        { id: 'f4-4', url: 'https://i.imgur.com/X6G3Tlm.jpg' }, 
        { id: 'f4-5', url: 'https://i.imgur.com/g4JMLUS.jpg' }, 
        { id: 'f4-6', url: 'https://i.imgur.com/baExWVq.jpg' }, 
        { id: 'f4-7', url: 'https://i.imgur.com/e79TJon.jpg' }, 
        { id: 'f4-8', url: 'https://i.imgur.com/4yfO2l5.jpg' }, 
        { id: 'f4-9', url: 'https://i.imgur.com/DMIMrKA.jpg' }, 
        { id: 'f4-10', url: 'https://i.imgur.com/0eG6tGk.jpg' }, 
        { id: 'f4-11', url: 'https://i.imgur.com/JUAWgf3.jpg' }, 
        { id: 'f4-12', url: 'https://i.imgur.com/cSNbOYs.jpg' }, 
        { id: 'f4-13', url: 'https://i.imgur.com/332AcsA.jpg' }, 
      ]
    },
    {
      id: 'shakti-festival-2019',
      name: 'Shakti Festival 2019',
      description: '',
      facebookUrl: 'https://www.facebook.com/SamuelCarvalhoImagens',
      items: [
        { id: 'f3-1', url: 'https://i.imgur.com/PQlI8Wb.jpg' },
        { id: 'f3-2', url: 'https://i.imgur.com/3eGv8mh.jpg' },
        { id: 'f3-3', url: 'https://i.imgur.com/qxw2F9H.jpg' },
        { id: 'f3-4', url: 'https://i.imgur.com/rjEcgbo.jpg' },
        { id: 'f3-5', url: 'https://i.imgur.com/xdvw58u.jpg' },
        { id: 'f3-6', url: 'https://i.imgur.com/oar1ItR.jpg' },
        { id: 'f3-7', url: 'https://i.imgur.com/E98mWKX.jpg' },
        { id: 'f3-8', url: 'https://i.imgur.com/fadPAiA.jpg' },
        { id: 'f3-9', url: 'https://i.imgur.com/BWKsyAb.jpg' },
        { id: 'f3-10', url: 'https://i.imgur.com/edYGQwS.jpg' },
        { id: 'f3-11', url: 'https://i.imgur.com/D6v6udV.jpg' },
        { id: 'f3-12', url: 'https://i.imgur.com/FbbGHqx.jpg' },
        { id: 'f3-13', url: 'https://i.imgur.com/KvRmwv6.jpg' },
        { id: 'f3-14', url: 'https://i.imgur.com/X7QMmiw.jpg' },
        { id: 'f3-15', url: 'https://i.imgur.com/WxqNA0m.jpg' },
        { id: 'f3-16', url: 'https://i.imgur.com/huOswQA.jpg' },
        { id: 'f3-17', url: 'https://i.imgur.com/PjUv4Oe.jpg' },
        { id: 'f3-18', url: 'https://i.imgur.com/O5BdpCJ.jpg' },
        { id: 'f3-19', url: 'https://i.imgur.com/VVDUeBW.jpg' },
        { id: 'f3-20', url: 'https://i.imgur.com/kaJJ9Fh.jpg' },
        { id: 'f3-21', url: 'https://i.imgur.com/DesG61C.jpg' },
        { id: 'f3-22', url: 'https://i.imgur.com/Qv8fL9a.jpg' },
        { id: 'f3-23', url: 'https://i.imgur.com/zOysWjy.jpg' },
        { id: 'f3-24', url: 'https://i.imgur.com/p6Q9dSK.jpg' },
        { id: 'f3-25', url: 'https://i.imgur.com/gejDpsz.jpg' },
        { id: 'f3-26', url: 'https://i.imgur.com/417b2cm.jpg' },
        { id: 'f3-27', url: 'https://i.imgur.com/1pFMxOR.jpg' },
        { id: 'f3-28', url: 'https://i.imgur.com/aE7fbg6.jpg' },
        { id: 'f3-29', url: 'https://i.imgur.com/QeUZdAG.jpg' },
        { id: 'f3-30', url: 'https://i.imgur.com/LCnVHzB.jpg' },
        { id: 'f3-31', url: 'https://i.imgur.com/kVhyXPL.jpg' },
        { id: 'f3-32', url: 'https://i.imgur.com/vLs1uTC.jpg' },
        { id: 'f3-33', url: 'https://i.imgur.com/mzXNXq8.jpg' },
        { id: 'f3-34', url: 'https://i.imgur.com/vm2kH9T.jpg' },
        { id: 'f3-35', url: 'https://i.imgur.com/F33zlwK.jpg' },
        { id: 'f3-36', url: 'https://i.imgur.com/6pIBqMF.jpg' },
        { id: 'f3-37', url: 'https://i.imgur.com/ggyIe0T.jpg' },
        { id: 'f3-38', url: 'https://i.imgur.com/onanJXc.jpg' },
        { id: 'f3-39', url: 'https://i.imgur.com/ftx8Slg.jpg' },
        { id: 'f3-40', url: 'https://i.imgur.com/WkLYevl.jpg' },
        { id: 'f3-41', url: 'https://i.imgur.com/ClTNtK3.jpg' },
        { id: 'f3-42', url: 'https://i.imgur.com/IAAo1cy.jpg' },
        { id: 'f3-43', url: 'https://i.imgur.com/VnAGN1L.jpg' },
        { id: 'f3-44', url: 'https://i.imgur.com/CWFYKf0.jpg' },
      ]
    },
    {
      id: 'Solar Festival 2019',
      name: 'Solar Festival 2019',
      description: '',
      facebookUrl: 'https://www.facebook.com/SamuelCarvalhoImagens',
      items: [
        { id: 'f5-1', url: 'https://i.imgur.com/IBOngDc.jpg'}, 
        { id: 'f5-2', url: 'https://i.imgur.com/GOLhFB2.jpg'}, 
        { id: 'f5-3', url: 'https://i.imgur.com/Uvw5zFt.jpg'}, 
        { id: 'f5-4', url: 'https://i.imgur.com/LIYQ5ZF.jpg'}, 
        { id: 'f5-5', url: 'https://i.imgur.com/466Lngk.jpg'}, 
        { id: 'f5-6', url: 'https://i.imgur.com/MCL3HYg.jpg'}, 
        { id: 'f5-7', url: 'https://i.imgur.com/D3v6yAM.jpg'}, 
        { id: 'f5-8', url: 'https://i.imgur.com/VpTQFVO.jpg'}, 
        { id: 'f5-9', url: 'https://i.imgur.com/TYe5e2d.jpg'}, 
        { id: 'f5-10', url: 'https://i.imgur.com/urXWfde.jpg'}, 
        { id: 'f5-11', url: 'https://i.imgur.com/0n92ga8.jpg'}, 
        { id: 'f5-12', url: 'https://i.imgur.com/V5lYm9l.jpg'}, 
        { id: 'f5-13', url: 'https://i.imgur.com/RtHJd2V.jpg'}, 
        { id: 'f5-14', url: 'https://i.imgur.com/LjnMi9i.jpg'}, 
      ]
    },
    {
      id: 'Elementare 2019',
      name: 'Elementare 2019',
      description: '',
      facebookUrl: 'https://www.facebook.com/SamuelCarvalhoImagens',
      items: [
        { id: 'f6-1', url: 'https://i.imgur.com/KG4ODir.jpg'}, 
        { id: 'f6-2', url: 'https://i.imgur.com/MLtnWWJ.jpg'}, 
        { id: 'f6-3', url: 'https://i.imgur.com/8tibVTJ.jpg'}, 
        { id: 'f6-4', url: 'https://i.imgur.com/JlOxUpj.jpg'}, 
        { id: 'f6-5', url: 'https://i.imgur.com/xBEEJAv.jpg'}, 
        { id: 'f6-6', url: 'https://i.imgur.com/djOVnaV.jpg'}, 
        { id: 'f6-7', url: 'https://i.imgur.com/UKTWvxH.jpg'}, 
        { id: 'f6-8', url: 'https://i.imgur.com/Va0QTJ0.jpg'}, 
        { id: 'f6-9', url: 'https://i.imgur.com/3cj6nUa.jpg'}, 
      ]
    },
    {
      id: 'Balikali 2018',
      name: 'Balikali 2018',
      description: '',
      facebookUrl: 'https://www.facebook.com/SamuelCarvalhoImagens',
      items: [
        { id: 'f7-1', url: 'https://i.imgur.com/7qq4ko5.jpg'}, 
        { id: 'f7-2', url: 'https://i.imgur.com/qma5Omk.jpg'}, 
        { id: 'f7-3', url: 'https://i.imgur.com/AqrwDCy.jpg'}, 
        { id: 'f7-4', url: 'https://i.imgur.com/J3cs6RR.jpg'}, 
        { id: 'f7-5', url: 'https://i.imgur.com/Aj2lTdS.jpg'}, 
        { id: 'f7-6', url: 'https://i.imgur.com/TqfRYbD.jpg'}, 
        { id: 'f7-7', url: 'https://i.imgur.com/zpTaMQE.jpg'}, 
        { id: 'f7-8', url: 'https://i.imgur.com/Mkcw0GP.jpg'}, 
        { id: 'f7-9', url: 'https://i.imgur.com/CdIBTQg.jpg'}, 
        { id: 'f7-10', url: 'https://i.imgur.com/mpzrnVO.jpg'}, 
        { id: 'f7-11', url: 'https://i.imgur.com/bxWyuec.jpg'}, 
        { id: 'f7-12', url: 'https://i.imgur.com/wmTjiIf.jpg'},  
      ]
    },
    {
      id: 'Low Sessions 2018',
      name: 'Low Sessions 2018',
      description: '',
      facebookUrl: 'https://www.facebook.com/SamuelCarvalhoImagens',
      items: [
        { id: 'f8-1', url: 'https://i.imgur.com/YedVmup.jpg'}, 
        { id: 'f8-2', url: 'https://i.imgur.com/aSmVMPJ.jpg'}, 
        { id: 'f8-3', url: 'https://i.imgur.com/sz8qAXN.jpg'}, 
        { id: 'f8-4', url: 'https://i.imgur.com/aS0hDOw.jpg'}, 
        { id: 'f8-5', url: 'https://i.imgur.com/Y8mUNF7.jpg'}, 
        { id: 'f8-6', url: 'https://i.imgur.com/JD03hgk.jpg'}, 
        { id: 'f8-7', url: 'https://i.imgur.com/dtZKiZG.jpg'}, 
        { id: 'f8-8', url: 'https://i.imgur.com/BDFJgDg.jpg'}, 
        { id: 'f8-9', url: 'https://i.imgur.com/nIuJsK5.jpg'}, 
        { id: 'f8-10', url: 'https://i.imgur.com/uLe43cI.jpg'}, 
        { id: 'f8-11', url: 'https://i.imgur.com/J6zLdBg.jpg'}, 
        { id: 'f8-12', url: 'https://i.imgur.com/Nx4LIqI.jpg'},  
      ]
    },
  ],
  videos: [
    {
      id: 'video-1',
      name: 'Evento Eletrônica - Vídeo 1',
      description: 'Cobertura de evento de música eletrônica',
      items: [
        { id: 'v1', type: 'video', url: 'https://www.youtube.com/embed/Sy0KGukdVxM' },
      ]
    },
    {
      id: 'video-2',
      name: 'Evento Eletrônica - Vídeo 2',
      description: 'Cobertura de evento de música eletrônica',
      items: [
        { id: 'v2', type: 'video', url: 'https://www.youtube.com/embed/QL1B8MEJFHU' },
      ]
    },
  ]
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState('fotografia');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentCategories = projectCategories[selectedType];
  const currentCategory = currentCategories.find(c => c.id === selectedCategory);
  const currentImages = currentCategory?.items || [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (lightboxIndex !== null && currentImages.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % currentImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null && currentImages.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + currentImages.length) % currentImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, currentImages.length]);

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
              {currentCategory?.items.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden group cursor-pointer transition-all"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.url}
                      alt={`Foto ${index + 1}`}
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

      {lightboxIndex !== null && currentImages[lightboxIndex] && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 z-10 text-white hover:text-blue-400 transition-colors p-2 bg-black/50 rounded-full hover:bg-black/70">
            <X size={32} />
          </button>

          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-blue-400 transition-colors p-3 bg-black/50 rounded-full hover:bg-black/70">
            <ChevronLeft size={40} />
          </button>

          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-blue-400 transition-colors p-3 bg-black/50 rounded-full hover:bg-black/70">
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
            {lightboxIndex + 1} / {currentImages.length}
          </div>

          <img src={currentImages[lightboxIndex].url} alt="Imagem ampliada" className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
