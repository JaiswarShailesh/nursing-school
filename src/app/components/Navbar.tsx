import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Topbar */}
      {/* <div className="flex justify-between items-center px-6 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
        <img src="/images/nursing_logo.png" alt="Logo" className="h-12" />
        <div className="flex gap-2">
          <a className="btn btn-sm btn-circle bg-white/20 hover:bg-white/30 border-0">
            <Facebook className="w-4 h-4" />
          </a>
          <a className="btn btn-sm btn-circle bg-white/20 hover:bg-white/30 border-0">
            <Instagram className="w-4 h-4" />
          </a>
          <a className="btn btn-sm btn-circle bg-white/20 hover:bg-white/30 border-0">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div> */}

      {/* Navbar */}
      <div className="navbar bg-white shadow-md px-6">
        <img
          src="/images/nursing_logo.png"
          alt="Logo"
          className="h-12 hidden md:block"
        />
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-white p-2 shadow text-gray-800"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <a>Faculty</a>
              </li>
              <li>
                <a>Admission</a>
              </li>
              <li>
                <details>
                  <summary>Academic Programs</summary>
                  <ul className="p-2 text-sm">
                    <li>
                      <a>General Nursing & Midwifery</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Research & Innovation</summary>
                  <ul className="p-2 text-sm">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <img
            src="/images/nursing_logo.png"
            alt="Logo"
            className="h-10 md:hidden"
          />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-800 font-medium">
            <li>
              <Link href="/" className="hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-pink-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faculty" className="hover:text-pink-500">
                Faculty
              </Link>
            </li>
            <li>
              <Link href="/admission" className="hover:text-pink-500">
                Admission
              </Link>
            </li>
            <li>
              <details>
                <summary className="hover:text-pink-500">
                  Academic Programs
                </summary>
                <ul className="p-2 bg-white rounded-md shadow text-gray-800">
                  <li>
                    <Link href="/academic-programs/general-nursing-and-midwifery">
                      General Nursing & Midwifery
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="hover:text-pink-500">
                  Research & Innovation
                </summary>
                <ul className="p-2 bg-white rounded-md shadow text-gray-800">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-pink-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
