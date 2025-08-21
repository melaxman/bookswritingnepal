import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ scrolled }) => {
  const location = useLocation();
  const isContact = location.pathname === '/contact';

  // Navbar height to offset scroll (adjust if needed)
  const navbarHeight = 64;

  // Custom scroll function for smooth scroll with offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -navbarHeight;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  // HashLinks or anchors for menu
  const HomeLink = isContact
    ? <HashLink smooth to="/#home" className="transition-colors duration-200 border-b-2 border-transparent pb-1 hover:text-indigo-600 hover:border-indigo-600 align-middle">Home</HashLink>
    : <a href="#home" className="transition-colors duration-200 border-b-2 border-transparent pb-1 hover:text-indigo-600 hover:border-indigo-600 align-middle">Home</a>;

  const VideoLink = isContact
    ? <HashLink smooth to="/#about" className="transition-colors duration-200 border-b-2 border-transparent pb-1 hover:text-indigo-600 hover:border-indigo-600 align-middle">Video</HashLink>
    : <a href="#about" className="transition-colors duration-200 border-b-2 border-transparent pb-1 hover:text-indigo-600 hover:border-indigo-600 align-middle">Video</a>;

  const BooksLink = isContact
    ? <HashLink smooth to="/#projects" className="transition-colors duration-200 border-b-2 border-transparent pb-1 hover:text-indigo-600 hover:border-indigo-600 align-middle">Books</HashLink>
    : <a href="#projects" className="transition-colors duration-200 border-b-2 border-transparent pb-1 hover:text-indigo-600 hover:border-indigo-600 align-middle">Books</a>;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <ul className="flex justify-end space-x-6 md:space-x-8 py-4 font-semibold text-purple-900 max-w-7xl mx-auto px-4">
        <li>{HomeLink}</li>
        <li>{VideoLink}</li>
        <li>{BooksLink}</li>
        <li>
          {/* Updated HashLink with scrollWithOffset */}
          <HashLink
            to="/contact#top"
            scroll={scrollWithOffset}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow transition-all duration-200 hover:scale-105 hover:from-indigo-600 hover:to-purple-600 text-base"
          >
            Register Now
            <span className="ml-1 text-lg">&#8594;</span>
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
