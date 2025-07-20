import React, { useState } from 'react';
import { Shield, X, Mail, Phone, MapPin, Calendar, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-night-900/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-peacock-100 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-peacock-700" />
              </div>
              <h2 className="text-2xl font-light text-night-900">Privacy Policy</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-night-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Introduction */}
          <section>
            <h3 className="text-xl font-medium text-night-900 mb-4">Informazioni Generali</h3>
            <p className="text-night-700 leading-relaxed mb-4">
              La presente Privacy Policy descrive le modalità di trattamento dei dati personali degli utenti 
              che consultano il sito web di Chiara Ciaccio Art (di seguito "Sito"). Il trattamento dei dati 
              personali sarà improntato ai principi di correttezza, liceità, trasparenza e di tutela della 
              riservatezza e dei diritti dell'interessato.
            </p>
            <div className="bg-peacock-50 p-4 rounded-lg border-l-4 border-peacock-700">
              <p className="text-sm text-peacock-800">
                <strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}
              </p>
            </div>
          </section>

          {/* Data Controller */}
          <section>
            <h3 className="text-xl font-medium text-night-900 mb-4">Titolare del Trattamento</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-peacock-700" />
                  <span className="font-medium">Chiara Ciaccio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-peacock-700" />
                  <span>chiaraciaccio.art@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-peacock-700" />
                  <span>+39 3921002257</span>
                </div>
              </div>
            </div>
          </section>

          {/* Data Processing */}
          <section>
            <h3 className="text-xl font-medium text-night-900 mb-4">Tipologie di Dati Raccolti</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-night-900 mb-2">Dati di Navigazione</h4>
                <p className="text-night-700 text-sm leading-relaxed">
                  I sistemi informatici e le procedure software preposte al funzionamento di questo sito 
                  acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione 
                  è implicita nell'uso dei protocolli di comunicazione di Internet (indirizzo IP, tipo di browser, 
                  sistema operativo, ecc.).
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-night-900 mb-2">Dati Forniti Volontariamente</h4>
                <p className="text-night-700 text-sm leading-relaxed">
                  L'invio facoltativo, esplicito e volontario di messaggi agli indirizzi di contatto comporta 
                  la successiva acquisizione dell'indirizzo email del mittente e di eventuali altri dati personali 
                  inseriti nella comunicazione.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-night-900 mb-2">Cookie</h4>
                <p className="text-night-700 text-sm leading-relaxed">
                  Il sito utilizza cookie tecnici necessari per il funzionamento e cookie di terze parti per 
                  analisi statistiche. È possibile gestire le preferenze sui cookie tramite il banner dedicato.
                </p>
              </div>
            </div>
          </section>

          {/* Legal Basis */}
          <section>
            <h3 className="text-xl font-medium text-night-900 mb-4">Base Giuridica del Trattamento</h3>
            <ul className="space-y-2 text-night-700 text-sm">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-peacock-700 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Consenso:</strong> per l'invio di comunicazioni promozionali</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-peacock-700 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Interesse legittimo:</strong> per rispondere alle richieste di contatto</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-peacock-700 rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>Adempimento contrattuale:</strong> per la gestione di commissioni artistiche</span>
              </li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h3 className="text-xl font-medium text-night-900 mb-4">Conservazione dei Dati</h3>
            <p className="text-night-700 text-sm leading-relaxed">
              I dati personali saranno conservati per il tempo strettamente necessario al conseguimento delle 
              finalità per le quali sono stati raccolti e comunque per non oltre 24 mesi dalla raccolta, 
              salvo diversa previsione di legge.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h3 className="text-xl font-medium text-night-900 mb-4">Diritti dell'Interessato</h3>
            <p className="text-night-700 text-sm leading-relaxed mb-4">
              In qualità di interessato, hai il diritto di:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-peacock-700 rounded-full"></span>
                  <span className="text-sm text-night-700">Accesso ai dati</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-peacock-700 rounded-full"></span>
                  <span className="text-sm text-night-700">Rettifica</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-peacock-700 rounded-full"></span>
                  <span className="text-sm text-night-700">Cancellazione</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-peacock-700 rounded-full"></span>
                  <span className="text-sm text-night-700">Limitazione del trattamento</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-peacock-700 rounded-full"></span>
                  <span className="text-sm text-night-700">Portabilità dei dati</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-peacock-700 rounded-full"></span>
                  <span className="text-sm text-night-700">Opposizione</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact for Privacy */}
          <section>
            <h3 className="text-xl font-medium text-night-900 mb-4">Contatti per la Privacy</h3>
            <div className="bg-peacock-50 p-4 rounded-lg">
              <p className="text-sm text-peacock-800 mb-3">
                Per esercitare i tuoi diritti o per qualsiasi domanda relativa al trattamento dei dati personali, 
                puoi contattarci:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-peacock-700" />
                  <span className="text-sm text-peacock-800">chiaraciaccio.art@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-peacock-700" />
                  <span className="text-sm text-peacock-800">+39 3921002257</span>
                </div>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h3 className="text-xl font-medium text-night-900 mb-4">Modifiche alla Privacy Policy</h3>
            <p className="text-night-700 text-sm leading-relaxed">
              Questa Privacy Policy può essere aggiornata periodicamente. Ti invitiamo a consultare 
              regolarmente questa pagina per essere sempre informato su come proteggiamo i tuoi dati personali.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-6 border-t border-gray-200 rounded-b-2xl">
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-peacock-700 text-white rounded-lg hover:bg-peacock-800 transition-colors font-medium"
            >
              Ho Compreso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;