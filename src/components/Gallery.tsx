import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const artworks = [
    // Serie Femminile - 3 quadri sulle donne
    {
      id: 1,
      title: "Unknown",
      category: "femminile",
      technique: "Acrilico su tela",
      year: "2018",
      dimensions: "60 × 80 cm",
      price: "€ 1.400",
      available: true,
      image: "/images/WhatsApp Image 2025-07-02 at 14.56.37.jpeg",
      description: "La figura femminile è parzialmente celata dalla parola 'UNKNOWN', a simboleggiare la perdita o l'occultamento dell'identità. La scelta dei colori vivaci sullo sfondo contrasta con il blocco nero, sottolineando il conflitto interiore e l'alienazione."
    },
    {
      id: 2,
      title: "Dualità del Sé",
      category: "femminile",
      technique: "Olio su tela",
      year: "2011",
      dimensions: "50 × 50 cm",
      price: "€ 1.100",
      available: true,
      image: "/images/WhatsApp Image 2025-07-02 at 14.56.38.jpeg",
      description: "Due volti fusi in un'unica figura urlante evocano il tormento dell'io interiore, la lotta tra ciò che mostriamo al mondo e ciò che reprimiamo. Lo sfondo rosso acceso amplifica l'intensità emotiva e la tensione psicologica."
    },
    {
      id: 3,
      title: "Madre Natura",
      category: "femminile",
      technique: "Olio e cera su tela",
      year: "2019",
      dimensions: "70 × 50 cm",
      price: "€ 1.300",
      available: true,
      image: "/images/WhatsApp Image 2025-07-02 at 14.56.39.jpeg",
      description: "Una rappresentazione della connessione primordiale tra la donna e la natura, dove la figura femminile si fonde armoniosamente con elementi naturali in un abbraccio di pace e contemplazione."
    },
    
    // Serie Colatura - 3 quadri astratti con effetti tridimensionali
    {
      id: 4,
      title: "Contrasti Complementari",
      category: "colatura",
      technique: "Acrilico, cera e texture su tela con tecnica a colatura",
      year: "2022",
      dimensions: "50 × 70 cm",
      price: "€ 1.600",
      available: true,
      image: "/images/WhatsApp Image 2025-07-02 at 14.56.38 (1).jpeg",
      description: "Parte di una serie innovativa dove la tecnica della colatura del colore si fonde magistralmente con la cera e texture materiche, conferendo all'opera una tridimensionalità unica. I contrasti cromatici complementari creano un dialogo visivo intenso, mentre le superfici stratificate invitano a un'esplorazione tattile e visiva che va oltre la bidimensionalità tradizionale."
    },
    {
      id: 5,
      title: "Cascata Dorata",
      category: "colatura",
      technique: "Acrilico e texture miste con tecnica a colatura",
      year: "2023",
      dimensions: "100 × 70 cm",
      price: "€ 2.200",
      available: true,
      image: "/images/WhatsApp Image 2025-07-02 at 14.56.40.jpeg",
      description: "Un'esplosione di movimento verticale dove la colatura del colore crea effetti tridimensionali straordinari. Le texture materiche si sovrappongono in strati complessi, generando profondità e dinamismo che trasformano la superficie pittorica in un paesaggio emotivo in continua evoluzione."
    },
    {
      id: 6,
      title: "Flussi Materici",
      category: "colatura",
      technique: "Acrilico, cera e sabbia con tecnica a colatura",
      year: "2023",
      dimensions: "80 × 60 cm",
      price: "€ 1.800",
      available: true,
      image: "/images/WhatsApp Image 2025-07-02 at 14.56.40 (1).jpeg",
      description: "La tecnica della colatura raggiunge qui la sua massima espressione tridimensionale. L'aggiunta di sabbia e cera crea texture che emergono dalla tela, mentre i flussi cromatici seguono percorsi imprevedibili, generando un'opera che cambia aspetto a seconda dell'angolo di osservazione e della luce."
    },

    // Serie Resina - 3 quadri con effetti lucidi e trasparenze
    {
      id: 7,
      title: "Riflessi Liquidi",
      category: "resina",
      technique: "Resina epossidica e pigmenti su tela",
      year: "2024",
      dimensions: "60 × 80 cm",
      price: "€ 2.100",
      available: true,
      image: "/images/WhatsApp Image 2025-07-02 at 15.19.36.jpeg",
      description: "La resina epossidica crea un effetto di profondità liquida che esalta le cromature blu e verdi. Le miscele cromatiche si fondono in trasparenze luminose, mentre la superficie lucida riflette la luce creando un gioco di riflessi che dona vita e movimento all'opera."
    },
    {
      id: 8,
      title: "Esplosione Cromatica",
      category: "resina",
      technique: "Resina epossidica e acrilico su tela",
      year: "2024",
      dimensions: "70 × 50 cm",
      price: "€ 1.900",
      available: false,
      image: "/images/WhatsApp Image 2025-07-02 at 15.19.37.jpeg",
      description: "Un'esplosione di colori caldi dove la resina amplifica l'intensità dei rossi, gialli e arancioni. L'effetto lucido della superficie crea trasparenze che permettono ai colori di stratificarsi visivamente, generando una profondità cromatica impossibile da ottenere con tecniche tradizionali."
    },
    {
      id: 9,
      title: "Metamorfosi Lucida",
      category: "resina",
      technique: "Resina epossidica e pigmenti metallici su tela",
      year: "2024",
      dimensions: "90 × 60 cm",
      price: "€ 2.400",
      available: true,
      image: "/images/WhatsApp Image 2025-07-02 at 15.19.37 (1).jpeg",
      description: "La combinazione di resina e pigmenti metallici crea un effetto di trasparenza e lucentezza che trasforma l'opera in base alla luce ambientale. Le cromature intense si riflettono e si moltiplicano nella superficie lucida, creando un'esperienza visiva in continua metamorfosi."
    },

    // Serie Astratta - 3 quadri con accostamenti cromatici acrilici
    {
      id: 10,
      title: "Tessiture Urbane",
      category: "astratta",
      technique: "Acrilico su tela",
      year: "2023",
      dimensions: "80 × 60 cm",
      price: "€ 1.500",
      available: true,
      image: "/images/WhatsApp Image 2025-07-02 at 14.56.40 (2).jpeg",
      description: "Un intreccio complesso di linee e colori acrilici che riflette la frammentazione della vita contemporanea. Gli accostamenti cromatici audaci creano tensioni visive che si risolvono in armonie inaspettate, esplorando il rapporto tra caos urbano e ordine compositivo."
    },
    {
      id: 11,
      title: "Geometrie Fluide",
      category: "astratta",
      technique: "Acrilico su tela",
      year: "2024",
      dimensions: "70 × 50 cm",
      price: "€ 1.400",
      available: true,
      image: "/images/WhatsApp Image 2025-07-02 at 14.56.40 (3).jpeg",
      description: "Forme geometriche che si dissolvono in movimenti organici attraverso sapienti accostamenti cromatici acrilici. I colori puri dialogano tra loro creando transizioni morbide che rappresentano l'equilibrio tra struttura razionale e spontaneità emotiva."
    },
    {
      id: 12,
      title: "Sinfonia Colorata",
      category: "astratta",
      technique: "Acrilico su tela",
      year: "2024",
      dimensions: "90 × 60 cm",
      price: "€ 1.700",
      available: true,
      image: "/images/WhatsApp Image 2025-07-02 at 14.56.39 (1).jpeg",
      description: "Una composizione musicale tradotta in accostamenti cromatici acrilici, dove ogni pennellata rappresenta una nota in un'armonia visiva complessa. I colori puri si alternano e si sovrappongono creando ritmi visivi che celebrano la gioia e l'energia vitale dell'arte astratta."
    }
  ];

  const categories = [
    { id: 'all', name: 'Tutte le Serie' },
    { id: 'femminile', name: 'Serie Femminile' },
    { id: 'colatura', name: 'Serie Colatura' },
    { id: 'resina', name: 'Serie Resina' },
    { id: 'astratta', name: 'Serie Astratta' }
  ];

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredArtworks.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredArtworks.length - 1 : selectedImage - 1);
    }
  };

  const getCategoryDescription = (categoryId: string) => {
    switch (categoryId) {
      case 'femminile':
        return 'Tre opere che esplorano l\'identità femminile attraverso figurazione e simbolismo, indagando temi di nascondimento, dualità e connessione con la natura.';
      case 'colatura':
        return 'Serie dedicata agli effetti tridimensionali ottenuti attraverso la tecnica della colatura, dove cera e texture materiche creano profondità e movimento.';
      case 'resina':
        return 'Opere che sfruttano le proprietà della resina epossidica per creare effetti di trasparenza, lucentezza e profondità cromatica impossibili con tecniche tradizionali.';
      case 'astratta':
        return 'Composizioni astratte che indagano gli accostamenti cromatici attraverso l\'uso puro dell\'acrilico, esplorando ritmi visivi e armonie geometriche.';
      default:
        return 'Quattro serie distinte che esplorano diverse tecniche e tematiche: dall\'identità femminile agli effetti tridimensionali, dalle trasparenze della resina agli accostamenti cromatici puri.';
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-night-900 mb-6">
            Opere
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-peacock-700 to-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-night-700 max-w-3xl mx-auto">
            {getCategoryDescription(selectedCategory)}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-peacock-700 text-white shadow-lg'
                  : 'bg-white text-night-700 hover:bg-peacock-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="aspect-square bg-gray-200">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-light mb-2">{artwork.title}</h3>
                    <p className="text-sm opacity-90 mb-1">{artwork.technique}</p>
                    <p className="text-sm opacity-90">{artwork.dimensions} • {artwork.year}</p>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    artwork.available 
                      ? 'bg-peacock-700 text-white' 
                      : 'bg-night-700 text-white'
                  }`}>
                    {artwork.available ? 'Disponibile' : 'Venduto'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-night-900/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image and Details */}
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="aspect-square md:aspect-video">
                  <img
                    src={filteredArtworks[selectedImage].image}
                    alt={filteredArtworks[selectedImage].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-light text-night-900 mb-2">
                        {filteredArtworks[selectedImage].title}
                      </h3>
                      <p className="text-night-700 mb-4 leading-relaxed">
                        {filteredArtworks[selectedImage].description}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      filteredArtworks[selectedImage].available 
                        ? 'bg-peacock-100 text-peacock-800' 
                        : 'bg-night-100 text-night-800'
                    }`}>
                      {filteredArtworks[selectedImage].available ? 'Disponibile' : 'Venduto'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-night-700">
                    <div>
                      <span className="font-medium">Tecnica:</span>
                      <p>{filteredArtworks[selectedImage].technique}</p>
                    </div>
                    <div>
                      <span className="font-medium">Dimensioni:</span>
                      <p>{filteredArtworks[selectedImage].dimensions}</p>
                    </div>
                    <div>
                      <span className="font-medium">Anno:</span>
                      <p>{filteredArtworks[selectedImage].year}</p>
                    </div>
                    <div>
                      <span className="font-medium">Prezzo:</span>
                      <p className="text-gold-600 font-medium">{filteredArtworks[selectedImage].price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;