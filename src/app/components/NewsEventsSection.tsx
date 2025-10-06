import { CalendarDays, ArrowRight } from "lucide-react";

const NewsEventsSection = () => {
  const news = [
    {
      title: "National Nursing Conference 2025",
      date: "Oct 15, 2025",
      desc: "Our institute is hosting a national-level conference bringing together healthcare professionals and researchers from across the country.",
      image:
        "/images/nursing_conference.png",
      link: "#",
    },
    {
      title: "Annual Cultural Fest",
      date: "Nov 5, 2025",
      desc: "A vibrant celebration of talent, creativity, and culture. Join us for music, dance, and exciting competitions.",
      image:
        "/images/annual_cultural_fest.png",
      link: "#",
    },
    {
      title: "B.Sc Nursing Results 2025",
      date: "Sep 28, 2025",
      desc: "Final year results have been declared. Congratulations to all our graduates for their hard work and achievements!",
      image:
        "/images/exam_results.png",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Latest <span className="text-pink-600">News & Events</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay updated with the latest happenings, academic updates, and
          celebrations at our institute.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition"
                />
                <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 shadow-md">
                  <CalendarDays className="w-4 h-4" /> {item.date}
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-pink-600 font-medium hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
