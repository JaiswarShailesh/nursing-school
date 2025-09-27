import React from "react";
import { Star, BookOpen, Globe } from "lucide-react";

const CollegeHighlights = () => {
  return (
    <section className="py-16 bg-white">
      {/* <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-pink-600">Core Values</span>
          <div className="w-24 h-1 bg-pink-500 rounded-full mx-auto"></div>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          At our Nursing College, we strive for excellence, encourage research,
          and provide global exposure to our students.
        </p>
      </div> */}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Our <span className="text-pink-600">Core Values</span>
        </h2>
        <div className="w-24 h-1 bg-pink-500 rounded-full mx-auto mt-4"></div>
        {/* <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          At our Nursing College, we strive for excellence, encourage research,
          and provide global exposure to our students.
        </p> */}
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 text-center">
          <Star className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Excellence</h3>
          <p className="text-gray-700">
            Providing top-notch education with modern infrastructure and expert
            faculty.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 text-center">
          <BookOpen className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Research</h3>
          <p className="text-gray-700">
            Encouraging innovative research to improve healthcare and nursing
            practices.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 text-center">
          <Globe className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Global Exposure</h3>
          <p className="text-gray-700">
            Preparing students to compete and contribute in healthcare
            worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollegeHighlights;
