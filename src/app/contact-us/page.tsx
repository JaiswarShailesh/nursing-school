import { Mail, Phone, MapPin } from "lucide-react";

const ContactUsPage = () => {
  return (
    <section className="min-h-screen py-24 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
          Contact <span className="text-pink-600">Us</span>
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          We’re here to help! Have questions about admissions, programs, or
          anything else? Reach out using the form below or our contact
          information.
        </p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition text-center">
            <Mail className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Email</h4>
            <p className="text-gray-600">info@nursingcollege.edu.in</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition text-center">
            <Phone className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Phone</h4>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition text-center">
            <MapPin className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Address</h4>
            <p className="text-gray-600">
              Nursing College Campus, <br /> Mumbai, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Send Us a Message
          </h2>
          <form className="grid gap-6">
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
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full rounded-full"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full rounded-2xl"
              rows={6}
            ></textarea>
            <button
              type="submit"
              className="px-10 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
