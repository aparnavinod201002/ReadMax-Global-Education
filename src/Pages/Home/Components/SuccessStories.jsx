import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

function SuccessStories() {
 const stories = [
  {
    id: 1,
    name: "Ashna Humayoon",
    role: "B.Sc Accident & Emergency Care",
    story:
      "This platform helped me choose the right college for Accident and Emergency Care and guided me through every step of the admission process. The support and counselling I received gave me confidence to build a strong career in emergency healthcare services.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 2,
    name: "Anila Binoy",
    role: "B.Sc Radiology & Imaging Technology",
    story:
      "With expert guidance and clear information about colleges and courses, I was able to pursue Radiology and Imaging Technology confidently. The counselling and admission support made the entire process smooth and stress-free.",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: 3,
    name: "Sandra Saji",
    role: "B.Sc Nursing",
    story:
      "The personalised counselling and admission guidance helped me select the right nursing college. From course selection to admission completion, the support I received played a key role in shaping my career in nursing.",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
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
