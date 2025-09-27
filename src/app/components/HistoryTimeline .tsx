import React from "react";
import { Star, BookOpen, Globe } from "lucide-react";

const HistoryTimeline = () => {
  const milestones = [
    { year: "2010", title: "College Established", icon: Star },
    { year: "2013", title: "First Graduation", icon: BookOpen },
    { year: "2018", title: "International Collaboration", icon: Globe },
    { year: "2023", title: "State-of-the-art Campus", icon: Star },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-purple-600">History</span>
        </h2>
        <div className="w-24 h-1 bg-purple-500 rounded-full mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {milestones.map((milestone, idx) => {
          const Icon = milestone.icon;
          return (
            <div
              key={idx}
              className={`flex items-center mb-12 ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center z-10">
                <Icon className="w-5 h-5" />
              </div>
              <div className="bg-gray-100 rounded-3xl shadow-lg p-6 ml-4 mr-4 flex-1 hover:shadow-2xl transition transform hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-2">{milestone.year}</h3>
                <p className="text-gray-700">{milestone.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HistoryTimeline;
