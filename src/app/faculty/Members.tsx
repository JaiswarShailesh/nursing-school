import React from "react";

const Member = () => {
  const members = [
    {
      name: "Dr. Jane Doe",
      role: "Professor & Principal",
      img: "/images/profile_1.png",
    },
    {
      name: "Dr. John Smith",
      role: "Associate Professor",
      img: "/images/profile_2.png",
    },
    { name: "Dr. Alice Brown", role: "Lecturer", img: "/images/profile_3.png" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-indigo-600">Faculty Members</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {members.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{m.name}</h3>
              <p className="text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Member;
