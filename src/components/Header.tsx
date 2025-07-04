import React, { useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/WhatsApp Image 2025-07-04 at 18.44.41.jpeg"
              alt="Chiara Ciaccio"
              className="h-16 w-auto object-contain"
            />
            <span className="text-xl font-light text-night-900">Chiara Ciaccio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-night-700 hover:text-peacock-700 transition-colors duration-200 font-light">
              Home
            </a>
            <a href="#about" className="text-night-700 hover:text-peacock-700 transition-colors duration-200 font-light">
              Chi Sono
            </a>
            <a href="#gallery" className="text-night-700 hover:text-peacock-700 transition-colors duration-200 font-light">
              Opere
            </a>
            <a href="#portfolio" className="text-night-700 hover:text-peacock-700 transition-colors duration-200 font-light">
              Portfolio
            </a>
            <a href="#contact" className="text-night-700 hover:text-peacock-700 transition-colors duration-200 font-light">
              Contatti
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-night-700 hover:text-peacock-700 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-night-700 hover:text-peacock-700 transition-colors duration-200 font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-night-700 hover:text-peacock-700 transition-colors duration-200 font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Chi Sono
              </a>
              <a
                href="#gallery"
                className="text-night-700 hover:text-peacock-700 transition-colors duration-200 font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Opere
              </a>
              <a
                href="#portfolio"
                className="text-night-700 hover:text-peacock-700 transition-colors duration-200 font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-night-700 hover:text-peacock-700 transition-colors duration-200 font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                Contatti
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;