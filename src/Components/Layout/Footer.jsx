import React from 'react';
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-16" style={{ backgroundColor: '#8E745F', color: '#FFFDF5' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: '#FFFDF5' }}>ReadMax Global Education</h3>
          <p className="mb-4" style={{ color: '#FFFDF5' }}>
            Helping students find their perfect college match and secure admissions in their preferred departments. Your educational journey starts here.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/readmax_career_assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full transition"
              style={{ backgroundColor: '#FFFDF5', color: '#78594A' }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: '#FFFDF5' }}>Departments</h3>
          <ul className="space-y-2" style={{ color: '#FFFDF5' }}>
            <li className="hover:text-[#D6C2AA] cursor-pointer">Medical & Healthcare</li>
            <li className="hover:text-[#D6C2AA] cursor-pointer">Management & Business</li>
            <li className="hover:text-[#D6C2AA] cursor-pointer">Engineering & Technology</li>
            <li className="hover:text-[#D6C2AA] cursor-pointer">Hospitality & Tourism</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: '#FFFDF5' }}>Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2" style={{ color: '#FFFDF5' }}>
              <FaMapMarkerAlt /> koothattukulam, Kerala, India
            </li>
            <li className="flex items-center gap-2" style={{ color: '#FFFDF5' }}>
              <FaPhoneAlt /> +91 7907414712
            </li>
            <li className="flex items-center gap-2" style={{ color: '#FFFDF5' }}>
              <FaEnvelope /> readmaxglobaleducation@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center" style={{ borderColor: '#5C4033', color: '#FFFDF5' }}>
        <p>© 2026 readmaxglobaleducation. All rights reserved. Developed by Aparna Vinod</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/contact" className="hover:text-amber-200">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-amber-200">Terms of Service</Link>
          <Link to="/contact" className="hover:text-amber-200">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
