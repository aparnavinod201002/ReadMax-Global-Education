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
      <h2 className="text-3xl font-bold text-center">Specialized Services</h2>

      <div className="grid md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-background p-6 rounded-2xl text-center"
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
