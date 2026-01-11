import React from "react";
import journeyImg from "../../../assets/about-journey.png";
import { useNavigate } from "react-router-dom";


function Journey() {
    const navigate = useNavigate(); // <-- hook

  return (
<section className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Image */}
     <img
        src={journeyImg}
        alt="Our Journey"
        className="rounded-3xl w-full h-[420px] object-cover"
      />

      {/* Content */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">
          Our Journey
        </h2>

        <p>
          We began with a simple mission — to guide students towards the right academic path with honesty and expertise.
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
          <p>
            A team of passionate educators and counselors committed to shaping global careers.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p>
            To simplify international education and empower students with confidence.
          </p>
        </div>
 {/* Learn More Button */}
        <button
          onClick={() => navigate("/services")} // <-- redirect to services
          className="px-6 py-3 bg-[#6F5643] text-white rounded-lg hover:bg-[#4B3A2D] transition font-semibold"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Journey;
