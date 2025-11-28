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
              year: "Semester I",
              subjects: [
                "Communicative English",
                "Applied Anatomy",
                "Applied Physiology",
                "Applied Sociology",
                "Applied Psychology",
                "Nursing Foundations I",
              ],
              mandatoryModule:
                "First Aid as part of Nursing Foundation I Course",
            },
            {
              year: "Semester II",
              subjects: [
                "Applied Biochemistry",
                "Applied Nutrition and Dietetics",
                "Nursing Foundations II",
                "Health/Nursing Informatics & Technology",
              ],
              mandatoryModule:
                "Health Assessment as part of Nursing Foundation II Course",
            },
            {
              year: "Semester III",
              subjects: [
                "Applied Microbiology and Infection Control including Safety",
                "Pharmacology I",
                "Pathology I",
                "Adult Health (Medical Surgical) Nursing I with integrated pathophysiology",
              ],
              mandatoryModule: "BCLS as part of Adult Health Nursing I",
            },
            {
              year: "Semester IV",
              subjects: [
                "Pharmacology II",
                "Pathology II & Genetics",
                "Adult Health Nursing II with integrated pathophysiology including Geriatric Nursing",
                "Professionalism, Professional Values & Ethics including Bioethics",
              ],
              mandatoryModule:
                "Fundamentals of Prescribing under Pharmacology II, Palliative care module under Adult Health Nursing II",
            },
            {
              year: "Semester V",
              subjects: [
                "Child Health Nursing I",
                "Mental Health Nursing I",
                "Community Health Nursing I (including Environmental Science & Epidemiology)",
                "Educational Technology/Nursing Education",
                "Introduction to Forensic Nursing and Indian Laws",
              ],
              mandatoryModule:
                "Essential New-born Care (ENBC), Facility Based New-born Care (FBNBC), IMNCI and PLS as part of Child Health Nursing",
            },
            {
              year: "Semester VI",
              subjects: [
                "Child Health Nursing II",
                "Mental Health Nursing II",
                "Nursing Management & Leadership",
                "Midwifery/Obstetrics and Gynaecology (OBG) Nursing I",
              ],
              mandatoryModule:
                "SBA Module under OBG Nursing I/II (VI/VII Semester)",
            },
            {
              year: "Semester VII",
              subjects: [
                "Community Health Nursing II",
                "Nursing Research & Statistics",
                "Midwifery/Obstetrics and Gynaecology (OBG) Nursing II",
              ],
              mandatoryModule:
                "Safe delivery app under OBG Nursing I/II (VI/VII Semester)",
            },
            {
              year: "Semester VIII",
              subjects: [
                "Community Health Nursing",
                "Adult Health Nursing",
                "Child Health Nursing",
                "Mental Health Nursing",
                "Midwifery/Obstetrics and Gynaecology (OBG) Nursing",
              ],
              mandatoryModule:
                "Internship Intensive Practicum/Residency programme",
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

              <p className="p-6 pt-0">
                <span className="font-bold text-pink-600">
                  Mandatory Module
                </span>
                <span className="text-red-600 pe-3">*</span>
                {block.mandatoryModule}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
