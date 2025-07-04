import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-peacock-100/40 to-peacock-200/40 rounded-full opacity-60 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-gold-100/30 to-gold-200/30 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-night-100/20 to-night-200/20 rounded-full opacity-30 blur-lg"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <img
            src="/images/WhatsApp Image 2025-07-04 at 18.44.41.jpeg"
            alt="Chiara Ciaccio"
            className="h-24 md:h-32 w-auto object-contain"
          />
        </div>
        
        <p className="text-xl md:text-2xl text-night-700 mb-8 font-light leading-relaxed">
          Artista visiva contemporanea
          <span className="block mt-2">
            Esplorazione dell'identità attraverso figurazione e astrazione
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#gallery"
            className="px-8 py-3 bg-peacock-700 text-white rounded-full hover:bg-peacock-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-light"
          >
            Scopri le Opere
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-peacock-300 text-peacock-700 rounded-full hover:border-peacock-700 hover:text-peacock-800 transition-all duration-300 font-light"
          >
            Contattami
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-night-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;