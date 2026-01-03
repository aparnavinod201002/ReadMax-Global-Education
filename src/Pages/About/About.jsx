import React from "react";
import Stats from "./Components/Stats";
import Journey from "./Components/Journey";
import Values from "./Components/Values";
import Achievements from "./Components/Achievements";

function About() {
  return (
    <div className="w-full bg-background text-textPrimary">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 space-y-32">

        {/* Heading Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            About Us
          </h1>

          <p className="text-lg md:text-xl max-w-4xl mx-auto text-textSecondary">
            Empowering students to achieve academic excellence through trusted
            guidance, global partnerships, and personalized support.
          </p>
        </section>

        {/* Stats Section */}
        <section className="bg-white rounded-3xl shadow-sm py-16 px-8">
          <Stats />
        </section>

        {/* Journey Section */}
        <section>
          <Journey />
        </section>

        {/* Values Section */}
        <section className="bg-white rounded-3xl shadow-sm py-20 px-8">
          <Values />
        </section>

        {/* Achievements Section */}
        <section>
          <Achievements />
        </section>

      </div>
    </div>
  );
}

export default About;
