import React from "react";

function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-b  from-[#6F5643] to-[#EDE7E5] rounded-2xl">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F1B0C]">
          Our Achievements
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Recognized for excellence in student counseling, global university
          partnerships, and successful placements worldwide.
        </p>

      </div>
    </section>
  );
}

export default Achievements;
