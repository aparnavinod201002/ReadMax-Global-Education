import React from 'react';
import {  FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#8B4513] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">ReadMax Global Education</h3>
          <p className="text-white mb-4">
            Helping students find their perfect college match and secure admissions in their preferred departments. Your educational journey starts here.
          </p>
          <div className="flex gap-4">
          <a
  href="https://www.instagram.com/readmax_career_assistant"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center bg-white-500 rounded-full text-pink hover:bg-pink-600 transition"
>
  <FaInstagram />
  
</a>
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Departments</h3>
          <ul className="space-y-2 text-white-400">
            <li className="hover:text-white cursor-pointer">Medical & Healthcare</li>
            <li className="hover:text-white cursor-pointer">Management & Business</li>
            <li className="hover:text-white cursor-pointer">Engineering & Technology</li>
            <li className="hover:text-white cursor-pointer">Hospitality & Tourism</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2 text-white">
              <FaMapMarkerAlt /> koothattukulam, Kerala, India
            </li>
            <li className="flex items-center text-white gap-2">
              <FaPhoneAlt /> +91 7907414712
            </li>
            <li className="flex items-center text-white gap-2">
              <FaEnvelope /> readmaxglobaleducation@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-white border-white-700 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 readmaxglobaleducation. All rights reserved. Developed by Aparna Vinod</p>
      <div className="flex gap-6 mt-4 md:mt-0">
  {/* Privacy Policy → Contact Page */}
  <Link to="/contact" className="hover:text-white">
    Privacy Policy
  </Link>

  {/* Terms of Service → Contact Page */}
  <Link to="/contact" className="hover:text-white">
    Terms of Service
  </Link>

  {/* Sitemap → Contact Page Locations Section */}
  <Link to="/contact" className="hover:text-white">
    Sitemap
  </Link>
</div>
      </div>
    </footer>
  );
}

export default Footer;
