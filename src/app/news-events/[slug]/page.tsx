"use client";

import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { CalendarDays, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import newsEventsData from "../../data/newsEvents";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function NewsEventDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const event = newsEventsData.find((n) => slugify(n.title) === slug);

  if (!event) notFound();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : event.images.length - 1) : null
    );
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev < event.images.length - 1 ? prev + 1 : 0) : null
    );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [event.images.length]);

  return (
    <>
      {/* HEADER */}
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 pb-20 pt-42 text-center">
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

      {/* MAIN CONTENT */}
      <article className="max-w-5xl mx-auto px-6 py-16">
        <Link
          href="/news-events"
          className="inline-block mb-6 text-pink-600 hover:underline font-medium"
        >
          ← Back to News & Events
        </Link>

        <img
          src={event.featuredImage}
          alt={event.title}
          className="w-full h-80 object-cover rounded-2xl shadow-lg mb-8"
        />

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <CalendarDays className="w-4 h-4 text-pink-500" />
          <span>{event.date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {event.title}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          {event.description}
        </p>

        {/* GALLERY SECTION */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {event.images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md group cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={img}
                alt={`${event.title} image ${i + 1}`}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* LIGHTBOX MODAL */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-pink-400 transition"
            >
              <X size={36} />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-6 text-white hover:text-pink-400 transition"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={showNext}
              className="absolute right-6 text-white hover:text-pink-400 transition"
            >
              <ChevronRight size={40} />
            </button>

            <div className="max-w-4xl w-full">
              <img
                src={event.images[selectedIndex]}
                alt={`${event.title} image ${selectedIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
      </article>
    </>
  );
}
