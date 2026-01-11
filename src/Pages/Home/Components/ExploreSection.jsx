import React from "react";
import { FaLaptopCode, FaBusinessTime, FaCog, FaBuilding } from "react-icons/fa";

function ExploreSection() {
  const departments = [
    {
      id: 1,
      name: "Medical & Healthcare",
      description:
        "Gain in-depth knowledge in medical and healthcare fields, focusing on patient care, clinical practices, diagnostics, and modern healthcare technologies.",
      icon: <FaLaptopCode className="text-5xl text-[#8E745F]" />,
    },
    {
      id: 2,
      name: "Management & Business",
      description:
        "Develop strong leadership, management, and entrepreneurial skills through practical business strategies, finance, marketing, and organizational studies.",
      icon: <FaBusinessTime className="text-5xl text-[#8E745F]" />,
    },
    {
      id: 3,
      name: "Engineering & Technology",
      description:
        "Explore engineering and technology programs that emphasize innovation, problem-solving, hands-on projects, and real-world technical applications.",
      icon: <FaCog className="text-5xl text-[#8E745F]" />,
    },
    {
      id: 4,
      name: "Hospitality & Tourism",
      description:
        "Learn the fundamentals of hospitality and tourism management, including customer service, hotel operations, travel management, and global tourism practices.",
      icon: <FaBuilding className="text-5xl text-[#8E745F]" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F0EB] to-[#EDE7E5]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2F1B0C] mb-16">
          Explore Departments
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white shadow-lg rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl hover:translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                
                {/* Icon */}
                <div className="mb-6">{dept.icon}</div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-[#4B2E2B] mb-4">
                  {dept.name}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-base">
                  {dept.description}
                </p>
              </div>

              {/* Explore Button */}
              <button
                onClick={() =>
                  document
                    .getElementById("find-college")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-6 w-full py-3 bg-[#8E745F] text-white font-semibold text-lg rounded-xl hover:bg-[#7C6451] transition"
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
