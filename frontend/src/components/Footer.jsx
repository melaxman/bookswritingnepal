import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        {/* Our Office */}
        <div className="mb-6">
          <h4 className="text-white font-bold text-2xl mb-4">Our Office</h4>
          <ul className="text-blue-200 text-base space-y-2">
            <li>
              <span className="font-semibold text-white">Address:</span> Suryabinayak-4, Bhaktapur, Nepal
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span> bookswritingnepal@gmail.com
            </li>
            <li>
              <span className="font-semibold text-white">Phone:</span> +977 9851230593
            </li>
            <li>
              <span className="font-semibold text-white">Company Registration no. :</span> 219660/076/077
            </li>
          </ul>
        </div>

        {/* Register Now */}
        <div className="mb-8">
          <HashLink
            smooth
            to="/contact#top"
            className="inline-block bg-white text-blue-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition text-base"
          >
            Register Now
          </HashLink>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-bold text-2xl mb-4">Connect with us</h4>
          <div className="flex justify-center space-x-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/bookswritingnepal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@bookswritingnepal?si=2UymIwa2IyyezNuC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition"
              aria-label="YouTube"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.993 2.993 0 0 0-2.107-2.117C19.222 3.5 12 3.5 12 3.5s-7.222 0-9.391.569A2.993 2.993 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.993 2.993 0 0 0 2.107 2.117C4.778 20.5 12 20.5 12 20.5s7.222 0 9.391-.569a2.993 2.993 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9779851230593"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-blue-700 mt-10 pt-4 text-blue-300 text-xs">
          &copy; 2025 Books Writing Nepal Pvt.Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
