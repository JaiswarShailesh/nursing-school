import React from "react";

const FacultyCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
      <p className="mb-8 text-lg">
        Interested in becoming part of our esteemed faculty? Reach out to us
        today.
      </p>
      <a
        href="/contact"
        className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:scale-105 transition"
      >
        Contact Us
      </a>
    </section>
  );
};

export default FacultyCTA;
