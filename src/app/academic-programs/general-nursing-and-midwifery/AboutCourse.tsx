import React from "react";

const AboutCourse = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Decorative Shape */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About <span className="text-pink-600">Course</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A 3-year journey that blends compassionate care with clinical
            expertise, preparing you to become a globally competent nursing
            professional.
          </p>
          <a
            href="#more-about"
            className="inline-block px-6 py-3 rounded-full bg-pink-500 text-white font-medium shadow-lg hover:bg-pink-600 transition"
          >
            Learn More
          </a>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/images/Nursing_College_AboutUsSection.png"
            alt="Nursing Students"
            className="rounded-2xl shadow-xl transform hover:scale-105 transition"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-gray-800">GNM</h4>
            <p className="text-sm text-gray-500">General Nursing & Midwifery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
