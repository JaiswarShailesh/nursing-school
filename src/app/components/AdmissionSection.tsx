import { FileDown, ArrowRight } from "lucide-react";

const AdmissionSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091215367-59ab6f8b18a6?auto=format&fit=crop&w=1600&q=80')] opacity-20 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Admissions Open <span className="text-yellow-300">2025–26</span>
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-100">
          Join one of the leading nursing institutes and shape your future in
          healthcare. Limited seats available for our B.Sc Nursing, M.Sc Nursing,
          and GNM programs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#prospectus"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/20 backdrop-blur-md font-medium rounded-full border border-white hover:bg-white/30 transition"
          >
            <FileDown className="w-5 h-5" /> Download Prospectus
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
