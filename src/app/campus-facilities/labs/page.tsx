"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/labs/anatomy_lab.jpg", title: "Anatomy Lab" },
  { src: "/images/labs/computer_lab.jpg", title: "Computer Lab" },
  { src: "/images/labs/nutrition_lab.jpg", title: "Nutrition Lab" },
  { src: "/images/labs/physiology_lab.jpg", title: "Physiology Lab" },
  { src: "/images/labs/nursing_skill_lab.jpg", title: "Nursing Skill Lab" },
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef(true);
  const intervalRef = useRef<number | null>(null);

  // Autoplay logic
  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
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

  const goPrev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 pb-20 pt-40 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            <span className="underline decoration-yellow-300 decoration-4 pl-4">
              Laboratory
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
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            {/* Slider Track */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${images.length * 100}%`,
                transform: `translateX(-${index * (100 / images.length)}%)`,
              }}
            >
              {images.map((item, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0"
                  style={{ width: `${100 / images.length}%` }}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1200}
                    height={800}
                    priority={i === 0}
                    className="w-full h-72 md:h-96 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Caption */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0">
                    <h3 className="text-white font-semibold text-lg md:text-xl drop-shadow-lg bg-black/40 px-4 py-2 rounded-xl backdrop-blur-sm">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev Button */}
            <button
              aria-label="Previous"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow hover:scale-105 transition"
            >
              <ChevronLeft size={20} className="text-pink-600" />
            </button>

            {/* Next Button */}
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
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
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
          <div className="mt-6 grid grid-cols-1 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-pink-100 hover:shadow-2xl transition transform hover:-translate-y-2">
              <h2 className="text-2xl font-semibold mb-4 text-pink-600">
                About
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Well-equipped lab in all specialities such as Anatomy,
                Physiology, Fundamentals of Nursing, Nutrition, Computer,
                Community Health Nursing, Advanced Medical Surgical Nursing,
                Paediatric Nursing, MCH & AV Aids as recommended by INC, MNMC &
                MUHS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
