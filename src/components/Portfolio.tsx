import React from 'react';
import { Download, FileText, Image, Palette, Eye } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Portfolio Completo 2024",
      description: "Raccolta completa delle opere più significative con descrizioni dettagliate delle tecniche utilizzate e del processo creativo.",
      type: "PDF",
      size: "15.2 MB",
      pages: "32 pagine",
      icon: FileText,
      downloadUrl: "/portfolio/Chiara-Ciaccio-Portfolio-2024.pdf",
      preview: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Serie Femminile - Catalogo",
      description: "Approfondimento dedicato alla serie femminile con analisi critica e interpretazione delle opere.",
      type: "PDF",
      size: "8.7 MB",
      pages: "16 pagine",
      icon: Image,
      downloadUrl: "/portfolio/Serie-Femminile-Catalogo.pdf",
      preview: "/images/WhatsApp Image 2025-07-02 at 14.56.37.jpeg"
    },
    {
      id: 3,
      title: "Tecniche e Materiali",
      description: "Guida dettagliata alle tecniche innovative utilizzate: colatura, resina epossidica e tecniche miste.",
      type: "PDF",
      size: "6.3 MB",
      pages: "12 pagine",
      icon: Palette,
      downloadUrl: "/portfolio/Tecniche-e-Materiali.pdf",
      preview: "/images/WhatsApp Image 2025-07-02 at 14.56.38 (1).jpeg"
    }
  ];

  const handleDownload = (url: string, filename: string) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading: ${filename} from ${url}`);
    // For demo purposes, we'll show an alert
    alert(`Download iniziato: ${filename}`);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-night-900 mb-6">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-peacock-700 to-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-night-700 max-w-2xl mx-auto">
            Scarica il portfolio completo per esplorare in dettaglio il mio percorso artistico, 
            le tecniche utilizzate e l'evoluzione del mio linguaggio espressivo.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                {/* Preview Image */}
                <div className="aspect-video bg-gray-200 overflow-hidden relative">
                  <img
                    src={item.preview}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <Eye className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon and Type */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-peacock-100 rounded-full flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-peacock-700" />
                      </div>
                      <span className="text-sm text-night-600 bg-gray-100 px-3 py-1 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    <span className="text-xs text-night-500">{item.size}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-light text-night-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-night-700 mb-4 leading-relaxed text-sm">
                    {item.description}
                  </p>

                  {/* Details */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-night-600">{item.pages}</span>
                    <span className="text-sm text-peacock-700 font-medium">Gratuito</span>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(item.downloadUrl, item.title)}
                    className="w-full px-4 py-3 bg-peacock-700 text-white rounded-lg hover:bg-peacock-800 transition-all duration-300 font-light flex items-center justify-center space-x-2 group"
                  >
                    <Download className="h-5 w-5 group-hover:animate-bounce" />
                    <span>Scarica Portfolio</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-peacock-50 to-gold-50 rounded-2xl p-8">
            <h3 className="text-2xl font-light text-night-900 mb-4">
              Hai bisogno di materiale aggiuntivo?
            </h3>
            <p className="text-night-700 mb-6">
              Per richieste specifiche, immagini ad alta risoluzione o informazioni 
              dettagliate su singole opere, non esitare a contattarmi direttamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-peacock-700 text-white rounded-full hover:bg-peacock-800 transition-all duration-300 font-light"
              >
                <FileText className="h-5 w-5 mr-2" />
                Richiedi Materiale Personalizzato
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center px-6 py-3 border border-peacock-300 text-peacock-700 rounded-full hover:border-peacock-700 hover:text-peacock-800 transition-all duration-300 font-light"
              >
                <Image className="h-5 w-5 mr-2" />
                Esplora la Galleria
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <FileText className="h-8 w-8 text-peacock-700 mx-auto mb-3" />
            <h4 className="text-lg font-medium text-night-900 mb-2">Alta Qualità</h4>
            <p className="text-sm text-night-700">Immagini in alta risoluzione e testi curati nei minimi dettagli</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <Download className="h-8 w-8 text-peacock-700 mx-auto mb-3" />
            <h4 className="text-lg font-medium text-night-900 mb-2">Download Immediato</h4>
            <p className="text-sm text-night-700">Accesso istantaneo a tutti i materiali del portfolio</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <Palette className="h-8 w-8 text-peacock-700 mx-auto mb-3" />
            <h4 className="text-lg font-medium text-night-900 mb-2">Contenuto Esclusivo</h4>
            <p className="text-sm text-night-700">Approfondimenti sulle tecniche e il processo creativo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;