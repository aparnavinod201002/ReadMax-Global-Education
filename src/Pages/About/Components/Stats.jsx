import React from "react";

function Stats() {
  const stats = [
    { value: "10K+", label: "Students Helped" },
    { value: "150+", label: "Partner Institutions" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "12+", label: "Years of Experience" },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-[#6F5643] rounded-2xl p-10 shadow-lg hover:scale-105 transition"
        >
          <h2 className="text-3xl font-extrabold text-[#F5EFE9]">
            {item.value}
          </h2>
          <p className="text-sm mt-2 text-[#E6D5C3]">
            {item.label}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
