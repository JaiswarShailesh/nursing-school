import React from "react";

const PresidentMessage = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-indigo-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Message from the <span className="text-purple-600">President</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Message Card */}
          <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition transform hover:-translate-y-2 order-2 md:order-1">
            <p className="text-gray-700 mb-4">
              Our vision is to establish a world-class center of excellence in nursing education and research. We are committed to fostering innovation, integrity, and community service among our students.
            </p>
            <p className="text-gray-700 mb-4">
              With a strong focus on infrastructure, faculty development, and academic partnerships, we ensure that our graduates are globally competent and locally compassionate.
            </p>
            <p className="text-gray-800 font-semibold mt-6">– Mr. John Smith, President</p>
          </div>

          {/* President Image */}
          <div className="flex justify-center md:justify-end -mt-16 md:mt-0 order-1 md:order-2">
            <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl transform hover:scale-105 transition duration-500">
              <img
                src="/images/profile_2.png"
                alt="President"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
