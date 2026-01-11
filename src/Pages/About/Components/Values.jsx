import React from "react";

function Values() {
  const values = ["Integrity", "Transparency", "Student First", "Excellence"];

  return (
    <section className="text-center space-y-10">
      <h2 className="text-3xl font-bold text-white">Our Values</h2>

      <div className="grid md:grid-cols-4 gap-6 text-white">
        {values.map((value, index) => (
          <div key={index} className="p-6 border rounded-xl">
            <h3 className="font-semibold">{value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Values;
