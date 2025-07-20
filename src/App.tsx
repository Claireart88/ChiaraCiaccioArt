import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  // Listen for privacy policy link clicks
  React.useEffect(() => {
    const handlePrivacyClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute('href') === '#privacy') {
        e.preventDefault();
        setShowPrivacyPolicy(true);
      }
    };

    document.addEventListener('click', handlePrivacyClick);
    return () => document.removeEventListener('click', handlePrivacyClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Portfolio />
      <Contact />
      <Footer />
      <CookieBanner />
      <PrivacyPolicy 
        isOpen={showPrivacyPolicy} 
        onClose={() => setShowPrivacyPolicy(false)} 
      />
    </div>
  );
}

export default App;