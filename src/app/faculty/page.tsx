// import React from "react";
// import Hero from "../components/Hero";
// import FacultyIntro from "./Intro";
// import Member from "./Members";
// import FacultyCTA from "./facultyCTA";

// const Faculty = () => {
//   return (
//     <>
//       <Hero
//         title="Meet Our Faculty"
//         content="Experienced, dedicated, and passionate educators shaping the future of healthcare."
//         buttonText="Explore"
//         path="/faculty"
//       />
//       <FacultyIntro />
//       <Member />
//       <FacultyCTA />
//     </>
//   );
// };

// export default Faculty;

"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Grid as GridIcon,
  List,
  User,
  BookOpen,
  Globe,
  Star,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";

/**
 * FacultyPage.tsx
 * Single-file fancy Faculty Page using Tailwind + lucide-react icons.
 *
 * Notes:
 * - Replace placeholder images (/images/...) with real images or CMS fields.
 * - Add links (linkedin / publications) in the data objects when available.
 */

type Faculty = {
  id: number;
  name: string;
  role: string;
  dept: string;
  bio: string;
  img: string;
  interests?: string[];
  email?: string;
  linkedin?: string;
  featured?: boolean;
  awards?: string[];
};

const MOCK_FACULTY: Faculty[] = [
  {
    id: 1,
    name: "Dr. Jane Doe",
    role: "Professor & Principal",
    dept: "Nursing",
    bio: "25+ years experience in nursing education, clinical research & leadership. Passionate about mentorship and evidence-based practice.",
    img: "/images/principal.jpg",
    interests: ["Clinical Nursing", "Education", "Research"],
    email: "jane.doe@nursingcollege.edu.in",
    linkedin: "#",
    featured: true,
    awards: ["Lifetime Achievement 2023", "Best Educator 2018"],
  },
  {
    id: 2,
    name: "Prof. John Smith",
    role: "Associate Professor",
    dept: "Community Health",
    bio: "Focus on community nursing, public health programs and outreach. Leads multiple community clinics and training programs.",
    img: "/images/f2.jpg",
    interests: ["Public Health", "Community Programs"],
    email: "john.smith@nursingcollege.edu.in",
    linkedin: "#",
    featured: true,
  },
  {
    id: 3,
    name: "Dr. Alice Brown",
    role: "Senior Lecturer",
    dept: "Pediatrics",
    bio: "Specialized in pediatric nursing and neonatal care with extensive clinical experience.",
    img: "/images/f3.jpg",
    interests: ["Neonatal Care", "Pediatrics"],
    email: "alice.brown@nursingcollege.edu.in",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Dr. Robert Lee",
    role: "Head of Research",
    dept: "Nursing Research",
    bio: "Leads research projects, grant-writing, and publishes regularly in international journals.",
    img: "/images/f4.jpg",
    interests: ["Research", "Epidemiology"],
    email: "robert.lee@nursingcollege.edu.in",
    linkedin: "#",
    awards: ["Research Excellence 2022"],
  },
  // ...add more mock faculty as needed
];

const DEPARTMENTS = [
  "All",
  "Nursing",
  "Community Health",
  "Pediatrics",
  "Nursing Research",
  "Administration",
];

