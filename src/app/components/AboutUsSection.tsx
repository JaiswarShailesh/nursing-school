// import React from "react";
// import { HeartPulse, GraduationCap, Users } from "lucide-react";

// const AboutUsSection = () => {
//   return (
//     <section className="relative py-20 bg-gradient-to-b from-base-100 to-base-200 overflow-hidden">
//       {/* Decorative background */}
//       <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>

//       <div className="relative container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
//         {/* Left side - Image */}
//         <div className="flex justify-center relative group">
//           <img
//             src="/images/about_nursing.jpg"
//             alt="About Nursing College"
//             className="rounded-2xl shadow-2xl transform transition duration-500 group-hover:scale-105 group-hover:shadow-primary/40 max-h-[450px] object-cover"
//           />
//           {/* Glow overlay */}
//           <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition"></div>
//         </div>

//         {/* Right side - Text */}
//         <div>
//           <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 relative">
//             About Us
//             <span className="block w-20 h-1 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full"></span>
//           </h2>
//           <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-600">
//             At{" "}
//             <span className="font-semibold">
//               SVKM’s Smt. Alka Desai School of Nursing & Research Centre,
//               Shirpur
//             </span>
//             , we are dedicated to shaping the next generation of skilled and
//             compassionate healthcare professionals. Our commitment goes beyond
//             academics – we focus on holistic growth, innovation, and service to
//             society.
//           </p>
//           <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-600">
//             With world-class infrastructure, experienced faculty, and hands-on
//             training, we empower students with the knowledge, values, and
//             leadership to excel in the ever-evolving healthcare landscape.
//           </p>

//           {/* Highlights with icons */}
//           <div className="grid sm:grid-cols-3 gap-6 mb-8">
//             <div className="flex flex-col items-center text-center">
//               <div className="p-4 rounded-full bg-primary/10 text-primary mb-3">
//                 <GraduationCap className="w-6 h-6" />
//               </div>
//               <p className="font-medium">Excellence in Education</p>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <div className="p-4 rounded-full bg-secondary/10 text-secondary mb-3">
//                 <HeartPulse className="w-6 h-6" />
//               </div>
//               <p className="font-medium">Compassionate Care</p>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <div className="p-4 rounded-full bg-accent/10 text-accent mb-3">
//                 <Users className="w-6 h-6" />
//               </div>
//               <p className="font-medium">Community Service</p>
//             </div>
//           </div>

//           <button className="btn btn-primary btn-wide shadow-lg hover:scale-105 transition rounded-md">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;

const AboutUsSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Shape */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            About <span className="text-pink-600">Our Institute</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Established with a vision to nurture compassionate and skilled
            healthcare professionals, our Nursing College is dedicated to
            academic excellence, hands-on clinical training, and holistic
            student development.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With state-of-the-art facilities, experienced faculty, and a focus
            on research and innovation, we strive to shape the next generation
            of leaders in the healthcare sector.
          </p>
          <a
            href="#more-about"
            className="inline-block px-6 py-3 rounded-full bg-pink-500 text-white font-medium shadow-lg hover:bg-pink-600 transition"
          >
            Learn More
          </a>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/images/Nursing_College_AboutUsSection.png"
            alt="Nursing Students"
            className="rounded-2xl shadow-xl transform hover:scale-105 transition"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-gray-800">Excellence!</h4>
            <p className="text-sm text-gray-500">Begins Here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
