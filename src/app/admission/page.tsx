import React from "react";
import { CheckCircle2 } from "lucide-react";
import CoursesSection from "../components/CoursesSection";

const AdmissionPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            <span className="underline decoration-yellow-300 decoration-4 pl-4">
              Admission
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            Join our Nursing College and start your journey towards becoming a
            skilled and compassionate healthcare professional. Explore our
            programs, eligibility, and the admission process.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <CoursesSection />

      {/* Eligibility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Eligibility Criteria
          </h2>
          <div className="w-24 h-1 bg-pink-500 rounded-full mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            "Minimum 50% marks in Science (Physics, Chemistry, Biology) at 10+2 level.",
            "Applicants must be medically fit.",
            "Good communication skills and basic English proficiency.",
            "Age limit: 17-35 years (as per regulatory guidelines).",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mr-4 mt-1" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Admission Process
          </h2>
          <div className="w-24 h-1 bg-pink-500 rounded-full mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              step: "Step 1",
              title: "Application Submission",
              description:
                "Fill the online application form and submit required documents.",
            },
            {
              step: "Step 2",
              title: "Entrance Test / Interview",
              description:
                "Appear for the entrance exam or interview (if applicable) as per program guidelines.",
            },
            {
              step: "Step 3",
              title: "Selection & Admission",
              description:
                "Selected candidates will be notified and need to complete admission formalities.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
            >
              <div className="text-2xl font-bold text-pink-600 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Take the first step towards becoming a compassionate and skilled
          nursing professional. Apply now and join our vibrant community of
          learners.
        </p>
        <button className="px-8 py-4 bg-white text-pink-500 font-bold rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default AdmissionPage;
