import React, { useState } from 'react';

function FindCollege() {
  const departments = {
    "Computer Science": ["BSc CS", "MSc CS", "PhD CS"],
    "Business Administration": ["BBA", "MBA", "Executive MBA"],
    "Mechanical Engineering": ["B.Tech ME", "M.Tech ME"],
    "Civil Engineering": ["B.Tech CE", "M.Tech CE"],
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
