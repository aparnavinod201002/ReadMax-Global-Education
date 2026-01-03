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
<div className="bg-background rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-primary">
            {item.value}
          </h2>
          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
