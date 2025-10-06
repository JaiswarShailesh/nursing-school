import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "B.Sc Nursing Graduate",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "The college has given me the perfect balance of knowledge, clinical exposure, and confidence. I am proud to be an alumna and now working at a top hospital.",
    },
    {
      name: "Rahul Mehta",
      role: "GNM Alumnus",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "Excellent faculty and world-class facilities helped me achieve my dreams. The placement support was fantastic, and I got recruited right after graduation.",
    },
    {
      name: "Aditi Singh",
      role: "M.Sc Nursing",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "The research opportunities and advanced labs at the institute shaped my career path. Today, I’m pursuing a PhD in Nursing, thanks to the foundation laid here.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What Our <span className="text-pink-600">Alumni Say</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear directly from our graduates about their experiences and journeys
          after studying with us.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
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

        {/* Optional CTA */}
        <div className="mt-12">
          <a
            href="#alumni-success"
            className="inline-block px-6 py-3 rounded-full bg-pink-500 text-white font-medium hover:bg-pink-600 transition shadow-lg hover:shadow-2xl"
          >
            See More Alumni Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
