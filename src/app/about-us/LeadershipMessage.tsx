"use client";
import React, { useState } from "react";
import SectionHeading from "../components/sectionHeading";

const LeadershipMessages = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeading
            title="Leadership"
            underlineTitle="Messages"
            description="Insights and inspiration from the visionaries guiding our institution."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* President */}
          <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition p-10 flex flex-col items-center text-center lg:text-left">
            <img
              src="/images/president.png"
              alt="President"
              className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-purple-200 -mt-24"
            />

            <h3 className="text-2xl font-bold mt-6 text-gray-900">
              Shri Amrishbhai Patel
              <span className="text-purple-600 block text-lg font-semibold">
                President
              </span>
            </h3>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Our vision is to establish a world-class center of excellence in
              nursing education and research — fostering innovation, integrity,
              and community service.
            </p>

            <p className="text-gray-700 mt-3 leading-relaxed">
              Through world-class infrastructure, faculty development, and
              academic partnerships, we ensure our graduates are globally
              competent and locally compassionate.
            </p>
          </div>

          {/* Principal */}
          <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition p-10 flex flex-col items-center text-center lg:text-left">
            <img
              src="/images/profile_2.png"
              alt="Principal"
              className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-pink-200 -mt-24"
            />

            <h3 className="text-2xl font-bold mt-6 text-gray-900">
              Dr. Mrs. Shubhashini K Rajan
              <span className="text-pink-600 block text-lg font-semibold">
                Principal
              </span>
            </h3>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Welcome to SVKM’s Alka Desai College of Nursing and Research
              Centre, Shirpur!
            </p>
            <p className="mt-4">
              As a proud constituent of Shri Vile Parle Kelavani Mandal (SVKM),
              a renowned Public Charitable Trust established in 1934, our
              institution is committed to shaping competent, compassionate, and
              ethical nursing professionals. Established in 2025, our College
              upholds SVKM’s legacy of academic excellence.
            </p>

            {/* Collapsible text */}
            {showMore && (
              <div className="text-gray-700 mt-4 space-y-4 leading-relaxed">
                <p>
                  Affiliated with the Maharashtra University of Health Sciences,
                  the Indian Nursing Council, and the Maharashtra Nursing
                  Council, we provide nursing education that meets global
                  standards and prepares students for the evolving healthcare
                  landscape.
                </p>
                <p>
                  Our college is privileged to be attached to the Tapanbhai
                  Mukeshbhai Patel Memorial Hospital, Medical College & Research
                  Centre, Shirpur, a multi-specialty hospital within our campus.
                  This ensures rich clinical exposure and hands-on learning in a
                  real healthcare setting.
                </p>
                <p>
                  With modern infrastructure, dedicated faculty, and a strong
                  focus on research, innovation, and skill-based training, we
                  aim to nurture the next generation of healthcare leaders.
                  Compassion, excellence, and integrity guide every step of our
                  work as we mentor students in a supportive and inclusive
                  environment.
                </p>
                <p>
                  Empowered by the vision of our Management, I, along with our
                  committed teaching and non-teaching staff, remain dedicated to
                  developing knowledgeable, caring, and service oriented nursing
                  professionals.
                </p>
                <p>
                  I extend my warmest welcome to all aspiring students. May your
                  journey with us lead you to a fulfilling and impactful career
                  in nursing.
                </p>
                <p className="font-semibold">
                  — Warm regards
                  <br />
                  Dr. Subhashini KR, Principal
                </p>
              </div>
            )}

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 font-semibold text-pink-600 hover:text-pink-700 underline"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessages;
