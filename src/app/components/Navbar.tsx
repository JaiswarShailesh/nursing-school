"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Faculty", href: "/faculty" },
  { label: "Admission", href: "/admission" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // refs for scroll-lock
  const scrollYRef = useRef(0);
  const lockedRef = useRef(false);

  // detect scroll to style header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // robust lock / unlock functions
  const lockBodyScroll = () => {
    if (typeof window === "undefined") return;
    if (lockedRef.current) return;

    // store current scroll
    scrollYRef.current = window.scrollY || window.pageYOffset || 0;

    // apply fixed positioning to body so the page visually freezes
    // and we can still show the drawer at full-screen height.
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    lockedRef.current = true;
  };

  const unlockBodyScroll = () => {
    if (typeof window === "undefined") return;
    if (!lockedRef.current) return;

    // read stored scrollY and restore
    const y = scrollYRef.current;

    // remove the styles we added
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    // restore scroll position (use setTimeout 0 to ensure style removed before scroll)
    window.setTimeout(() => {
      window.scrollTo(0, y);
    }, 0);

    lockedRef.current = false;
  };

  // toggle lock when `open` changes. Also ensure cleanup on unmount.
  useEffect(() => {
    if (open) lockBodyScroll();
    else unlockBodyScroll();

    return () => {
      // if component unmounts while locked, ensure we unlock
      if (lockedRef.current) unlockBodyScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all ${
        scrolled ? "backdrop-blur-md bg-white/90 shadow-md" : "bg-white/80"
      }`}
    >
      {/* Topbar (hidden on small screens) */}
      <div className="hidden md:flex justify-between items-center px-4 md:px-8 py-2 bg-pink-600 text-white text-sm">
        <div className="flex items-center gap-4">
          <span className="font-medium">📞 +91 12345 67890</span>
          <span className="opacity-90">|</span>
          <span>✉️ info@nursingcollege.edu</span>
        </div>

        <div className="flex items-center gap-3">
          <a aria-label="facebook" className="hover:scale-110 transition">
            <Facebook className="w-4 h-4" />
          </a>
          <a aria-label="instagram" className="hover:scale-110 transition">
            <Instagram className="w-4 h-4" />
          </a>
          <a aria-label="linkedin" className="hover:scale-110 transition">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/nursing_logo.png"
              alt="Nursing College logo"
              className="sm:h-11 md:h-9 lg:h-6 xl:h-11"
            />
            <span className="sr-only">Nursing & Medical College</span>
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-gray-800 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* Programs dropdown (desktop) */}
            <li className="relative group">
              <details className="group">
                <summary className="cursor-pointer flex items-center gap-1 text-gray-800 hover:text-pink-500 transition-colors relative after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300 list-none">
                  Academic Programs
                  {mounted && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-open:rotate-180"
                    />
                  )}
                </summary>

                <ul className="absolute left-0 mt-3 w-48 p-3 bg-white rounded-xl shadow-lg text-gray-700 opacity-0 invisible group-open:opacity-100 group-open:visible translate-y-2 group-open:translate-y-0 transition-all duration-300 ease-out z-50">
                  <li className="py-2 px-2 rounded-md hover:bg-pink-50 hover:text-pink-600 transition">
                    <Link href="/academic-programs/general-nursing-and-midwifery">
                      General Nursing & Midwifery
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Community */}
            <li className="relative group">
              <details className="group">
                <summary className="cursor-pointer flex items-center gap-1 text-gray-800 hover:text-pink-500 transition-colors relative after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300 list-none">
                  Community
                  {mounted && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-open:rotate-180"
                    />
                  )}
                </summary>

                <ul className="absolute left-0 mt-3 w-48 p-3 bg-white rounded-xl shadow-lg text-gray-700 opacity-0 invisible group-open:opacity-100 group-open:visible translate-y-2 group-open:translate-y-0 transition-all duration-300 ease-out z-50">
                  <li className="py-2 px-2 rounded-md hover:bg-pink-50 hover:text-pink-600 transition">
                    <Link href="/photo-gallery">Photo Gallery</Link>
                  </li>
                  <li className="py-2 px-2 rounded-md hover:bg-pink-50 hover:text-pink-600 transition">
                    <Link href="/news-events">News & Events</Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link
                href="/careers"
                className="relative after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="relative after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side: CTA + mobile menu button */}
        <div className="flex items-center gap-3">
          <a
            href="/admission"
            className="hidden md:inline-block px-4 py-2 rounded-full bg-pink-500 text-white font-medium shadow hover:bg-pink-600 transition text-sm"
          >
            Apply Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="p-2 rounded-md lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile slide-over menu (overlay + full-height drawer) */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" aria-hidden={!open}>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          {/* Drawer: fixed so it always covers viewport regardless of scroll */}
          <aside
            className="fixed right-0 top-0 h-screen w-11/12 max-w-sm bg-white shadow-xl flex flex-col transform transition-transform duration-300"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <img
                  src="/images/nursing_logo.png"
                  alt="logo"
                  className="h-9"
                />
              </Link>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-1 rounded hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable nav area */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <nav className="flex flex-col gap-3 text-gray-800">
                {LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-2 border-b"
                  >
                    {l.label}
                  </Link>
                ))}

                {/* Programs (mobile) */}
                <div>
                  <button
                    onClick={() => setProgramsOpen((s) => !s)}
                    className="w-full flex items-center justify-between py-2 border-b"
                    aria-expanded={programsOpen}
                  >
                    <span>Academic Programs</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        programsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {programsOpen && (
                    <div className="pl-4 pt-2">
                      <Link
                        href="/academic-programs/general-nursing-and-midwifery"
                        onClick={() => setOpen(false)}
                        className="block py-2"
                      >
                        - General Nursing & Midwifery
                      </Link>
                    </div>
                  )}
                </div>

                {/* Community (mobile) */}
                <div>
                  <button
                    onClick={() => setCommunityOpen((s) => !s)}
                    className="w-full flex items-center justify-between py-2 border-b"
                    aria-expanded={communityOpen}
                  >
                    <span>Community</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        communityOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {communityOpen && (
                    <div className="pl-4 pt-2">
                      <Link
                        href="/photo-gallery"
                        onClick={() => setOpen(false)}
                        className="block py-2"
                      >
                        - Photo Gallery
                      </Link>
                      <Link
                        href="/news-events"
                        onClick={() => setOpen(false)}
                        className="block py-2"
                      >
                        - News & Events
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/careers"
                  onClick={() => setOpen(false)}
                  className="py-2 border-b"
                >
                  Careers
                </Link>
                <Link
                  href="/contact-us"
                  onClick={() => setOpen(false)}
                  className="py-2 border-b"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Bottom CTAs (stick to bottom) */}
            <div className="p-6 border-t">
              <a
                href="/admission"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-4 py-2 rounded-full bg-pink-500 text-white font-medium shadow"
              >
                Apply Now
              </a>
              <a
                href="/academic-programs"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-4 py-2 rounded-full mt-3 border"
              >
                Explore Courses
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
