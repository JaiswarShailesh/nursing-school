import { Quote } from "lucide-react";
import testimonialsData from "../data/testimonials";
import SectionHeading from "../components/sectionHeading";

const Testimonials = () => {
  return (
    <>
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 pb-20 pt-42 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            <span className="underline decoration-yellow-300 decoration-4 pl-3">
              Testimonials
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            A legacy of excellence in nursing education, shaping compassionate
            healthcare professionals for over two decades.
          </p>
        </div>
        <div className="absolute left-8 bottom-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
      </header>

      <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-pink-600">Alumni Say</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear directly from our graduates about their experiences and
            journeys after studying with us.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((t, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl shadow-lg p-8 text-left transition transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <Quote className="w-10 h-10 text-pink-500 mb-4 opacity-70" />
                <p className="text-gray-700 italic mb-6">“{t.quote}”</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-500"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
