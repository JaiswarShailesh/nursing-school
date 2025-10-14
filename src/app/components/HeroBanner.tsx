// import React from "react";

// const HeroBanner = () => {
//   return (
//     <div
//       className="relative h-[500px] bg-cover bg-center -z-1"
//       style={{
//         backgroundImage: "url(/images/Nursing_School_Banner.png)",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="absolute inset-0 flex items-center">
//         <div className="max-w-3xl text-white pl-5 md:pl-10">
//           <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
//             Empowering the Next Generation of Healthcare Heroes
//           </h1>
//           <p className="mb-5 text-sm md:text-lg">
//             Join our Nursing School to gain hands-on training, expert guidance,
//             and the skills needed to make a real difference in patient care. Our
//             curriculum combines modern medical knowledge with compassionate
//             practice, preparing students to excel in hospitals, clinics, and
//             healthcare facilities worldwide.
//           </p>
//           <button className="btn btn-primary btn-wide shadow-lg hover:scale-105 transition rounded-md">Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;

import { ArrowRight } from "lucide-react";
import React from "react";

const HeroBanner = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: "url('/images/Nursing_School_Banner.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl md:text-6xl font-bold drop-shadow-lg">
            Nursing & Medical College of Excellence
          </h1>
          <p className="mb-8 text-lg md:text-xl font-light drop-shadow-md">
            In pursuit of excellence in nursing education with global standards
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#more-about"
              className="btn-wide inline-block px-6 py-3 rounded-full bg-pink-500 text-white font-medium shadow-lg hover:bg-pink-600 transition"
            >
              Apply Now
            </a>
            <a
              href="#coursesSection"
              className="btn-wide inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition hover:shadow-2xl"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
