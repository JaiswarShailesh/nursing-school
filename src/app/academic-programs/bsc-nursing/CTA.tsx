import React from "react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-center">
      <h2 className="text-4xl font-extrabold mb-6">
        Ready to Begin Your Nursing Journey?
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Apply today to join our GNM program and take the first step towards a
        rewarding healthcare career.
      </p>
      <button className="px-8 py-4 bg-white text-pink-500 font-bold rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition">
        Apply Now
      </button>
    </section>
  );
};

export default CTA;
