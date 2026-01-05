import React, { useState } from 'react';

function FindCollege() {
  const departments = {
  "Medical & Healthcare": [
    "MBBS",
    "BDS",
    "BNYS (Bachelor of Naturopathy & Yogic Sciences)",
    "BAMS (Bachelor of Ayurvedic Medicine & Surgery)",
    "BASLP (Bachelor in Audiology & Speech Language Pathology)",
    "BHMS (Bachelor of Homeopathic Medicine & Surgery)",
    "B.Pharm (Bachelor of Pharmacy)",
    "B.Sc Nursing",
    "Post Basic B.Sc Nursing",
    "Allied Health Sciences",
    "GNM (General Nursing & Midwifery)",
    "BPT (Bachelor of Physiotherapy)",
    "BOT (Bachelor of Occupational Therapy)",
    "MPT (Master of Physiotherapy)",
    "Diploma in Allied Health Sciences",
    "M.Sc Medical Imaging Technology",
    "M.Sc Embryology"
  ],

  "Management & Business": [
    "MBA",
    "MBA Business Analytics",
    "MBA Global",
    "BBA Logistics & Supply Management",
    "BBA Aviation Management & Logistics",
    "BBA Digital Marketing",
    "BBA Healthcare Management",
    "BBA Tourism & Management",
    "BBA Business Analytics",
    "BBA Global",
    "BBA Professional",
    "LLB (Bachelor of Laws)",
    "B.Com Accounting & Taxation",
    "B.Com Logistics & Supply Chain Management",
    "M.Com (Master of Commerce)"
  ],

  "Engineering & Technology": [
    "B.E Computer Science & Engineering",
    "B.E Computer Science & Engineering (Cyber Security)",
    "B.Tech Artificial Intelligence & Data Science",
    "B.Tech Information Technology",
    "B.E Electronics & Communication Engineering",
    "B.E Biomedical Engineering",
    "B.Tech Agricultural Engineering",
    "B.E Mechanical Engineering",
    "M.E Computer Science & Engineering",
    "Industrial Safety Engineering",
    "BCA Cyber Security & Cloud Computing",
    "B.Sc Computer Science with Data Analytics",
    "B.Sc Information Technology",
    "M.Sc Computer Science"
  ],

  "Hospitality & Tourism": [
    "Hotel Management",
    "Tourism Management",
    "Culinary Management",
    "Event Management",
    "Aviation Management"
  ]
};


  const [selectedDept, setSelectedDept] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  return (
    <section className="py-20 bg-[#F5F0EB]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-[#2F1B0C] mb-10">
          Our Colleges
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
          {/* Department Dropdown */}
          <div className="flex flex-col w-full md:w-1/3">
            <label className="mb-2 font-semibold text-[#4B2E2B] text-left">
              Select Department
            </label>
            <select
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition"
              value={selectedDept}
              onChange={(e) => {
                setSelectedDept(e.target.value);
                setSelectedCourse(""); // reset course when dept changes
              }}
            >
              <option value="">-- Choose Department --</option>
              {Object.keys(departments).map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Course Dropdown */}
          <div className="flex flex-col w-full md:w-1/3">
            <label className="mb-2 font-semibold text-[#4B2E2B] text-left">
              Select Course
            </label>
            <select
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              disabled={!selectedDept} // disable if no department selected
            >
              <option value="">-- Choose Course --</option>
              {selectedDept &&
                departments[selectedDept].map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Selected Info */}
        {selectedDept && selectedCourse && (
          <p className="mt-8 text-lg text-[#2F1B0C] font-medium">
            You selected <span className="font-bold">{selectedDept}</span> -{" "}
            <span className="font-bold">{selectedCourse}</span>
          </p>
        )}
      </div>
    </section>
  );
}

export default FindCollege;
