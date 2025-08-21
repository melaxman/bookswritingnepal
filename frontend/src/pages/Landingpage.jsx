import React, { useState, useEffect, useRef } from 'react';
// import TopInfoBar from '../components/TopInfoBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import ProjectSection from "../components/ProjectSection";
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bg1 from '../assets/bg1.jpg';
import bg3 from '../assets/bg3.jpg';

const bgImages = [bg1, bg3];

const LandingPage = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 750,
      once: false,  // animate every time element scrolls into view
    });
  }, []);

  const restartInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setBgIndex(prev => (prev + 1) % bgImages.length);
    }, 3500);
  };

  const handlePrev = () => {
    setBgIndex(prev => (prev - 1 + bgImages.length) % bgImages.length);
    restartInterval();
  };

  const handleNext = () => {
    setBgIndex(prev => (prev + 1) % bgImages.length);
    restartInterval();
  };

  useEffect(() => {
    restartInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* <TopInfoBar /> */}
      <Navbar scrolled={scrolled} />
      <div id="home">
        <HeroSection
          bgImages={bgImages}
          bgIndex={bgIndex}
          onPrev={handlePrev}
          onNext={handleNext}
          arrowBtnClass="hover:bg-purple-600 hover:text-white"
        />
      </div>

      <div id="about" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <AboutUsSection />
      </div>

      {/* Removed data-aos from projects wrapper to avoid conflicting animations */}
      <div id="projects">
        <ProjectSection />

        {/* Scroll to Top Button */}
        {scrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition-all"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
