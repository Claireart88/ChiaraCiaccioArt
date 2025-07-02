import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Exhibitions = () => {
  const exhibitions = [
    {
      id: 1,
      title: "Identità Nascoste",
      type: "Mostra Personale",
      venue: "Galleria Arte Contemporanea",
      location: "Milano",
      startDate: "15 Marzo 2024",
      endDate: "30 Aprile 2024",
      status: "upcoming",
      description: "Una retrospettiva che esplora il tema dell'identità attraverso le tre serie principali dell'artista, con particolare focus sulla serie femminile.",
      image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Arte Contemporanea Italiana",
      type: "Mostra Collettiva",
      venue: "Palazzo delle Esposizioni",
      location: "Roma",
      startDate: "10 Gennaio 2024",
      endDate: "28 Febbraio 2024",
      status: "current",
      description: "Partecipazione con opere della serie astratta insieme ad altri 15 artisti contemporanei italiani emergenti.",
      image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Emozioni in Movimento",
      type: "Mostra Personale",
      venue: "Centro Culturale San Marco",
      location: "Venezia",
      startDate: "5 Settembre 2023",
      endDate: "15 Ottobre 2023",
      status: "past",
      description: "Prima mostra personale dedicata all'evoluzione del linguaggio artistico di Chiara Ciaccio.",
      image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Tecniche Contemporanee",
      type: "Workshop",
      venue: "Accademia di Belle Arti",
      location: "Firenze",
      startDate: "20 Maggio 2024",
      endDate: "22 Maggio 2024",
      status: "upcoming",
      description: "Workshop intensivo sulle tecniche miste contemporanee: acrilico, colatura e texture materiche.",
      image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-peacock-100 text-peacock-800';
      case 'current':
        return 'bg-gold-100 text-gold-800';
      case 'past':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'Prossima';
      case 'current':
        return 'In Corso';
      case 'past':
        return 'Conclusa';
      default:
        return 'Sconosciuto';
    }
  };

  return (
    <section id="exhibitions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-night-900 mb-6">
            Esposizioni & Eventi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-peacock-700 to-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-night-700 max-w-2xl mx-auto">
            Scopri dove puoi ammirare le opere di Chiara Ciaccio e partecipare 
            ai workshop dedicati alle tecniche artistiche contemporanee.
          </p>
        </div>

        {/* Exhibitions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {exhibitions.map((exhibition) => (
            <div
              key={exhibition.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Status and Type */}
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exhibition.status)}`}>
                    {getStatusText(exhibition.status)}
                  </span>
                  <span className="text-sm text-night-600 bg-gray-100 px-3 py-1 rounded-full">
                    {exhibition.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-light text-night-900 mb-3">
                  {exhibition.title}
                </h3>

                {/* Description */}
                <p className="text-night-700 mb-4 leading-relaxed">
                  {exhibition.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-night-700">
                    <MapPin className="h-4 w-4 mr-2 text-peacock-700" />
                    <span>{exhibition.venue}, {exhibition.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-night-700">
                    <Calendar className="h-4 w-4 mr-2 text-peacock-700" />
                    <span>{exhibition.startDate} - {exhibition.endDate}</span>
                  </div>
                </div>

                {/* Action Button */}
                {exhibition.status === 'upcoming' && (
                  <div className="mt-6">
                    <button className="w-full px-4 py-2 bg-peacock-700 text-white rounded-lg hover:bg-peacock-800 transition-all duration-300 font-light">
                      Maggiori Informazioni
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-peacock-50 to-gold-50 rounded-2xl p-8">
            <h3 className="text-2xl font-light text-night-900 mb-4">
              Vuoi essere aggiornato sui prossimi eventi?
            </h3>
            <p className="text-night-700 mb-6">
              Iscriviti alla newsletter per ricevere inviti esclusivi alle inaugurazioni 
              e informazioni sui workshop.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-peacock-700 text-white rounded-full hover:bg-peacock-800 transition-all duration-300 font-light"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Rimani Aggiornato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;