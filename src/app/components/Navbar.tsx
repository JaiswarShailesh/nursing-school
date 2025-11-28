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
  PhoneCall,
  Mail,
} from "lucide-react";

/* -------------------------------------------
   TYPES
------------------------------------------- */

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

/* -------------------------------------------
   NAV DATA (from user)
------------------------------------------- */

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  {
    label: "Faculty",
    children: [
      {
        label: "Head of Departments",
        children: [
          {
            label: "Medical Surgical Nursing",
            href: "/campus/labs/laboratory",
          },
          { label: "Mental Health Nursing", href: "/campus/labs/anatomy" },
          {
            label: "Obstetrical and Gynaecological Nursing",
            href: "/campus/labs/physiology",
          },
          { label: "Fundamentals of Nursing", href: "/campus/labs/nutrition" },
          { label: "Child Health Nursing", href: "/campus/labs/computer" },
          { label: "Community Health Nursing", href: "/campus/labs/skill" },
        ],
      },
      {
        label: "Clinical Instructors",
        href: "/academic-programs/general-nursing-and-midwifery",
      },
    ],
  },
  { label: "Admission", href: "/admission" },
  {
    label: "Programs",
    children: [
      {
        label: "General Nursing & Midwifery",
        href: "/academic-programs/general-nursing-and-midwifery",
      },
      { label: "B.Sc Nursing", href: "/academic-programs/bsc-nursing" },
    ],
  },
  {
    label: "Campus Facilities",
    children: [
      { label: "Library", href: "/campus-facilities/library" },
      {
        label: "Labs",
        href: "/campus-facilities/labs",
      },
    ],
  },
  {
    label: "Students",
    children: [
      {
        label: "Sports/NCC/NSS",
        href: "/students/sports-ncc-nss",
      },
      {
        label: "Hostel",
        href: "/students/sports-ncc-nss",
      },
      {
        label: "Student Grievance Redressal",
        href: "/students/sports-ncc-nss",
      },
      {
        label: "Health Facilities",
        href: "/students/sports-ncc-nss",
      },
      {
        label: "Complaint Committee",
        href: "/students/sports-ncc-nss",
      },
      {
        label: "Anti-Ragging cell",
        href: "/students/sports-ncc-nss",
      },
      {
        label: "Placement Cell",
        href: "/students/sports-ncc-nss",
      },
    ],
  },
  {
    label: "Community",
    children: [
      {
        label: "Photo Gallery",
        href: "/students/sports-ncc-nss",
      },
      {
        label: "News & Events",
        href: "/students/sports-ncc-nss",
      },
      {
        label: "Announcments",
        href: "/students/sports-ncc-nss",
      },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // openPath holds indices: { main: number|null, second: number|null, third: number|null }
  const [openPath, setOpenPath] = useState<{
    main: number | null;
    second: number | null;
    third: number | null;
  }>({ main: null, second: null, third: null });

  // refs
  const navRef = useRef<HTMLElement | null>(null);
  const scrollYRef = useRef(0);
  const lockedRef = useRef(false);

  // mount detection
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /* -------------------------------------------
     Scroll detection
  ------------------------------------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------------------------------------------
     Body scroll lock
  ------------------------------------------- */
  const lockBodyScroll = () => {
    if (lockedRef.current) return;

    scrollYRef.current = window.scrollY || 0;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    lockedRef.current = true;
  };

  const unlockBodyScroll = () => {
    if (!lockedRef.current) return;

    const y = scrollYRef.current;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    setTimeout(() => window.scrollTo(0, y), 0);

    lockedRef.current = false;
  };

  useEffect(() => {
    if (open) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }

    return () => {
      if (lockedRef.current) {
        unlockBodyScroll();
      }
    };
  }, [open]);

  /* -------------------------------------------
     Close on ESC
  ------------------------------------------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* -------------------------------------------
     Outside click to close all menus
  ------------------------------------------- */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenPath({ main: null, second: null, third: null });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* -------------------------------------------
     Dropdown control helpers
  ------------------------------------------- */
  const toggleMain = (mainIndex: number) => {
    setOpenPath((prev) => {
      if (prev.main === mainIndex)
        return { main: null, second: null, third: null };
      return { main: mainIndex, second: null, third: null };
    });
  };

  const toggleSecond = (secondIndex: number) => {
    setOpenPath((prev) => {
      if (prev.main === null) return prev;
      if (prev.second === secondIndex)
        return { ...prev, second: null, third: null };
      return { ...prev, second: secondIndex, third: null };
    });
  };

  const toggleThird = (thirdIndex: number) => {
    setOpenPath((prev) => {
      if (prev.main === null || prev.second === null) return prev;
      return { ...prev, third: prev.third === thirdIndex ? null : thirdIndex };
    });
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-40 transition-all ${
        scrolled ? "backdrop-blur-md bg-white/90 shadow-md" : "bg-white/80"
      }`}
    >
      {/* TOPBAR */}
      <div className="hidden md:flex justify-between items-center px-4 md:px-8 py-2 bg-pink-600 text-white text-sm">
        <div className="flex items-center gap-4">
          <div className="font-medium flex items-center">
            <PhoneCall className="w-4 mr-2" />
            <span>+91 12345 67890</span>
          </div>
          <div className="font-medium flex items-center">
            <Mail className="w-4 mr-2" />
            <span>info@nursingcollege.edu</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/career" className="text-xs hover:underline">
            Career
          </Link>
          <Link href="/contact-us" className="text-xs hover:underline">
            Contact Us
          </Link>
          <Facebook className="w-4 h-4 cursor-pointer" />
          <Instagram className="w-4 h-4 cursor-pointer" />
          <Linkedin className="w-4 h-4 cursor-pointer" />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/nursing_logo.png"
            alt="Nursing College logo"
            className="sm:h-11 md:h-9 lg:h-6 xl:h-11"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-gray-800 text-sm">
            {NAV_ITEMS.map((item, i) =>
              item.href ? (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="relative after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300"
                    onClick={() =>
                      setOpenPath({ main: null, second: null, third: null })
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li
                  key={i}
                  className="relative after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {/* Main button */}
                  <button
                    className="cursor-pointer flex items-center gap-1"
                    onClick={() => toggleMain(i)}
                    aria-expanded={openPath.main === i}
                    aria-controls={`main-dropdown-${i}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openPath.main === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* FIRST LEVEL DROPDOWN */}
                  {openPath.main === i && (
                    <ul
                      id={`main-dropdown-${i}`}
                      className="absolute left-0 mt-3 w-48 p-3 bg-white rounded-xl shadow-lg text-gray-700 z-50"
                    >
                      {item.children?.map((sub, j) =>
                        sub.href ? (
                          <li
                            key={j}
                            className="py-2 px-2 hover:bg-pink-50 hover:text-pink-600 transition"
                          >
                            <Link
                              href={sub.href}
                              onClick={() =>
                                setOpenPath({
                                  main: null,
                                  second: null,
                                  third: null,
                                })
                              }
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ) : (
                          <li
                            key={j}
                            className="py-2 px-2 hover:bg-pink-50 hover:text-pink-600 transition relative"
                          >
                            {/* second-level button */}
                            <button
                              className="w-full flex items-center justify-between gap-2"
                              onClick={() => toggleSecond(j)}
                              aria-expanded={
                                openPath.second === j && openPath.main === i
                              }
                              aria-controls={`second-dropdown-${i}-${j}`}
                            >
                              <span className="text-left">{sub.label}</span>
                              <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${
                                  openPath.second === j && openPath.main === i
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                            {/* SECOND LEVEL DROPDOWN (flyout) */}
                            {openPath.second === j && openPath.main === i && (
                              <ul
                                id={`second-dropdown-${i}-${j}`}
                                className="absolute left-44 top-0 mt-3 w-48 p-3 bg-white rounded-xl shadow-lg z-50"
                              >
                                {sub.children?.map((third, k) => (
                                  <li
                                    key={k}
                                    className="py-2 px-2 hover:bg-pink-50 hover:text-pink-600 transition text-gray-700"
                                  >
                                    <Link
                                      href={third.href!}
                                      onClick={() =>
                                        setOpenPath({
                                          main: null,
                                          second: null,
                                          third: null,
                                        })
                                      }
                                    >
                                      {third.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>
        </div>

        {/* RIGHT CTAS */}
        <div className="flex items-center gap-3">
          <a
            href="/admission"
            className="hidden md:inline-block px-4 py-2 rounded-full bg-pink-500 text-white text-sm"
          >
            Apply Now
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="p-2 rounded-md lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <aside className="fixed right-0 top-0 h-screen w-11/12 max-w-sm bg-white shadow-xl flex flex-col">
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
                className="p-1 rounded hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              <nav className="flex flex-col gap-3 text-gray-800">
                {NAV_ITEMS.map((item, i) =>
                  item.href ? (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="py-2 border-b"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div key={i}>
                      <button
                        onClick={() => toggleMain(i)}
                        className="w-full flex items-center justify-between py-2 border-b"
                        aria-expanded={openPath.main === i}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openPath.main === i ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openPath.main === i &&
                        item.children?.map((c, j) =>
                          c.href ? (
                            <Link
                              key={j}
                              href={c.href ?? "#"}
                              onClick={() => setOpen(false)}
                              className="block py-2 pl-4"
                            >
                              - {c.label}
                            </Link>
                          ) : (
                            <div key={j}>
                              <button
                                onClick={() => toggleSecond(j)}
                                className="w-full flex items-center justify-between py-2 pl-4"
                                aria-expanded={
                                  openPath.second === j && openPath.main === i
                                }
                              >
                                <span>{c.label}</span>
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform ${
                                    openPath.second === j && openPath.main === i
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>

                              {openPath.second === j &&
                                openPath.main === i &&
                                c.children?.map((third, k) => (
                                  <Link
                                    key={k}
                                    href={third.href!}
                                    onClick={() => setOpen(false)}
                                    className="block py-2 pl-8"
                                  >
                                    - {third.label}
                                  </Link>
                                ))}
                            </div>
                          )
                        )}
                    </div>
                  )
                )}

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

            <div className="p-6 border-t">
              <a
                href="/admission"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-4 py-2 rounded-full bg-pink-500 text-white font-medium"
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
