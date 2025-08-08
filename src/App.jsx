// import React, { useState } from 'react';

// import LoadingScreen from './components/LoadingScreen';
// import Navbar from './components/sections/Navbar';
// import MobileMenu from './components/sections/MobileMenu';
// import Footer from './components/sections/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Blog from './components/sections/Blog';
import CertificateSection from './components/sections/CertificateSection';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/sections/Layout';




export default function App() {
 
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="certificates" element={<CertificateSection />} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
    </BrowserRouter>

     
    </>
  );
};
