import React from "react";
import CollegeHighlights from "./CollegeHighlights";
import VisionMission from "./MissonVision";
import LeadershipSection from "./LeadershipSection";
import AboutCTA from "../components/AboutCTA";
import LeadershipMessages from "./LeadershipMessage";

const AboutUsPage = () => {
  return (
    <>
      {/* <HeroBanner /> */}
      {/* <AboutHero /> */}
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 pb-20 text-center pt-42">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            About
            <span className="underline decoration-yellow-300 decoration-4 pl-3">
              Our Institution
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            Committed to advancing nursing education with compassion, integrity, and excellence.
          </p>
        </div>
        <div className="absolute left-8 bottom-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
      </header>
      <CollegeHighlights />
      <LeadershipMessages />
      {/* <PrincipalMessage />
      <PresidentMessage /> */}
      <VisionMission />
      <LeadershipSection />
      <AboutCTA />
    </>
  );
};

export default AboutUsPage;

// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   BookOpen,
//   Award,
//   Users,
//   Heart,
//   Target,
//   CheckCircle2,
//   ArrowRight,
// } from "lucide-react";

/**
 * AboutPage.tsx
 * Modern About Us page with hero, counters, mission/vision, timeline, testimonials, and CTA
 */

// export default function AboutPage() {
//   const [counts, setCounts] = useState({ years: 0, students: 0, faculty: 0 });

//   useEffect(() => {
//     const targets = { years: 25, students: 1200, faculty: 65 };
//     const duration = 1200;
//     const start = Date.now();
//     const run = () => {
//       const now = Date.now();
//       const t = Math.min(1, (now - start) / duration);
//       setCounts({
//         years: Math.floor(targets.years * t),
//         students: Math.floor(targets.students * t),
//         faculty: Math.floor(targets.faculty * t),
//       });
//       if (t < 1) requestAnimationFrame(run);
//     };
//     run();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* HERO */}
//       <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-20 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
//             About{" "}
//             <span className="underline decoration-yellow-300 decoration-4">
//               Our Institution
//             </span>
//           </h1>
//           <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
//             A legacy of excellence in nursing education, shaping compassionate
//             healthcare professionals for over two decades.
//           </p>
//         </div>
//         <div className="absolute left-8 bottom-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 mt-12">
//         {/* COUNTERS */}
//         <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
//           <CounterCard number={counts.years} label="Years of Excellence" />
//           <CounterCard number={counts.students} label="Students Trained" />
//           <CounterCard number={counts.faculty} label="Expert Faculty" />
//         </section>

//         {/* MISSION / VISION */}
//         <section className="mb-12">
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Mission */}
//             <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
//               <Target className="w-12 h-12 text-pink-600 mb-4" />
//               <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
//               <ul className="space-y-4 text-gray-600">
//                 <li className="flex items-start">
//                   <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 mt-1" />
//                   <span>
//                     Deliver world-class, hands-on nursing education that blends
//                     modern knowledge with compassionate care.
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 mt-1" />
//                   <span>
//                     Shape globally competent professionals equipped to lead,
//                     innovate, and address healthcare challenges.
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 mt-1" />
//                   <span>
//                     Foster empathy, integrity, and patient-centred care as core
//                     values.
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 mt-1" />
//                   <span>
//                     Promote research, innovation, and lifelong learning in
//                     healthcare.
//                   </span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle2 className="w-6 h-6 text-pink-500 mr-3 mt-1" />
//                   <span>
//                     Champion affordable, accessible, and culturally sensitive
//                     healthcare, firmly committed to rural and tribal communities.
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Vision */}
//             <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
//               <Heart className="w-12 h-12 text-indigo-600 mb-4" />
//               <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
//               <p className="text-gray-600 leading-relaxed">
//                 To be a globally recognised centre of excellence in nursing
//                 education, nurturing skilled, compassionate, and ethical nursing
//                 professionals who advance healthcare innovation while
//                 strengthening community wellbeing.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* TIMELINE / MILESTONES */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold mb-6 text-center">Our Journey</h2>
//           <div className="relative border-l-4 border-pink-600 pl-8 space-y-8">
//             {[
//               {
//                 year: "2000",
//                 text: "Institution founded with a vision to empower nursing education.",
//               },
//               {
//                 year: "2008",
//                 text: "Expanded programs with postgraduate nursing specializations.",
//               },
//               {
//                 year: "2015",
//                 text: "Recognized as a research hub with multiple funded projects.",
//               },
//               {
//                 year: "2022",
//                 text: "Launched international collaborations and exchange programs.",
//               },
//             ].map((m, i) => (
//               <div key={i} className="relative">
//                 <div className="absolute -left-10 top-0 w-6 h-6 bg-pink-600 rounded-full border-4 border-white shadow"></div>
//                 <h3 className="font-bold text-lg">{m.year}</h3>
//                 <p className="text-gray-600">{m.text}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* WHY CHOOSE US */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold mb-6 text-center">
//             Why Choose Us?
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Award className="w-10 h-10 text-yellow-500" />,
//                 title: "Accredited Programs",
//                 desc: "Recognized by national councils with consistently top results.",
//               },
//               {
//                 icon: <Users className="w-10 h-10 text-indigo-500" />,
//                 title: "Strong Alumni Network",
//                 desc: "Our graduates are healthcare leaders across India and abroad.",
//               },
//               {
//                 icon: <BookOpen className="w-10 h-10 text-pink-500" />,
//                 title: "Holistic Education",
//                 desc: "Blend of academics, clinical training, and research exposure.",
//               },
//             ].map((f, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-xl transition"
//               >
//                 <div className="flex justify-center mb-4">{f.icon}</div>
//                 <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
//                 <p className="text-gray-600">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* TESTIMONIALS */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold mb-6 text-center">
//             What Our Students Say
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 text: "The training I received here transformed me into a confident nurse ready to serve globally.",
//                 author: "Priya S.",
//                 role: "Alumna, 2021",
//               },
//               {
//                 text: "Supportive faculty and excellent clinical exposure prepared me for real-world healthcare challenges.",
//                 author: "Arjun M.",
//                 role: "Student, Final Year",
//               },
//             ].map((t, i) => (
//               <div key={i} className="bg-white rounded-2xl shadow p-6">
//                 <p className="italic text-gray-700">“{t.text}”</p>
//                 <p className="mt-3 font-semibold">{t.author}</p>
//                 <p className="text-sm text-gray-500">{t.role}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="mb-20">
//           <div className="rounded-3xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
//             <div>
//               <h3 className="text-2xl font-bold">Be Part of Our Legacy</h3>
//               <p className="text-white/90 mt-2">
//                 Join a community committed to academic excellence, clinical
//                 expertise, and compassionate care.
//               </p>
//             </div>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => (window.location.href = "/admissions")}
//                 className="px-6 py-3 bg-white text-pink-600 rounded-full font-semibold hover:scale-105 transition"
//               >
//                 Apply Now
//               </button>
//               <button
//                 onClick={() => (window.location.href = "/contact")}
//                 className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// function CounterCard({ number, label }: { number: number; label: string }) {
//   return (
//     <div className="bg-white rounded-2xl shadow p-6 text-center">
//       <div className="text-4xl font-bold text-pink-600">{number}+</div>
//       <div className="mt-2 text-gray-600 font-medium">{label}</div>
//     </div>
//   );
// }
