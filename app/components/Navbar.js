"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  FileText,
  Image,
  Calendar,
  HelpCircle,
  Instagram,
  MapPin,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 max-w-sm md:max-w-6xl bg-black/20 mx-auto mt-4 backdrop-blur-sm border border-gray-200/30 rounded-full ">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between h-12 lg:h-20">
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
                onClick={toggleMenu}
                className="p-2 -m-2 transition-all duration-200 rounded-full text-white"
              >
                <div className="w-4 h-4 relative">
                  {/* Top line */}
                  <span
                    className={`absolute left-0 top-0.5 w-4 h-0.5 bg-white transition-all duration-300 transform origin-center ${
                      isMenuOpen ? "rotate-45 translate-y-1.5" : "rotate-0"
                    }`}
                  />
                  {/* Middle line */}
                  <span
                    className={`absolute left-0 top-2 w-4 h-0.5 bg-white transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  {/* Bottom line */}
                  <span
                    className={`absolute left-0 top-3.5 w-4 h-0.5 bg-white transition-all duration-300 transform origin-center ${
                      isMenuOpen ? "-rotate-45 -translate-y-1.5" : "rotate-0"
                    }`}
                  />
                </div>
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
                href="/faqs"
                className="text-sm xl:text-base font-medium text-white hover:text-purple-400 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                FAQs
              </Link>

              {/* Instagram Icon */}
              <Link
                href="https://www.instagram.com/sgblackmirror/"
                target="_blank"
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 lg:hidden transition-opacity duration-300  z-[222] ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 backdrop-blur-sm"
          onClick={closeMenu}
        />
        {/* Mobile Menu Sheet */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-sm bg-black/90 backdrop-blur-md border-l border-gray-200/30 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            onClick={toggleMenu}
            className="absolute top-8 right-8 p-2 -m-2 transition-all duration-200 rounded-full text-white"
          >
            <div className="w-4 h-4 relative">
              {/* Top line */}
              <span
                className={`absolute left-0 top-0.5 w-4 h-0.5 bg-white transition-all duration-300 transform origin-center ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : "rotate-0"
                }`}
              />
              {/* Middle line */}
              <span
                className={`absolute left-0 top-2 w-4 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Bottom line */}
              <span
                className={`absolute left-0 top-3.5 w-4 h-0.5 bg-white transition-all duration-300 transform origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : "rotate-0"
                }`}
              />
            </div>
          </button>
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center space-x-3 text-lg font-medium text-white hover:text-purple-400 transition-colors duration-200 border-b border-gray-700/50 pb-4"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link
                href="/menu.pdf"
                onClick={closeMenu}
                className="flex items-center space-x-3 text-lg font-medium text-white hover:text-purple-400 transition-colors duration-200 border-b border-gray-700/50 pb-4"
              >
                <FileText className="w-5 h-5" />
                <span>Menu</span>
              </Link>
              <Link
                href="/events"
                onClick={closeMenu}
                className="flex items-center space-x-3 text-lg font-medium text-white hover:text-purple-400 transition-colors duration-200 border-b border-gray-700/50 pb-4"
              >
                <Calendar className="w-5 h-5" />
                <span>Events</span>
              </Link>
              <Link
                href="/gallery"
                onClick={closeMenu}
                className="flex items-center space-x-3 text-lg font-medium text-white hover:text-purple-400 transition-colors duration-200 border-b border-gray-700/50 pb-4"
              >
                <Image className="w-5 h-5" />
                <span>Gallery</span>
              </Link>
              <Link
                href="/reservation"
                onClick={closeMenu}
                className="flex items-center space-x-3 text-lg font-medium text-white hover:text-purple-400 transition-colors duration-200 border-b border-gray-700/50 pb-4"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Now</span>
              </Link>
              <Link
                href="/faqs"
                onClick={closeMenu}
                className="flex items-center space-x-3 text-lg font-medium text-white hover:text-purple-400 transition-colors duration-200 border-b border-gray-700/50 pb-4"
              >
                <HelpCircle className="w-5 h-5" />
                <span>FAQs</span>
              </Link>

              {/* Instagram Link in Mobile Menu */}
              <Link
                href="https://www.instagram.com/sgblackmirror/"
                target="_blank"
                onClick={closeMenu}
                className="flex items-center space-x-3 text-lg font-medium text-white hover:text-purple-400 transition-colors duration-200 border-b border-gray-700/50 pb-4"
              >
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </Link>

              <Link
                href="https://www.instagram.com/sgblackmirror/"
                target="_blank"
                className="flex items-center space-x-3 text-md font-medium text-white hover:text-purple-400 transition-colors duration-200 pb-4"
              >
                <MapPin className="w-6 h-6" />
                <span>
                  Millenia Walk
                  <br />
                  9 Raffles Boulevard
                  <br />
                  #02-08/09, S039596
                  <br />
                  (Situated at Nihon Street)
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
