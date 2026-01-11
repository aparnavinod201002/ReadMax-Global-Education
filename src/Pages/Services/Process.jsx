import React from "react";

function Process() {
  const steps = [
    { step: "01", title: "Counseling", desc: "Understand goals and preferences" },
    { step: "02", title: "Application", desc: "University & visa processing" },
    { step: "03", title: "Success", desc: "Offer letter & departure" },
  ];

  return (
    <section className="space-y-14 text-center">
      <h2
  className="text-4xl font-bold"
  style={{ color: "#6F5643" }}
>Our Process</h2>

      <div className="grid md:grid-cols-3 gap-8 ">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-[#6F5643] rounded-2xl p-10 shadow-sm"
          >
            <span className="text-4xl font-extrabold text-white">
              {item.step}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-textSecondary text-white">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
