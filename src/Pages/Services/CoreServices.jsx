import React from "react";

function CoreServices() {
  const services = [
    "University Admissions",
    "Course Selection",
    "Application Processing",
    "Visa Assistance",
    "Scholarship Guidance",
    "Pre-departure Support",
  ];

  return (
    <section className="space-y-14">
      <h2 className="text-3xl font-bold text-center">Core Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{service}</h3>
            <p className="mt-3 text-sm text-textSecondary">
              Expert guidance tailored to your academic goals.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreServices;
