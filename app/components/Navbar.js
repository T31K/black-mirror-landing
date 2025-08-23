"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-stone-900">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex flex-shrink-0">
            <Link
              href="/"
              title="Black Mirror"
              className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-red-900"
            >
              <span className="font-canterbury text-2xl lg:text-3xl text-white font-bold tracking-tight">
                BM
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 -m-2 transition-all duration-200 rounded-full text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-red-900"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
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
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
            <Link
              href="/"
              className=" text-sm xl:text-base font-medium text-white hover:text-purple-400 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/menu.pdf"
              className=" text-sm xl:text-base font-medium text-white hover:text-purple-400 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
            >
              Menu
            </Link>
            <Link
              href="/events"
              className=" text-sm xl:text-base font-medium text-white hover:text-purple-400 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
            >
              Events
            </Link>
            <Link
              href="/gallery"
              className="text-sm xl:text-base font-medium text-white hover:text-purple-400 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
            >
              Gallery
            </Link>
            <Link
              href="/reservation"
              className="text-sm xl:text-base font-medium text-white hover:text-purple-400 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="text-sm xl:text-base font-medium text-white hover:text-purple-400 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
            >
              Contact
            </Link>
            <Link
              href="/faqs"
              className="text-sm xl:text-base font-medium text-white hover:text-purple-400 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
            >
              FAQs
            </Link>

            {/* Instagram Icon */}
            <Link
              href="#"
              className="ml-4 p-2 text-white hover:text-purple-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
