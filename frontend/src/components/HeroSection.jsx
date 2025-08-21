import React from 'react';
import bookLogo from '../assets/bookhero.jpg'; // correct relative path

const HeroSection = () => (
  <section className="w-full bg-white py-16 flex flex-col items-center justify-center text-center px-4">
    {/* Logo */}
    <img
      src={bookLogo}
      alt="Books Writing Nepal Logo"
      className="w-40 h-auto mb-6"
    />

    {/* Text Content */}
    <h1 className="text-gray-800 text-xl md:text-2xl font-light mb-2">
      Welcome to <span className="font-bold">Books Writing Nepal</span>
    </h1>

    <h1
      className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
      style={{
        letterSpacing: "1px",
        marginTop: "12px",
        textShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)"
      }}
    >
      <span style={{ color: "#0071BC" }}>तपाईंको कथा,</span>{" "}
      <span style={{ color: "#008000" }}>हामी लेखिदिन्छाैं</span>
    </h1>
  </section>
);

export default HeroSection;
