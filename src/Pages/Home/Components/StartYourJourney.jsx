import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function StartYourJourney() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#F5F0EB] to-[#EDE7E5]">
      <div className="max-w-6xl mx-auto px-6 text-center"> {/* increased max-w */}
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F1B0C] mb-8">
          Ready to Start Your Education Journey?
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Get in touch with us today and take the first step towards your future.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
         <div className="flex flex-col sm:flex-row justify-center gap-6">
  <a
    href="tel:+917907414712"
    className="w-full sm:w-64 px-8 py-4 bg-[#8B4513] text-white font-semibold rounded-xl shadow-md hover:bg-[#A0522D] transition-colors duration-300 text-center"
  >
    Call Us
  </a>
</div>


          {/* WhatsApp Button */}
          <a
            href="https://wa.me/7907414712" // replace with your number
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-64 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-xl shadow-md flex items-center justify-center gap-3 hover:bg-[#20b858] transition-colors duration-300"
          >
            <FaWhatsapp className="text-2xl" /> Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default StartYourJourney;
