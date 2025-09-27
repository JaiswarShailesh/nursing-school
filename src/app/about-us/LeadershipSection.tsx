import React from "react";

const facultyMembers = [
  { name: "Dr. Jane Doe", role: "Principal", image: "/images/profile_1.png" },
  { name: "Mr. John Smith", role: "President", image: "/images/profile_2.png" },
  { name: "Dr. Alice Brown", role: "Dean of Academics", image: "/images/profile_3.png" },
  { name: "Dr. Robert Lee", role: "Head of Research", image: "/images/profile_4.png" },
];

const LeadershipSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-pink-600">Leadership</span>
        </h2>
        <div className="w-24 h-1 bg-pink-500 rounded-full mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {facultyMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
