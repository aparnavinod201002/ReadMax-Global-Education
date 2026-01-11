import React from "react";

function FAQ() {
  const faqs = [
    {
      q: "How can I apply for admission?",
      a: "You can contact us through the form and our counselors will guide you."
    },
    {
      q: "Do you provide visa assistance?",
      a: "Yes, we offer complete visa guidance and documentation support."
    },
    {
      q: "Is counseling free?",
      a: "Initial counseling sessions are completely free."
    }
  ];

  return (
    <section className="space-y-14">
      <h2 className="text-3xl font-bold text-center text-[#8E745F]">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 ">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm"
          >
            <h3 className="font-semibold text-[#8E745F]">{item.q}</h3>
            <p className="mt-2 text-sm text-[#8E745F]">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
