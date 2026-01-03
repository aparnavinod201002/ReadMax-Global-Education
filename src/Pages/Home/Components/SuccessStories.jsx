import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "Aparna Vinod",
      role: "Computer Science Graduate",
      story:
        "Thanks to this platform, I found the perfect college and guidance for my career. It completely changed my academic journey!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Business Administration Student",
      story:
        "The courses and mentorship provided were exceptional. I achieved my goals faster than I imagined!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Sneha Nair",
      role: "Mechanical Engineering Graduate",
      story:
        "The support and resources helped me excel in my field. I highly recommend this platform to everyone.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#EDE7E5]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2F1B0C] mb-16">
          Our Students Say
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:translate-y-2 transition-all duration-300"
            >
          

              {/* Quote Icon */}
              <FaQuoteLeft className="text-[#8B4513] text-2xl mb-4" />

              {/* Story */}
              <p className="text-gray-700 text-base mb-6">{story.story}</p>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-[#4B2E2B]">{story.name}</h3>
              <p className="text-gray-500 text-sm">{story.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
