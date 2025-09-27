"use client";
import React from "react";
import { useRouter } from "next/navigation";

const AboutCTA = () => {
  const router = useRouter();

  return (
    <section className="relative py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold mb-6">
          Want to Know More?{" "}
          <span className="text-yellow-300">Connect With Us</span>
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Reach out for admissions, courses, or any questions about our college.
          We’re here to help!
        </p>
        <button
          onClick={() => router.push("/contact-us")}
          className="px-10 py-4 bg-white text-pink-600 font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default AboutCTA;
