import React, { useEffect } from "react";
import Locations from "./Components/Locations";
import FAQ from "./Components/FAQ";
import ContactForm from "./Components/ContactForm";
import ContactInfo from "./Components/ContactInfo";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className="w-full bg-background text-textPrimary">

   {/* Get in Touch Banner */}
<section className="bg-gradient-to-r from-[#6F5643] to-white text-[#6F5643]">
  <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 text-center space-y-6">
    <h1 className="text-4xl md:text-6xl text-white font-extrabold">
      Get in Touch
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 text-white">
      Have questions? Our team is here to guide you every step of the way.
    </p>

    {/* Contact Button */}
     <div className="flex flex-col sm:flex-row justify-center gap-6">
  <a
    href="tel:+917907414712"
    className="w-full sm:w-64 px-8 py-4 bg-[#8E745F] text-white font-semibold rounded-xl shadow-md hover:bg-white hover:text-[#8E745F] transition-colors duration-300 text-center"
  >
    Call Us
  </a>
</div>
  </div>
</section>


      {/* Content */}
      <div className=" mx-auto px-6 lg:px-16 py-24 space-y-32 w-full bg-gradient-to-b from-[#F5F0EB] to-[#EDE7E5]">

        {/* Contact Info + Form */}
       <section className="max-w-6xl mx-auto">
  <div className="grid lg:grid-cols-2 gap-16 bg-[#8E745F] rounded-3xl shadow-lg p-10 md:p-14">
    <ContactInfo />
    <ContactForm />
  </div>
</section>

        {/* Locations */}
         <div id="location">
  <Locations />
</div>

        

        {/* FAQ */}
        <FAQ />

      </div>
    </div>
  );
}

export default Contact;
