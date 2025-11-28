"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/library/library-1.png",
  "/images/library/library-2.png",
  "/images/library/library-3.png",
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef(true);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = window.setInterval(() => {
      if (autoplayRef.current) {
        setIndex((i) => (i + 1) % images.length);
      }
    }, 4000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goPrev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 pb-20 pt-42 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            <span className="underline decoration-yellow-300 decoration-4 pl-4">
              Library
            </span>
          </h1>
        </div>
      </section>

      {/* SLIDER */}
      <section
        className="py-8 bg-gray-50"
        onMouseEnter={() => (autoplayRef.current = false)}
        onMouseLeave={() => (autoplayRef.current = true)}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative">
            {/* slides container */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  width: `${images.length * 100}%`,
                  transform: `translateX(-${index * (100 / images.length)}%)`,
                }}
              >
                {images.map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0"
                    style={{ width: `${100 / images.length}%` }}
                  >
                    <Image
                      src={src}
                      alt={`Library ${i + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-72 md:h-96 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next */}
            <button
              aria-label="Previous"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow hover:scale-105 transition"
            >
              <ChevronLeft size={20} className="text-pink-600" />
            </button>

            <button
              aria-label="Next"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow hover:scale-105 transition"
            >
              <ChevronRight size={20} className="text-pink-600" />
            </button>

            {/* Dots */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition ${
                    i === index ? "bg-pink-600" : "bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Library */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-pink-100 hover:shadow-2xl transition transform hover:-translate-y-2">
              <h2 className="text-2xl font-semibold mb-4 text-pink-600">
                About Our Library
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The College of Nursing has a full-fledged library containing
                more than 4000 books, National and International Journals, Back
                Volumes, and published research by faculty and students.
                Internet facilities are available. Separate reading room for
                students and faculty. An exclusive collection of reference books
                of the latest edition stipulated by MUHS / INC is made available
                to the students and staff.
              </p>
            </div>

            {/* Facilities */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-pink-100 hover:shadow-2xl transition transform hover:-translate-y-2">
              <h2 className="text-2xl font-semibold mb-4 text-pink-600">
                Facilities
              </h2>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Dedicated reading space",
                  "High-speed internet access",
                  "Computer systems for research",
                  "Reference books and rare materials",
                  "Daily newspapers & weekly journals",
                  "Digital library access",
                ].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2
                      size={16}
                      className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timings */}
          <div className="mt-8 bg-white p-8 rounded-3xl shadow-lg border border-pink-100 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-pink-600">
              Library Timings
            </h2>
            <p className="text-gray-700">
              Monday to Saturday: 9:00 AM – 5:00 PM
            </p>
          </div>

          {/* Rules */}
          <div className="mt-8 bg-white p-8 rounded-3xl shadow-lg border border-pink-100">
            <h2 className="text-2xl font-semibold mb-4 text-pink-600">
              Rules & Regulations
            </h2>
            <ul className="space-y-3 text-gray-600">
              {[
                "Maintain silence at all times.",
                "Mobile phones must be on silent mode.",
                "Return borrowed books on or before the due date.",
                "Handle books and resources with care.",
                "Food and drinks are not allowed inside.",
              ].map((text, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2
                    size={16}
                    className="text-pink-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
