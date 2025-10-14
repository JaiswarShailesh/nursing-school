import SectionHeading from "@/app/components/sectionHeading";
import { CheckCircle } from "lucide-react";
import React from "react";
const CourseOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeading
          title="B.Sc Nursing"
          underlineTitle="Curriculum Overview"
          description="A structured four-year undergraduate program integrating theory, clinical practice, and research to prepare competent and compassionate nursing professionals."
        />

        <div className="grid md:grid-cols-3 justify-center gap-10 text-left">
          {[
            {
              year: "Year 1",
              subjects: [
                "Anatomy & Physiology",
                "Nutrition & Biochemistry",
                "Nursing Foundations",
                "Psychology",
                "Microbiology",
                "English & Computer Education",
              ],
            },
            {
              year: "Year 2",
              subjects: [
                "Sociology",
                "Pharmacology, Pathology & Genetics",
                "Medical-Surgical Nursing – I",
                "Community Health Nursing – I",
                "Communication & Educational Technology",
              ],
            },
            {
              year: "Year 3",
              subjects: [
                "Medical-Surgical Nursing – II",
                "Child Health Nursing",
                "Mental Health Nursing",
                "Nursing Research & Statistics",
              ],
            },
            {
              year: "Year 4",
              subjects: [
                "Midwifery & Obstetric Nursing",
                "Community Health Nursing – II",
                "Nursing Management",
                "Research Project & Internship",
              ],
            },
          ].map((block, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-pink-100 hover:shadow-2xl transition"
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
                    className="flex items-start gap-3 text-gray-700 hover:text-pink-700"
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
