import React, { useState, useEffect } from 'react';
import { Cookie, X, Shield, Settings } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start space-x-4 flex-1">
              <div className="flex-shrink-0 w-12 h-12 bg-peacock-100 rounded-full flex items-center justify-center">
                <Cookie className="h-6 w-6 text-peacock-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-night-900 mb-2">
                  Utilizziamo i cookie per migliorare la tua esperienza
                </h3>
                <p className="text-sm text-night-700 leading-relaxed">
                  Questo sito utilizza cookie tecnici necessari per il funzionamento e cookie di terze parti per analisi e marketing. 
                  Puoi accettare tutti i cookie o personalizzare le tue preferenze. 
                  <a href="#privacy" className="text-peacock-700 hover:text-peacock-800 underline ml-1">
                    Leggi la Privacy Policy
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 border border-gray-300 text-night-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center justify-center"
              >
                <Settings className="h-4 w-4 mr-2" />
                Personalizza
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 border border-peacock-300 text-peacock-700 rounded-lg hover:bg-peacock-50 transition-colors text-sm font-medium"
              >
                Solo Necessari
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-peacock-700 text-white rounded-lg hover:bg-peacock-800 transition-colors text-sm font-medium"
              >
                Accetta Tutti
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-night-900/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-light text-night-900">Preferenze Cookie</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-night-600" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-medium text-night-900 mb-2">Cookie Necessari</h3>
                  <p className="text-sm text-night-700">
                    Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-6 bg-peacock-700 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-medium text-night-900 mb-2">Cookie di Analisi</h3>
                  <p className="text-sm text-night-700">
                    Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni in forma anonima.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => handlePreferenceChange('analytics', !preferences.analytics)}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      preferences.analytics ? 'bg-peacock-700' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                      preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-medium text-night-900 mb-2">Cookie di Marketing</h3>
                  <p className="text-sm text-night-700">
                    Utilizzati per tracciare i visitatori sui siti web per mostrare annunci pertinenti e coinvolgenti.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => handlePreferenceChange('marketing', !preferences.marketing)}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      preferences.marketing ? 'bg-peacock-700' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-medium text-night-900 mb-2">Cookie Funzionali</h3>
                  <p className="text-sm text-night-700">
                    Permettono al sito di ricordare le scelte che fai per offrirti funzionalità migliorate e personalizzate.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => handlePreferenceChange('functional', !preferences.functional)}
                    className={`w-12 h-6 rounded-full relative transition-colors ${
                      preferences.functional ? 'bg-peacock-700' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                      preferences.functional ? 'translate-x-6' : 'translate-x-0.5'
                    }`}></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptNecessary}
                  className="flex-1 px-4 py-2 border border-gray-300 text-night-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Solo Necessari
                </button>
                <button
                  onClick={savePreferences}
                  className="flex-1 px-4 py-2 bg-peacock-700 text-white rounded-lg hover:bg-peacock-800 transition-colors font-medium"
                >
                  Salva Preferenze
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;