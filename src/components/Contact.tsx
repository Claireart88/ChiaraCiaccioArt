import React, { useState } from 'react';
import { Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`[Sito Web] ${formData.subject}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Oggetto: ${formData.subject}\n\n` +
        `Messaggio:\n${formData.message}\n\n` +
        `---\n` +
        `Messaggio inviato dal sito web chiaraciaccio.art`
      );
      
      const mailtoLink = `mailto:chiaraciaccio.art@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                    <p className="text-night-700">chiaraciaccio.art@gmail.com</p>
                    <p className="text-sm text-night-600 mt-1">Rispondo entro 24 ore</p>
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
                  href="https://www.instagram.com/chiaraciaccio.art?igsh=MXRtOG05YXRjMGJndA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-peacock-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/share/19Z8BbZANe/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Studio Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg protected-image">
              <img
                src="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Studio dell'artista"
                className="w-full h-64 object-cover protected-image"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                draggable={false}
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
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg transition-all duration-300 font-light flex items-center justify-center space-x-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-peacock-700 hover:bg-peacock-800'
                } text-white`}
              >
                <Send className={`h-5 w-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                <span>
                  {isSubmitting 
                    ? 'Invio in corso...' 
                    : submitStatus === 'success'
                    ? 'Messaggio Inviato!'
                    : submitStatus === 'error'
                    ? 'Riprova'
                    : 'Invia Messaggio'
                  }
                </span>
              </button>
            </form>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  ✅ <strong>Messaggio inviato con successo!</strong> Il tuo client email si è aperto con il messaggio precompilato. 
                  Invia l'email per completare l\'invio.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">
                  ❌ <strong>Errore nell'invio.</strong> Riprova o contattaci direttamente all'email: 
                  <a href="mailto:chiaraciaccio.art@gmail.com" className="underline ml-1">
                    chiaraciaccio.art@gmail.com
                  </a>
                </p>
              </div>
            )}
            <div className="mt-6 p-4 bg-peacock-50 rounded-lg">
              <p className="text-sm text-peacock-800">
                <strong>Nota:</strong> Per commissioni personalizzate, includi nel messaggio 
                le dimensioni desiderate, i colori preferiti e qualsiasi dettaglio specifico 
                che vorresti vedere nell'opera.
              </p>
              <p className="text-xs text-peacock-700 mt-2">
                Inviando questo modulo accetti il trattamento dei tuoi dati personali secondo la nostra{' '}
                <a href="#privacy" className="underline hover:text-peacock-800">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;