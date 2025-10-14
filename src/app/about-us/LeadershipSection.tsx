import React from "react";
import SectionHeading from "../components/sectionHeading";

const facultyMembers = [
  { name: "Shri Amrishbhai Patel", role: "President", image: "/images/president.png" },
  {
    name: "Dr. Alice Brown",
    role: "Dean of Academics",
    image: "/images/profile_3.png",
  },
  { name: "Dr. Mrs. Shubhashini K Rajan", role: "Principal", image: "/images/profile_2.png" },
  {
    name: "Dr. Robert Lee",
    role: "Head of Research",
    image: "/images/profile_4.png",
  },
];

const LeadershipSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <SectionHeading
          title="Our"
          underlineTitle="Leadership"
          description="Meet the visionaries steering our institution toward growth, excellence, and compassionate care"
        />
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
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
