import React from "react";
import HeroSection from "./Components/HeroSection";
import ExploreSection from "./Components/ExploreSection";
import FindCollege from "./Components/FindCollege";
import UniqueApproach from "./Components/UniqueApproach";
import SuccessStories from "./Components/SuccessStories";
import StartYourJourney from "./Components/StartYourJourney";
// Import sections when ready
// import Hero from "../components/Hero";
// import Projects from "../components/Projects";
// import FindCollege from "../components/FindCollege";
// import UniqueApproach from "../components/UniqueApproach";
// import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="bg-background text-textPrimary">
      {/* Hero Section */}
      <HeroSection />


      {/* Academic Projects Section */}
<ExploreSection/>
      {/* Find Your College Section */}
      <div id="find-college">
  <FindCollege />
</div>

      {/* Our Unique Approach Section */}
       <UniqueApproach /> 

      {/* Student Testimonials Section */}
       <SuccessStories /> 
       <StartYourJourney/>
    </div>
  );
}

export default Home;
