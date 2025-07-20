import React from 'react';
import { Palette, Instagram, Facebook, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-night-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/WhatsApp Image 2025-07-04 at 18.44.41.jpeg"
                alt="Chiara Ciaccio"
                className="h-10 w-auto object-contain brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Artista visiva contemporanea che esplora l'identità e le emozioni 
              attraverso figurazione e astrazione. Ogni opera racconta una storia 
              di tensioni interiori e ricerca di autenticità.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/chiaraciaccioart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-peacock-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/chiaraciaccioart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:chiaraciaccio.art@gmail.com"
                className="w-10 h-10 bg-night-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-peacock-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-peacock-400 transition-colors">
                  Chi Sono
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-peacock-400 transition-colors">
                  Opere
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-peacock-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-peacock-400 transition-colors">
                  Contatti
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-peacock-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Servizi</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Opere Originali</li>
              <li>Commissioni Personalizzate</li>
              <li>Portfolio Digitale</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-night-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Chiara Ciaccio. Tutti i diritti riservati.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Realizzato con</span>
              <Heart className="h-4 w-4 text-peacock-400 mx-1" />
              <span>per l'arte</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;