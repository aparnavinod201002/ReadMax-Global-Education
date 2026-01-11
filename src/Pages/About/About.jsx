import React from "react";
import Stats from "./Components/Stats";
import Journey from "./Components/Journey";
import Values from "./Components/Values";
import Achievements from "./Components/Achievements";

function About() {
  return (
    // ✅ Page background like Explore section
    <div className="w-full min-h-screen bg-gradient-to-b from-[#F5F0EB] to-[#EDE7E5] text-[#2F1B0C]">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 space-y-32">

        {/* Heading Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#2F1B0C]">
            About Us
          </h1>

          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700">
            Empowering students to achieve academic excellence through trusted
            guidance, global partnerships, and personalized support.
          </p>
        </section>

        {/* Stats Section */}
        <section className="rounded-3xl shadow-sm py-16 px-8 bg-[#6F5643] text-[#F5EFE9]">
          <Stats />
        </section>

        {/* Journey Section */}
        <section>
          <Journey />
        </section>

        {/* Values Section */}
        <section className="rounded-3xl shadow-sm py-20 px-8 bg-[#6F5643] text-[#E6D5C3]">
          <Values />
        </section>

        {/* Achievements Section */}
        <section className="rounded-3xl shadow-sm py-16 px-8 bg-[#6F5643] text-[#8E745F]">
          <Achievements />
        </section>

      </div>
    </div>
  );
}

export default About;
