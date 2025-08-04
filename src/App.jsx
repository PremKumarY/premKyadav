import React, { useState } from 'react';

import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/sections/Navbar';
import MobileMenu from './components/sections/MobileMenu';
import Footer from './components/sections/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Blog from './components/sections/Blog';
import CertificateSection from './components/sections/CertificateSection';




export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (

        <div className="bg-black text-white p-4">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
          <CertificateSection />
          
          <Blog />
          <Footer />
        </div>

      )}
    </>
  );
};
