import SectionHeading from "@/app/components/sectionHeading";
import { CheckCircle } from "lucide-react";
import React from "react";
const CourseOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeading
          title="Curriculum"
          underlineTitle="Overview"
          description="Comprehensive programs that blend theory, hands-on training, and
          research opportunities for holistic learning."
        />

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              year: "Year 1",
              subjects: [
                "Foundation of Nursing",
                "Anatomy & Physiology",
                "Microbiology",
                "Behavioral Sciences",
                "First Aid & Nutrition",
              ],
            },
            {
              year: "Year 2",
              subjects: [
                "Medical-Surgical Nursing",
                "Mental Health Nursing",
                "Child Health Nursing",
                "Community Health Nursing – I",
                "Pharmacology",
              ],
            },
            {
              year: "Year 3",
              subjects: [
                "Midwifery & Obstetric Nursing",
                "Community Health Nursing – II",
                "Nursing Research & Statistics",
                "Professional Trends & Ethics",
                "Leadership & Management",
              ],
            },
          ].map((block, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-indigo-100 hover:shadow-2xl transition"
            >
              {/* Year Header */}
              <div className="bg-pink-500 p-4 text-center">
                <h3 className="text-xl font-bold text-white">{block.year}</h3>
              </div>

              {/* Subjects */}
              <ul className="p-6 space-y-3">
                {block.subjects.map((subj, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 hover:text-indigo-700"
                  >
                    <CheckCircle className="w-5 h-5 text-pink-600 shrink-0 mt-1" />
                    <span>{subj}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
