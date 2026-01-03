import React from "react";
import whyCooseUs from "../../assets/why-choose-image.webp";
import { useNavigate } from "react-router-dom";

function WhyChooseUs() {
  const navigate = useNavigate();
  return (
    <section className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Image */}
      <img
       src={whyCooseUs}
        alt="Why Choose Us"
        className="rounded-3xl w-full h-[480px] object-cover"
      />

      {/* Content */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>

        <p>
          We combine experience, transparency, and global partnerships to ensure
          students make confident academic decisions.
        </p>

        <ul className="space-y-3 list-disc list-inside">
          <li>Certified counselors</li>
          <li>End-to-end support</li>
          <li>Global university network</li>
        </ul>
 <button
      onClick={() => navigate("/contact")} // Redirect to Contact page
      className="px-8 py-3 bg-[#8B4513] hover:bg-[#A0522D] text-white font-semibold rounded-xl transition"
    >
      Learn More About Us
    </button>
      </div>

    </section>
  );
}

export default WhyChooseUs;
