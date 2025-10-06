import { BookOpen, Clock, GraduationCap } from "lucide-react";
import React from "react";

const courses = [
  {
    icon: <GraduationCap className="w-10 h-10 text-pink-500" />,
    title: "Eligibility",
    desc: "10+2 with minimum 40% aggregate (preferably Science stream).",
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-500" />,
    title: "Duration",
    desc: "3 years full-time with integrated clinical practice.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-green-500" />,
    title: "Affiliation",
    desc: "INC & State Nursing Council approved. Recognized by Govt. of India.",
  },
];

const ProgramHighlights = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Program<span className="text-pink-600"> Highlights</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our diverse range of nursing programs designed to build
          knowledge, skills, and leadership in healthcare.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full">
                  {course.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-pink-600 transition">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-6">{course.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