export default function FacultyPage() {
  // page state
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState<string>("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [faculty, setFaculty] = useState<Faculty[]>(MOCK_FACULTY);
  const [selected, setSelected] = useState<Faculty | null>(null);
  const [spotlight, setSpotlight] = useState<Faculty | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [testiIndex, setTestiIndex] = useState(0);
  const [counts, setCounts] = useState({ profs: 0, phd: 0, papers: 0 });

  // derived filtered list
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faculty.filter((f) => {
      if (dept !== "All" && f.dept !== dept) return false;
      if (!q) return true;
      return (
        f.name.toLowerCase().includes(q) ||
        f.role.toLowerCase().includes(q) ||
        f.dept.toLowerCase().includes(q)
      );
    });
  }, [faculty, query, dept]);

  // spotlight random
  useEffect(() => {
    setSpotlight(() => {
      const featured = faculty.filter((f) => f.featured);
      if (featured.length === 0) return faculty[0] ?? null;
      return featured[Math.floor(Math.random() * featured.length)];
    });
  }, [faculty]);

  // little auto-play for achievements + testimonials
  useEffect(() => {
    const id = setInterval(
      () => setCarouselIndex((i) => (i + 1) % ACHIEVEMENTS.length),
      4000
    );
    const id2 = setInterval(
      () => setTestiIndex((i) => (i + 1) % TESTIMONIALS.length),
      6000
    );
    return () => {
      clearInterval(id);
      clearInterval(id2);
    };
  }, []);

  // animated counters (counts up)
  useEffect(() => {
    const targets = { profs: 65, phd: 18, papers: 280 };
    const duration = 1200;
    const start = Date.now();
    const run = () => {
      const now = Date.now();
      const t = Math.min(1, (now - start) / duration);
      setCounts({
        profs: Math.floor(targets.profs * t),
        phd: Math.floor(targets.phd * t),
        papers: Math.floor(targets.papers * t),
      });
      if (t < 1) requestAnimationFrame(run);
    };
    run();
  }, []);

  // simple list of achievements & testimonials
  const ACHIEVEMENTS = [
    {
      title: "National Nursing Award - 2024",
      desc: "Faculty recognition for community health outreach.",
      img: "/images/profile_1.png",
    },
    {
      title: "International Research Grant - 2023",
      desc: "Multi-institutional research funding for neonatal care.",
      img: "/images/profile_2.png",
    },
    {
      title: "Best Teaching Practices - 2022",
      desc: "Awarded for pedagogical innovation in clinical simulations.",
      img: "/images/profile_3.png",
    },
  ];

  const TESTIMONIALS = [
    {
      text: "Teaching here is not just a job — it's a calling. We mentor and learn together.",
      author: "Dr. Jane Doe",
      role: "Principal",
    },
    {
      text: "Our research culture encourages curiosity and real-world impact.",
      author: "Dr. Robert Lee",
      role: "Head of Research",
    },
  ];

  // small helpers
  const openProfile = (f: Faculty) => setSelected(f);
  const closeProfile = () => setSelected(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 pb-20 pt-42 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow">
              Meet Our{" "}
              <span className="underline decoration-yellow-300 decoration-4">
                Esteemed Faculty
              </span>
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Experienced clinicians, passionate teachers and active researchers
              committed to delivering excellence in nursing education.
            </p>

            <div className="mt-6 flex gap-3 items-center">
              <button
                className="px-5 py-3 rounded-full bg-white text-indigo-600 font-semibold shadow hover:scale-105 transition"
                onClick={() =>
                  window.scrollTo({ top: 600, behavior: "smooth" })
                }
              >
                View Faculty
              </button>

              <button
                className="px-5 py-3 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition"
                onClick={() =>
                  window.scrollTo({ top: 1400, behavior: "smooth" })
                }
              >
                Contact Admissions
              </button>
            </div>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-3 gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
            <CounterCard number={counts.profs} label="Faculty" />
            <CounterCard number={counts.phd} label="PhD Holders" />
            <CounterCard number={counts.papers} label="Research Papers" />
          </div>
        </div>
        {/* decorative shape */}
        <div className="pointer-events-none absolute right-8 bottom-0 w-48 h-48 bg-yellow-300/20 rounded-full blur-3xl"></div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-12">
        {/* Quick Filters / Search / Toggle */}
        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="relative flex-1">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search faculty by name, role or department..."
                  className="w-full input input-bordered rounded-full pl-12 pr-4 py-3"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="w-5 h-5" />
                </div>
              </div>

              <div className="hidden md:flex gap-3">
                {DEPARTMENTS.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDept(d)}
                    className={`px-4 py-2 rounded-full font-medium ${
                      dept === d
                        ? "bg-pink-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="hidden md:inline">View:</span>
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded-md ${
                    view === "grid"
                      ? "bg-pink-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <GridIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded-md ${
                    view === "list"
                      ? "bg-pink-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* mobile dept select */}
          <div className="mt-4 md:hidden flex gap-3 overflow-x-auto pb-2">
            {DEPARTMENTS.map((d) => (
              <button
                key={d}
                onClick={() => setDept(d)}
                className={`px-4 py-2 rounded-full font-medium flex-shrink-0 ${
                  dept === d
                    ? "bg-pink-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </section>

        {/* Spotlight + Highlights */}
        <section className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Featured Faculty</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {faculty
                .filter((f) => f.featured)
                .slice(0, 4)
                .map((f) => (
                  <div
                    key={f.id}
                    className="flex gap-4 items-start hover:shadow-lg p-3 rounded-lg transition cursor-pointer"
                    onClick={() => openProfile(f)}
                  >
                    <img
                      src={f.img}
                      alt={f.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{f.name}</h4>
                      <p className="text-sm text-gray-600">{f.role}</p>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {f.bio}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Spotlight */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold mb-3">Faculty Spotlight</h4>
            {spotlight && (
              <>
                <img
                  src={spotlight.img}
                  alt={spotlight.name}
                  className="w-36 h-36 rounded-full object-cover mb-4 shadow"
                />
                <h5 className="font-bold">{spotlight.name}</h5>
                <p className="text-sm text-gray-600 mb-3">{spotlight.role}</p>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  {spotlight.bio}
                </p>
                <button
                  onClick={() => openProfile(spotlight)}
                  className="px-4 py-2 rounded-full bg-pink-600 text-white font-medium hover:scale-105 transition"
                >
                  View Profile
                </button>
              </>
            )}
          </div>
        </section>

        {/* Faculty Grid / List */}
        <section className="mb-8">
          {view === "grid" ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((f) => (
                <div
                  key={f.id}
                  className="bg-white rounded-2xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition p-4 cursor-pointer"
                  onClick={() => openProfile(f)}
                >
                  <div className="relative">
                    <img
                      src={f.img}
                      alt={f.name}
                      className="w-full h-44 object-cover rounded-xl mb-4"
                    />
                    <div className="absolute top-3 left-3 bg-white/80 px-3 py-1 rounded-full text-sm font-medium">
                      {f.dept}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{f.name}</h3>
                  <p className="text-sm text-gray-600">{f.role}</p>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                    {f.bio}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={f.linkedin || "#"}
                      onClick={(e) => f.linkedin === "#" && e.preventDefault()}
                      className="p-2 rounded-full bg-gray-100 hover:bg-pink-600 hover:text-white transition"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <button className="ml-auto text-sm text-pink-600 font-medium">
                      View Profile →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((f) => (
                <div
                  key={f.id}
                  className="bg-white rounded-2xl shadow p-4 flex gap-4 items-center hover:shadow-2xl transition cursor-pointer"
                  onClick={() => openProfile(f)}
                >
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{f.name}</h3>
                      <div className="text-sm text-gray-500">• {f.dept}</div>
                    </div>
                    <p className="text-sm text-gray-600">{f.role}</p>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {f.bio}
                    </p>
                  </div>
                  <div className="text-right">
                    <button className="px-4 py-2 rounded-full bg-pink-600 text-white hover:scale-105 transition">
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Accordion: Faculty by Department */}
        {/* <section className="mb-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">
              Directory by Department
            </h3>

            <div className="space-y-3">
              {DEPARTMENTS.filter((d) => d !== "All").map((d) => (
                <DepartmentAccordion
                  key={d}
                  title={d}
                  members={faculty.filter((f) => f.dept === d)}
                  onOpen={openProfile}
                />
              ))}
            </div>
          </div>
        </section> */}

        {/* Achievements Carousel */}
        {/* <section className="mb-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Faculty Achievements</h3>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ACHIEVEMENTS.map((a, i) => (
                  <div
                    key={i}
                    className={`rounded-xl overflow-hidden shadow ${
                      i === carouselIndex ? "scale-100" : "opacity-60"
                    } transition`}
                  >
                    <img
                      src={a.img}
                      alt={a.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold">{a.title}</h4>
                      <p className="text-sm text-gray-600">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Testimonials */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Faculty Voices</h3>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <p className="text-lg italic text-gray-700">
                  “{TESTIMONIALS[testiIndex].text}”
                </p>
                <p className="mt-3 font-semibold">
                  {TESTIMONIALS[testiIndex].author}{" "}
                  <span className="text-sm text-gray-500">
                    • {TESTIMONIALS[testiIndex].role}
                  </span>
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setTestiIndex(
                      (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                    )
                  }
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    setTestiIndex((i) => (i + 1) % TESTIMONIALS.length)
                  }
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-20">
          <div className="rounded-3xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">
                Collaborate with Our Faculty
              </h3>
              <p className="text-white/90 mt-2">
                Research partnerships, guest lectures, and collaborative
                programs welcome.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => (window.location.href = "/contact")}
                className="px-6 py-3 bg-white text-pink-600 rounded-full font-semibold hover:scale-105 transition"
              >
                Contact Us
              </button>
              <button
                onClick={() => (window.location.href = "/research")}
                className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Profile Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative">
            <button
              onClick={closeProfile}
              className="absolute right-4 top-4 text-gray-500"
            >
              ✕
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selected.img}
                alt={selected.name}
                className="w-40 h-40 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold">{selected.name}</h2>
                <p className="text-sm text-gray-600">
                  {selected.role} • {selected.dept}
                </p>
                <p className="mt-4 text-gray-700">{selected.bio}</p>

                <div className="mt-4 flex gap-3 items-center">
                  <a
                    href={selected.linkedin || "#"}
                    className="px-3 py-2 rounded bg-gray-100 hover:bg-pink-600 hover:text-white transition"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${selected.email}`}
                    className="px-3 py-2 rounded bg-gray-100 hover:bg-pink-600 hover:text-white transition"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <div className="ml-auto text-sm text-gray-500">
                    {selected.awards?.length
                      ? selected.awards.join(" • ")
                      : "No awards listed"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ----------------------------- small subcomponents ---------------------------- */

function CounterCard({ number, label }: { number: number; label: string }) {
  return (
    <div className="text-center px-4 py-3">
      <div className="text-2xl font-extrabold">{number}</div>
      <div className="text-sm text-white/90">{label}</div>
    </div>
  );
}

function DepartmentAccordion({
  title,
  members,
  onOpen,
}: {
  title: string;
  members: Faculty[];
  onOpen: (f: Faculty) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full px-4 py-3 text-left flex items-center justify-between bg-white"
      >
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500">{members.length} members</div>
        </div>
        <div className="text-gray-400">{open ? "–" : "+"}</div>
      </button>

      <div className={`p-4 bg-gray-50 ${open ? "block" : "hidden"}`}>
        {members.length === 0 ? (
          <div className="text-sm text-gray-500">No members listed.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-3">
            {members.map((m) => (
              <div
                key={m.id}
                className="flex items-center gap-3 p-2 rounded hover:bg-white transition cursor-pointer"
                onClick={() => onOpen(m)}
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-gray-500">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
