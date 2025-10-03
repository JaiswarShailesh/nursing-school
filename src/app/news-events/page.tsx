"use client";
import { ArrowRight, CalendarDays } from "lucide-react";
import React, { useState } from "react";

// Helper to generate slug
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const NewsEvents = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const newsEvents = [
    {
      id: 1,
      title: "Orientation Program for New Batch",
      date: "15 September 2025",
      description:
        "Our new batch of GNM students were welcomed with an engaging orientation program highlighting values, discipline, and future goals.",
      image: "https://source.unsplash.com/600x400/?students,classroom",
    },
    {
      id: 2,
      title: "Health Awareness Camp",
      date: "5 September 2025",
      description:
        "A free health awareness camp was organized for the local community. Students actively participated in spreading awareness.",
      image: "https://source.unsplash.com/600x400/?health,community",
    },
    {
      id: 3,
      title: "Nursing Day Celebration",
      date: "12 May 2025",
      description:
        "On International Nurses Day, our students honored the contribution of nurses with skits, posters, and awareness programs.",
      image: "https://source.unsplash.com/600x400/?nurse,hospital",
    },
    {
      id: 4,
      title: "Annual Sports Meet",
      date: "22 February 2025",
      description:
        "Students showcased their sportsmanship and team spirit during the annual sports meet held at the college ground.",
      image: "https://source.unsplash.com/600x400/?sports,students",
    },
    {
      id: 5,
      title: "Seminar on Modern Healthcare",
      date: "10 January 2025",
      description:
        "A seminar on advancements in modern healthcare was conducted by leading professionals, giving valuable insights to students.",
      image: "https://source.unsplash.com/600x400/?conference,health",
    },
    {
      id: 6,
      title: "Community Service Drive",
      date: "28 December 2024",
      description:
        "Our students took part in a community service drive, supporting rural health initiatives and providing basic check-ups.",
      image: "https://source.unsplash.com/600x400/?community,volunteer",
    },
    {
      id: 7,
      title: "Guest Lecture on Mental Health",
      date: "15 November 2024",
      description:
        "A guest lecture was held by mental health professionals to educate students about psychological well-being.",
      image: "https://source.unsplash.com/600x400/?mentalhealth,lecture",
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(newsEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = newsEvents.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            News &
            <span className="underline decoration-yellow-300 decoration-4 pl-3">
              Events
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            A legacy of excellence in nursing education, shaping compassionate
            healthcare professionals for over two decades.
          </p>
        </div>
        <div className="absolute left-8 bottom-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
      </header>

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
            {currentItems.map((item, i) => (
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
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href='/'
                    className="inline-flex items-center text-pink-600 font-medium hover:underline"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

{/* px-6 py-3 rounded-full bg-pink-500 text-white font-medium shadow-lg hover:bg-pink-600 transition */}
          {/* Pagination */}
          <div className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`px-6 py-3 rounded-full text-sm font-medium transition ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-pink-400 text-white shadow-lg hover:bg-pink-600"
              }`}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition ${
                  currentPage === i + 1
                    ? "bg-pink-600 text-white border-blue-700"
                    : "bg-pink-400 text-white shadow-lg hover:bg-pink-600"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className={`px-6 py-3 rounded-full text-sm font-medium transition ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-pink-400 text-white shadow-lg hover:bg-pink-600"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsEvents;
