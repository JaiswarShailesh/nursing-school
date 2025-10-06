// import React from "react";
// import { MapPin, Phone, Mail } from "lucide-react";

// const ContactUsSection = () => {
//   return (
//     <section className="relative py-20 from-base-100 to-base-200" id="contact">
//       <div className="container mx-auto px-6 lg:px-12">
//         {/* Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
//           <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
//             Have questions or want to know more about{" "}
//             <span className="font-semibold">
//               SVKM’s Smt. Alka Desai School of Nursing & Research Centre
//             </span>
//             ? Get in touch with us.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Left - Info */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-4 bg-base-100 shadow-md p-5 rounded-xl hover:shadow-lg transition">
//               <div className="p-3 rounded-full bg-primary/10 text-primary">
//                 <MapPin className="w-6 h-6" />
//               </div>
//               <div>
//                 <h4 className="font-semibold">Our Location</h4>
//                 <p className="text-gray-600">
//                   Shirpur Campus, Maharashtra, India
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 bg-base-100 shadow-md p-5 rounded-xl hover:shadow-lg transition">
//               <div className="p-3 rounded-full bg-secondary/10 text-secondary">
//                 <Phone className="w-6 h-6" />
//               </div>
//               <div>
//                 <h4 className="font-semibold">Call Us</h4>
//                 <p className="text-gray-600">+91 12345 67890</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 bg-base-100 shadow-md p-5 rounded-xl hover:shadow-lg transition">
//               <div className="p-3 rounded-full bg-accent/10 text-accent">
//                 <Mail className="w-6 h-6" />
//               </div>
//               <div>
//                 <h4 className="font-semibold">Email Us</h4>
//                 <p className="text-gray-600">info@nursingcollege.edu.in</p>
//               </div>
//             </div>
//           </div>

//           {/* Right - Contact Form */}
//           <div className="bg-base-100 shadow-xl rounded-2xl p-8">
//             <form className="space-y-5">
//               <div>
//                 <label className="label font-medium">Name</label>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="input input-bordered w-full"
//                 />
//               </div>
//               <div>
//                 <label className="label font-medium">Email</label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="input input-bordered w-full"
//                 />
//               </div>
//               <div>
//                 <label className="label font-medium">Message</label>
//                 <textarea
//                   placeholder="Write your message here..."
//                   className="textarea textarea-bordered w-full h-28"
//                 ></textarea>
//               </div>
//               <button className="btn btn-primary w-full">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;

import { Mail, Phone, MapPin } from "lucide-react";

const ContactUsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Get in <span className="text-pink-600">Touch</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions about admissions, courses, or facilities? Reach out to
          us—we’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <Mail className="w-10 h-10 text-pink-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600">info@nursingcollege.edu.in</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <Phone className="w-10 h-10 text-pink-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <MapPin className="w-10 h-10 text-pink-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-800">Address</h4>
            <p className="text-gray-600">
              Nursing College Campus, <br /> Mumbai, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full rounded-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded-full"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full rounded-2xl"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
