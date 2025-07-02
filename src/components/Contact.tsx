import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-night-900 mb-6">
            Contatti
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-peacock-700 to-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-night-700 max-w-2xl mx-auto">
            Hai domande sulle mie opere o vuoi commissioni personalizzate? 
            Non esitare a contattarmi, sarò felice di risponderti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-night-900 mb-6">
                Informazioni di Contatto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-peacock-700 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-night-900">Email</h4>
                    <p className="text-night-700">chiara.ciaccio.art@gmail.com</p>
                    <p className="text-sm text-night-600 mt-1">Rispondo entro 24 ore</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-peacock-700 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-night-900">Telefono</h4>
                    <p className="text-night-700">+39 345 678 9012</p>
                    <p className="text-sm text-night-600 mt-1">Lun-Ven 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-peacock-700 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-night-900">Studio</h4>
                    <p className="text-night-700">Via dell'Arte, 123</p>
                    <p className="text-night-700">20100 Milano, Italia</p>
                    <p className="text-sm text-night-600 mt-1">Visite su appuntamento</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-light text-night-900 mb-6">
                Seguimi sui Social
              </h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/chiaraciaccioart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-peacock-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com/chiaraciaccioart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Studio Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Studio dell'artista"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-900/50 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-medium">Il Mio Studio</h4>
                  <p className="text-sm opacity-90">Dove nascono le opere</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-light text-night-900 mb-6">
              Invia un Messaggio
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-night-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-peacock-500 focus:border-transparent transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-night-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-peacock-500 focus:border-transparent transition-colors"
                    placeholder="la.tua@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-night-700 mb-2">
                  Oggetto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-peacock-500 focus:border-transparent transition-colors"
                >
                  <option value="">Seleziona un oggetto</option>
                  <option value="acquisto">Acquisto Opera</option>
                  <option value="commissione">Commissione Personalizzata</option>
                  <option value="mostra">Informazioni Mostre</option>
                  <option value="workshop">Workshop e Corsi</option>
                  <option value="collaborazione">Collaborazione</option>
                  <option value="altro">Altro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-night-700 mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-peacock-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Scrivi qui il tuo messaggio..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-peacock-700 text-white rounded-lg hover:bg-peacock-800 transition-all duration-300 font-light flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Invia Messaggio</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-peacock-50 rounded-lg">
              <p className="text-sm text-peacock-800">
                <strong>Nota:</strong> Per commissioni personalizzate, includi nel messaggio 
                le dimensioni desiderate, i colori preferiti e qualsiasi dettaglio specifico 
                che vorresti vedere nell'opera.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;