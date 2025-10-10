"use client";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Photo {
  src: string;
  caption: string;
}

const photos: Photo[] = [
  { src: "/images/event_1.png", caption: "Campus Building" },
  { src: "/images/event_2.png", caption: "Nursing Lab" },
  { src: "/images/event_3.png", caption: "Annual Event" },
  { src: "/images/event_4.png", caption: "Hospital Training" },
  { src: "/images/event_5.png", caption: "Cultural Fest" },
  { src: "/images/event_6.png", caption: "Convocation Ceremony" },
  { src: "/images/event_7.png", caption: "Community Outreach" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : photos.length - 1) : null
    );

  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev < photos.length - 1 ? prev + 1 : 0) : null
    );

  // Close modal with Esc / Left / Right keys
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 pb-20 pt-42 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            Photo
            <span className="underline decoration-yellow-300 decoration-4 pl-3">
              Gallery
            </span>
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            Explore our legacy through events, achievements, and student
            experiences.
          </p>
        </div>
        <div className="absolute left-8 bottom-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
      </header>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-pink-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="mb-6 relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedIndex(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="rounded-xl shadow-md w-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    {photo.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-pink-400 transition"
            >
              <X size={36} />
            </button>

            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-6 text-white hover:text-pink-400 transition"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-6 text-white hover:text-pink-400 transition"
            >
              <ChevronRight size={40} />
            </button>

            <div className="max-w-4xl w-full">
              <img
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].caption}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-fadeIn"
              />
              <p className="text-center text-white mt-4 text-lg">
                {photos[selectedIndex].caption}
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
