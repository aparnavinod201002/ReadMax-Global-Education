import React from "react";

function SpecializedServices() {
  const services = [
    "Career Counseling",
    "Test Preparation",
    "Internship Support",
    "Post-study Work Guidance",
  ];

  return (
    <section className="bg-white rounded-3xl px-8 py-20 space-y-14">
      <h2 className="text-3xl font-bold text-center text-[#6F5643]">Specialized Services</h2>

      <div className="grid md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#6F5643] p-6 rounded-2xl text-center text-white hover:bg-[#4B3A2D] transition"
          >
            <h3 className="font-semibold">{service}</h3>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <button className="px-8 py-3 bg-primary text-white rounded-xl">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default SpecializedServices;
