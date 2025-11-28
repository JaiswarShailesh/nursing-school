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
            The college offers a 4-year B.Sc. Nursing course (eight semesters)
            with an annual intake of 100 students. This undergraduate program
            combines scientific knowledge with compassionate care, preparing
            students to become skilled and ethical nursing professionals capable
            of serving in diverse healthcare settings.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The rules regarding the method of selection for the B.Sc. Nursing
            degree course, as well as other rules related to the admission
            process, are provisional and subject to the guidelines, orders, and
            instructions issued by the Government, the Indian Nursing Council,
            the Maharashtra Nurses and Midwives Council, and the Maharashtra
            University of Health Sciences.
          </p>
          <a
            href="#eligibilityCriteria"
            className="inline-block px-6 py-3 rounded-full bg-pink-500 text-white font-medium shadow-lg hover:bg-pink-600 transition"
          >
            Learn More
          </a>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/images/Nursing_College_AboutUsSection.png"
            alt="B.Sc Nursing Students"
            className="rounded-2xl shadow-xl transform hover:scale-105 transition"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-gray-800">
              B.Sc Nursing
            </h4>
            <p className="text-sm text-gray-500">
              Bachelor of Science in Nursing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
