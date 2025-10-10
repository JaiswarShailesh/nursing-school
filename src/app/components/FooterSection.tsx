// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-800 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
//         {/* Brand / About */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4">Nursing College</h3>
//           <p className="text-sm text-gray-600 leading-relaxed">
//             Dedicated to nurturing the next generation of skilled and
//             compassionate healthcare professionals through excellence in
//             education, research, and training.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-gray-700">
//             <li>
//               <a
//                 href="#home"
//                 className="hover:text-pink-600 transition-colors"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 className="hover:text-pink-600 transition-colors"
//               >
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#courses"
//                 className="hover:text-pink-600 transition-colors"
//               >
//                 Courses
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#admissions"
//                 className="hover:text-pink-600 transition-colors"
//               >
//                 Admissions
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="hover:text-pink-600 transition-colors"
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Socials */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
//           <div className="flex space-x-4">
//             <a
//               href="#"
//               className="p-3 border border-gray-300 rounded-full hover:bg-pink-600 hover:text-white transition"
//             >
//               <Facebook className="w-5 h-5" />
//             </a>
//             <a
//               href="#"
//               className="p-3 border border-gray-300 rounded-full hover:bg-pink-600 hover:text-white transition"
//             >
//               <Instagram className="w-5 h-5" />
//             </a>
//             <a
//               href="#"
//               className="p-3 border border-gray-300 rounded-full hover:bg-pink-600 hover:text-white transition"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a
//               href="#"
//               className="p-3 border border-gray-300 rounded-full hover:bg-pink-600 hover:text-white transition"
//             >
//               <Twitter className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="bg-gray-50 border-t border-gray-200 py-6 text-center text-sm text-gray-600">
//         © {new Date().getFullYear()} Nursing College. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-800">
      {/* Curved Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#f9fafb"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid md:grid-cols-4 gap-12 relative z-10">
        {/* Brand / About */}
        <div>
          {/* <h3 className="text-2xl font-bold mb-4"></h3> */}
          <img src="/images/nursing_logo.png" alt="logo" className="mb-5" />
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Dedicated to nurturing the next generation of skilled and
            compassionate healthcare professionals through excellence in
            education, research, and training.
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="p-3 border border-gray-300 rounded-full hover:bg-pink-600 hover:text-white hover:shadow-lg transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 border border-gray-300 rounded-full hover:bg-pink-600 hover:text-white hover:shadow-lg transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 border border-gray-300 rounded-full hover:bg-pink-600 hover:text-white hover:shadow-lg transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 border border-gray-300 rounded-full hover:bg-pink-600 hover:text-white hover:shadow-lg transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/" className="hover:text-pink-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-pink-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faculty" className="hover:text-pink-600 transition">
                Faculty
              </Link>
            </li>
            <li>
              <Link
                href="/admission"
                className="hover:text-pink-600 transition"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                href="/academic-programs/general-nursing-and-midwifery"
                className="hover:text-pink-600 transition"
              >
                GNM
              </Link>
            </li>
            {/* {["Home", "", "Courses", "", "Contact Us"].map(
              (item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-pink-600 transition">
                    {item}
                  </Link>
                </li>
              )
            )} */}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Others</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/newsevents" className="hover:text-pink-600 transition">
                News & Events
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-pink-600 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-pink-600 transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="hover:text-pink-600 transition"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to our newsletter for updates on admissions, events, and
            more.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
            >
              Go
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-200 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Nursing College. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
