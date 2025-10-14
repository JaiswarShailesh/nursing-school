import { GraduationCap, BookOpen, Stethoscope } from "lucide-react";
import Link from "next/link";

const CoursesSection = () => {
  const courses = [
    {
      // icon: <GraduationCap className="w-10 h-10 text-green-500" />,
      icon: <Stethoscope className="w-10 h-10 text-pink-500" />,
      title: "GNM (General Nursing & Midwifery)",
      desc: "A diploma course designed for students who wish to start their nursing career with solid clinical and midwifery training.",
      link: "/academic-programs/general-nursing-and-midwifery",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-blue-500" />,
      title: "B.Sc Nursing",
      desc: "A comprehensive 4-year program blending theoretical knowledge with extensive clinical practice to prepare skilled nursing professionals.",
      link: "/academic-programs/bsc-nursing",
    },
    // {
    //   icon: <BookOpen className="w-10 h-10 text-blue-500" />,
    //   title: "M.Sc Nursing",
    //   desc: "Advanced program focusing on specialized nursing fields, research, and leadership to shape the next generation of healthcare experts.",
    //   link: "#",
    // },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50" id="coursesSection">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-pink-600">Programs</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our diverse range of nursing programs designed to build
          knowledge, skills, and leadership in healthcare.
        </p>

        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl max-w-full"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full">
                  {course.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-pink-600 transition">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-6">{course.desc}</p>
              <Link
                href={course.link}
                className="inline-block px-5 py-2 rounded-full bg-pink-500 text-white font-medium hover:bg-pink-600 transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
