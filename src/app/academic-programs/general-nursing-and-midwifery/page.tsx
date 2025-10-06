// import {
//   GraduationCap,
//   Clock,
//   CheckCircle,
//   BookOpen,
//   Heart,
// } from "lucide-react";

// export default function GNMProgram() {
//   return (
//     <>
//       <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-20 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
//             General Nursing & Midwifery
//             <span className="underline decoration-yellow-300 decoration-4 pl-3">
//               (GNM)
//             </span>
//           </h1>
//           <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
//             A legacy of excellence in nursing education, shaping compassionate
//             healthcare professionals for over two decades.
//           </p>
//         </div>
//         <div className="absolute left-8 bottom-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
//       </header>

//       <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6">
//         <div className="max-w-6xl mx-auto">
//           {/* Header Section */}
//           <div className="text-center mb-16">
//             <h1 className="text-5xl font-bold text-gray-900 mb-4">
//               General Nursing & Midwifery (GNM)
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our GNM program is designed to nurture compassionate and skilled
//               nursing professionals, combining classroom learning with clinical
//               exposure to prepare students for global healthcare challenges.
//             </p>
//           </div>

//           {/* Program Highlights */}
//           <section className="grid md:grid-cols-3 gap-8 mb-20">
//             <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
//               <GraduationCap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
//               <p className="text-gray-600">
//                 10+2 passed with minimum 40% aggregate (preferably Science
//                 stream). Both male and female candidates are eligible.
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
//               <Clock className="w-12 h-12 text-pink-600 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Duration</h3>
//               <p className="text-gray-600">
//                 3 years full-time program with integrated clinical practice and
//                 internships.
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
//               <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Affiliation</h3>
//               <p className="text-gray-600">
//                 Affiliated with <strong>INC</strong> & respective State Nursing
//                 Council. Recognized by Government of India.
//               </p>
//             </div>
//           </section>

//           {/* Curriculum Section */}
//           <section className="mb-20">
//             <h2 className="text-3xl font-bold text-center mb-12">
//               Curriculum Overview
//             </h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-white rounded-2xl shadow-lg p-8">
//                 <ul className="space-y-4 text-gray-700">
//                   <li className="flex items-start">
//                     <CheckCircle className="w-6 h-6 text-indigo-600 mt-1 mr-3" />
//                     Foundation of Nursing, Anatomy & Physiology
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-6 h-6 text-pink-600 mt-1 mr-3" />
//                     Medical-Surgical Nursing
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3" />
//                     Child Health Nursing
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 mr-3" />
//                     Mental Health Nursing
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white rounded-2xl shadow-lg p-8">
//                 <ul className="space-y-4 text-gray-700">
//                   <li className="flex items-start">
//                     <CheckCircle className="w-6 h-6 text-indigo-600 mt-1 mr-3" />
//                     Midwifery & Obstetric Nursing
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-6 h-6 text-pink-600 mt-1 mr-3" />
//                     Community Health Nursing
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3" />
//                     Nursing Research & Management
//                   </li>
//                   <li className="flex items-start">
//                     <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 mr-3" />
//                     Internship with Real-world Clinical Exposure
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* Career Opportunities */}
//           <section className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-xl mb-20">
//             <Heart className="w-16 h-16 mx-auto mb-6" />
//             <h2 className="text-3xl font-bold mb-4">Career Opportunities</h2>
//             <p className="max-w-3xl mx-auto text-lg">
//               GNM graduates can pursue careers as Staff Nurses, Community Health
//               Nurses, Midwives, Educators, and Healthcare Administrators in
//               government and private hospitals, community health centres, and
//               international healthcare organisations.
//             </p>
//           </section>

//           {/* CTA */}
//           <div className="text-center">
//             <button className="btn btn-primary btn-wide text-lg rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
//               Apply Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import Link from "next/link";
import CTA from "./CTA";
import CareerOpportunity from "./CareerOpportunity";
import CourseOverview from "./CourseOverview";
import ProgramHighlights from "./ProgramHighlights";
import AboutCourse from "./AboutCourse";
import FeeStructure from "./FeeStructure";

export default function GNMProgram() {
  return (
    <>
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 pb-20 pt-42 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            General Nursing & Midwifery
            <span className="underline decoration-yellow-300 decoration-4 pl-3">
              (GNM)
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            A legacy of excellence in nursing education, shaping compassionate
            healthcare professionals for over two decades.
          </p>
        </div>
        <div className="absolute left-8 bottom-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
      </header>

      <AboutCourse />
      <ProgramHighlights />
      <CourseOverview />
      <FeeStructure />
      <CareerOpportunity />
      <CTA />
      {/* Career Opportunities - Flowing Ribbon Style */}
    </>
  );
}
