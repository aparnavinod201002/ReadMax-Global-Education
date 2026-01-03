import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroImage from "../../../../src/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [headingRef.current, paragraphRef.current, buttonsRef.current],
        { autoAlpha: 1 }
      );

      const tl = gsap.timeline({
        defaults: { duration: 1.4, ease: "power3.out" }
      });

      tl.from(headingRef.current, { y: 80, autoAlpha: 0 })
        .from(paragraphRef.current, { y: 60, autoAlpha: 0 }, "-=0.8")
        .from(buttonsRef.current, { y: 40, autoAlpha: 0 }, "-=0.6");

      gsap.to(bgRef.current, {
        scale: 1.1,
        duration: 30,
        ease: "power1.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl pl-10 md:pl-24 lg:pl-40 pr-6">
          
          {/* Heading */}
          <h1
            ref={headingRef}
            className="text-white font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
          >
            Pathway to <br /> Success
          </h1>

          {/* Description */}
          <p
            ref={paragraphRef}
            className="text-white text-lg md:text-2xl max-w-2xl mb-12"
          >
            Discover your ideal college and achieve admission success with
            expert guidance.
          </p>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-wrap gap-6"
          ><Link to="/contact">
  <button className="bg-[#8B4513] hover:bg-[#7A3E0E] text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl transition">
    Get Started
  </button>
</Link>
           <Link to="/about">
  <button className="border-2 border-white text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition">
    Learn More
  </button>
</Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
