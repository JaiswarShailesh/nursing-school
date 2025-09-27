import React from "react";
import { Heart, Target, CheckCircle2 } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-pink-600">Vision & Mission</span>
        </h2>
        <div className="w-24 h-1 bg-pink-500 rounded-full mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <Target className="w-12 h-12 text-pink-600 mb-4" />
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 mt-1" />
              <span>
                Deliver world-class, hands-on nursing education that blends
                modern knowledge with compassionate care.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 mt-1" />
              <span>
                Shape globally competent professionals equipped to lead,
                innovate, and address healthcare challenges.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 mt-1" />
              <span>
                Foster empathy, integrity, and patient-centred care as core
                values.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 mt-1" />
              <span>
                Promote research, innovation, and lifelong learning in
                healthcare.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 mt-1" />
              <span>
                Champion affordable, accessible, and culturally sensitive
                healthcare, firmly committed to rural and tribal communities.
              </span>
            </li>
          </ul>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <Heart className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be a globally recognised centre of excellence in nursing
            education, nurturing skilled, compassionate, and ethical nursing
            professionals who advance healthcare innovation while strengthening
            community wellbeing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
