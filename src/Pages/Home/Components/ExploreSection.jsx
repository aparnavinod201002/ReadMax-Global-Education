import React from "react";
import { FaLaptopCode, FaBusinessTime, FaCog, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

function ExploreSection() {
  const departments = [
    {
      id: 1,
      name: "Computer Science",
      description:
        "Dive into cutting-edge CS programs and innovative courses designed for the future.",
      icon: <FaLaptopCode className="text-5xl text-[#8B4513]" />,
    },
    {
      id: 2,
      name: "Business Administration",
      description:
        "Explore our comprehensive Business programs and build entrepreneurial skills.",
      icon: <FaBusinessTime className="text-5xl text-[#8B4513]" />,
    },
    {
      id: 3,
      name: "Mechanical Engineering",
      description:
        "Discover Mechanical Engineering courses, labs, and hands-on learning opportunities.",
      icon: <FaCog className="text-5xl text-[#8B4513]" />,
    },
    {
      id: 4,
      name: "Civil Engineering",
      description:
        "Learn Civil Engineering with a focus on design, construction, and sustainable infrastructure.",
      icon: <FaBuilding className="text-5xl text-[#8B4513]" />,
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
                {/* Department Icon */}
                <div className="mb-6">{dept.icon}</div>

                {/* Department Name */}
                <h3 className="text-2xl font-bold text-[#4B2E2B] mb-4">
                  {dept.name}
                </h3>

                {/* Department Description */}
                <p className="text-gray-700 text-base">{dept.description}</p>
              </div>

              {/* Explore Button */}
             <button
  onClick={() =>
    document
      .getElementById("find-college")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="mt-6 w-full py-3 bg-[#8B4513] text-white font-semibold text-lg rounded-xl"
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
