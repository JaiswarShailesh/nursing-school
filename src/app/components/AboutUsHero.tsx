import React from "react";
import { User } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white min-h-[70vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
          About <span className="text-yellow-300">Our College</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 animate-fadeIn delay-200">
          Excellence in Nursing Education | Compassionate Care | Global Competence
        </p>
        <button className="px-8 py-3 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          Learn More
        </button>
      </div>

      {/* Decorative Shape */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute left-0 top-0 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
    </section>
  );
};

export default AboutHero;
