import React from "react";

function CoreServices() {
  const services = [
    {
      title: "Domestic Education Consulting",
      description:
        "We assist students in securing admission to suitable courses and colleges across India based on their academic performance, eligibility, and budget. Our experts support students at every stage, including college selection, application submission, and completion of the admission process smoothly and efficiently.",
    },
    {
      title: "International Study Assistance",
      description:
        "We provide end-to-end support for students aspiring to study abroad. Our services include guidance in selecting the right country, university, and course aligned with the student’s academic background and financial plans. We also handle applications, documentation, SOP/LOR preparation, and visa support to ensure a hassle-free experience.",
    },
    {
      title: "Online & Distance Learning Solutions",
      description:
        "We help students and working professionals enroll in recognized and approved online or distance education programs from reputed universities, enabling flexible learning while managing work or personal commitments.",
    },
    {
      title: "Career Planning & Counseling",
      description:
        "Our personalized career counseling services help students identify their strengths, interests, and career goals. We guide them in choosing the most suitable career path, course, and institution, providing clarity and confidence for a successful future.",
    },
    {
      title: "Academic Credit Transfer Support",
      description:
        "For students who discontinued their undergraduate studies, we provide complete assistance in transferring academic credits to UGC-approved universities. Completed subjects are transferred as credits, allowing students to continue their education without starting over. We manage eligibility assessment, university selection, documentation, and the entire transfer process seamlessly.",
    },
    {
      title: "Admission Documentation & Verification Support",
      description:
        "We provide complete support for preparing, verifying, and submitting all required admission documents. Our team ensures accuracy and compliance with university requirements, reducing delays and increasing the chances of successful admission.",
    },
  ];

  return (
 <section className="space-y-12">
  <h2 className="text-3xl font-bold text-center text-[#8E745F]">
    Core Services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition
                   flex flex-col h-full"
      >
        <h3 className="text-xl font-semibold text-center mb-4 text-[#8E745F]">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-left flex-grow text-[#8E745F]">
          {service.description}
        </p>
      </div>
    ))}
  </div>
</section>

  );
}

export default CoreServices;
