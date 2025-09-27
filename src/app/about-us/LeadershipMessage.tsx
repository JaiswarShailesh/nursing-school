import React from "react";

const LeadershipMessages = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Leadership <span className="text-pink-600">Messages</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Principal */}
          <div className="flex flex-col items-center md:items-start">
            {/* Image */}
            <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl -mt-16 md:mt-0 transform hover:scale-105 transition duration-500">
              <img
                src="/images/profile_1.png"
                alt="Principal"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mt-8 w-full hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Dr. Jane Doe, <span className="text-pink-600">Principal</span>
              </h3>
              <p className="text-gray-700 mb-4">
                Welcome to our Nursing College. Our mission is to nurture
                compassionate and skilled healthcare professionals. We combine
                modern teaching methods, clinical exposure, and ethical values
                to shape students for a bright future in the healthcare sector.
              </p>
              <p className="text-gray-700">
                Our faculty is committed to mentoring each student individually,
                ensuring a holistic and inclusive learning environment for all.
              </p>
            </div>
          </div>

          {/* President */}
          <div className="flex flex-col items-center md:items-end">
            {/* Image */}
            <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl -mt-16 md:mt-0 transform hover:scale-105 transition duration-500">
              <img
                src="/images/profile_2.png"
                alt="President"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mt-8 w-full hover:shadow-2xl transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Mr. John Smith,{" "}
                <span className="text-purple-600">President</span>
              </h3>
              <p className="text-gray-700 mb-4">
                Our vision is to establish a world-class center of excellence in
                nursing education and research. We are committed to fostering
                innovation, integrity, and community service among our students.
              </p>
              <p className="text-gray-700">
                With a strong focus on infrastructure, faculty development, and
                academic partnerships, we ensure that our graduates are globally
                competent and locally compassionate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessages;
