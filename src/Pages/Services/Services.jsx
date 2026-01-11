import React from "react";
import CoreServices from "./CoreServices";
import SpecializedServices from "./SpecializedServices";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-background text-textPrimary">

      {/* Hero Section */}
   <section className="bg-gradient-to-r from-[#6F5643] to-white text-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-16 py-28 space-y-8 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold">
      Our Services
    </h1>

    <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
      Comprehensive guidance designed to support students at every step of their academic journey.
    </p>

    <div className="flex justify-center gap-6 pt-6">
      {/* Know More About Us */}
     {/* Know More About Us */}
      <button
        onClick={() => navigate("/contact")}
        className="px-8 py-3 bg-white hover:bg-gray-100 text-[#8B4513] font-semibold rounded-xl border border-[#8B4513] transition"
      >
        Know More About Us
      </button>

      {/* Contact Us */}
      <a
        href="tel:+917907414712"
        className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-[#6F5643] hover:border-white hover:text-white font-semibold rounded-xl transition text-center"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>


      {/* Content */}
      <div className="w-full bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 space-y-32">
        {/* Specialized Services */}
        <SpecializedServices />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Process */}
        <Process />

      </div>
      </div>
    </div>
  );
}


export default Services;
