import React from "react";
import {
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaHandsHelping,
} from "react-icons/fa";

function UniqueApproach() {
  const impacts = [
    {
      id: 1,
      title: "Innovative Solutions",
      description:
        "We bring fresh ideas and modern approaches to solve complex challenges efficiently.",
      icon: <FaLightbulb className="text-5xl text-[#8E745F] mb-4" />,
    },
    {
      id: 2,
      title: "Expert Guidance",
      description:
        "Our team of professionals ensures that you receive the best advice and support every step of the way.",
      icon: <FaUsers className="text-5xl text-[#8E745F] mb-4" />,
    },
    {
      id: 3,
      title: "Growth & Success",
      description:
        "We focus on measurable outcomes, helping you achieve sustainable growth and success.",
      icon: <FaChartLine className="text-5xl text-[#8E745F] mb-4" />,
    },
    {
      id: 4,
      title: "Personalized Support",
      description:
        "Tailored solutions to meet your unique needs, ensuring maximum impact and satisfaction.",
      icon: <FaHandsHelping className="text-5xl text-[#8E745F] mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F1B0C] mb-16">
          Our Unique Approach
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {impacts.map((impact) => (
            <div
              key={impact.id}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              {impact.icon}

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#4B2E2B] mb-4">
                {impact.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-base">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UniqueApproach;
