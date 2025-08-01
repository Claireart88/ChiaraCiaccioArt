import React from 'react';
import { Brush, Palette, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Text Content - Now takes 2/3 of the space */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-night-900 mb-6">
                Chi Sono
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-peacock-700 to-gold-500 mb-8"></div>
            </div>

            <div className="space-y-6 text-night-700 leading-relaxed">
              <p className="text-lg">
                Sono un'artista visiva che ha sviluppato una ricerca artistica 
                centrata sull'esplorazione dell'identità, delle emozioni e dell'interiorità. 
                Dopo aver completato la formazione presso il Liceo Europeo a indirizzo artistico 
                di Palermo, mi sono laureata in Economia Aziendale e in Comunicazione d'Impresa. 
                Negli anni successivi al diploma ho proseguito la mia carriera artistica, 
                realizzando numerose opere e distinguendomi per uno stile che fonde elementi 
                figurativi e astratti.
              </p>
              
              <p>
                La mia poetica indaga il conflitto tra ciò che è visibile e ciò che rimane 
                nascosto, traducendo esperienze personali e universali in opere di forte 
                impatto emotivo. L'uso del colore e della materia diventa per me mezzo per dare 
                corpo alle sensazioni più profonde.
              </p>

              <div className="bg-peacock-50 p-6 rounded-lg border-l-4 border-peacock-700">
                <h3 className="text-lg font-medium text-night-900 mb-3">Artist Statement</h3>
                <p className="text-night-700 italic">
                  "La mia ricerca artistica nasce dall'urgenza di esplorare le complessità 
                  dell'identità e le tensioni dell'animo umano. I miei quadri cercano di 
                  rendere visibili le sfumature dell'invisibile: la solitudine, il desiderio, 
                  la paura, il coraggio."
                </p>
              </div>
            </div>

            {/* Techniques */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Brush className="h-6 w-6 text-peacock-700" />
                <span className="text-night-700">Acrilico & Olio</span>
              </div>
              <div className="flex items-center space-x-3">
                <Palette className="h-6 w-6 text-gold-500" />
                <span className="text-night-700">Tecnica a Colatura</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="h-6 w-6 text-gold-500" />
                <span className="text-night-700">Tecniche Miste</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brush className="h-6 w-6 text-peacock-600" />
                <span className="text-night-700">Arte Contemporanea</span>
              </div>
            </div>
          </div>

          {/* Image - Now takes 1/3 of the space */}
          <div className="lg:col-span-1 relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-peacock-50 via-white to-gold-50 rounded-2xl overflow-hidden shadow-2xl protected-image">
              <img
                src="/images/immagine profilo.jpg"
                alt="Chiara Ciaccio - Artista Contemporanea"
                className="w-full h-full object-cover object-center protected-image"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                draggable={false}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-peacock-200/60 to-peacock-300/60 rounded-full opacity-60 blur-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-gold-200/40 to-gold-300/40 rounded-full opacity-40 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;