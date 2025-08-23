"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!isLightboxOpen) return;

    if (e.key === "Escape") {
      setIsLightboxOpen(false);
    } else if (e.key === "ArrowLeft") {
      const currentIndex = galleryImages.findIndex(
        (img) => img.src === selectedImage.src
      );
      const prevIndex =
        currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
      setSelectedImage(galleryImages[prevIndex]);
    } else if (e.key === "ArrowRight") {
      const currentIndex = galleryImages.findIndex(
        (img) => img.src === selectedImage.src
      );
      const nextIndex =
        currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(galleryImages[nextIndex]);
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, selectedImage]);

  const galleryImages = [
    {
      src: "/images/gallery/black_mirror_1.webp",
      alt: "Black Mirror Interior - Sophisticated nightclub atmosphere",
      title: "Main Interior",
    },
    {
      src: "/images/gallery/black_mirror_2.webp",
      alt: "Black Mirror Bar - Premium cocktail experience",
      title: "Premium Bar",
    },
    {
      src: "/images/gallery/black_mirror_3.webp",
      alt: "Black Mirror DJ Booth - World-class sound system",
      title: "DJ Booth",
    },
    {
      src: "/images/gallery/black_mirror_4.webp",
      alt: "Black Mirror VIP Area - Exclusive seating",
      title: "VIP Lounge",
    },
    {
      src: "/images/gallery/black_mirror_5.webp",
      alt: "Black Mirror Dance Floor - Immersive lighting",
      title: "Dance Floor",
    },
    {
      src: "/images/gallery/black_mirror_6.webp",
      alt: "Black Mirror Lounge - Luxury seating area",
      title: "Luxury Lounge",
    },
    {
      src: "/images/gallery/black_mirror_7.webp",
      alt: "Black Mirror Entrance - Sleek modern design",
      title: "Entrance",
    },
    {
      src: "/images/gallery/black_mirror_8.webp",
      alt: "Black Mirror Night View - Singapore nightlife destination",
      title: "Night View",
    },
    {
      src: "/images/gallery/black_mirror_9.webp",
      alt: "Black Mirror Additional View - Exclusive atmosphere",
      title: "Exclusive Space",
    },
  ];

  return (
    <div id="main">
      <Navbar />

      <main className="relative pt-24 pb-12 lg:pt-28 xl:pt-32 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 min-h-screen">
        {/* Gallery Header */}
        <section className="relative py-16 sm:py-20 lg:py-24 z-10">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl font-theo mb-6">
                Gallery
              </h1>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                Step inside Singapore's most exclusive nightlife destination.
                Experience the sophisticated atmosphere, immersive lighting, and
                luxury that defines Black Mirror.
              </p>
            </div>

            {/* Full Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => {
                    setSelectedImage(image);
                    setIsLightboxOpen(true);
                  }}
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Image Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-lg">
                        {image.title}
                      </h3>
                    </div>

                    {/* Click to view indicator */}
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && selectedImage && (
              <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                <div className="relative max-w-6xl max-h-full">
                  {/* Close button */}
                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Navigation buttons */}
                  <button
                    onClick={() => {
                      const currentIndex = galleryImages.findIndex(
                        (img) => img.src === selectedImage.src
                      );
                      const prevIndex =
                        currentIndex === 0
                          ? galleryImages.length - 1
                          : currentIndex - 1;
                      setSelectedImage(galleryImages[prevIndex]);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => {
                      const currentIndex = galleryImages.findIndex(
                        (img) => img.src === selectedImage.src
                      );
                      const nextIndex =
                        currentIndex === galleryImages.length - 1
                          ? 0
                          : currentIndex + 1;
                      setSelectedImage(galleryImages[nextIndex]);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Image */}
                  <div className="relative">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      width={800}
                      height={600}
                      className="max-w-full max-h-[80vh] object-contain rounded-lg"
                    />

                    {/* Image info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                      <h3 className="text-white font-semibold text-xl mb-2">
                        {selectedImage.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {selectedImage.alt}
                      </p>
                    </div>
                  </div>

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                    {galleryImages.findIndex(
                      (img) => img.src === selectedImage.src
                    ) + 1}{" "}
                    of {galleryImages.length}
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-20">
              <p className="text-xl text-gray-300 mb-8">
                Ready to experience Black Mirror?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#book-now"
                  className="inline-flex items-center px-8 py-4 text-base font-medium text-black bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
                >
                  Make Reservation
                </Link>
                <Link
                  href="/#events"
                  className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
                >
                  View Events
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-transparent">
        {/* Curvy top border using SVG */}
        <div className="relative">
          <svg
            className="w-full h-24 fill-gray-950"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C300,120 600,120 900,60 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>

        {/* Footer content */}
        <div className="bg-gray-950 text-red-900 px-8 py-12 -mt-1">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Location Section */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif mb-4 relative text-white inline-block font-canterbury">
                  Location
                </h3>
                <div className="space-y-2 text-base">
                  <p className="font-medium text-white">
                    {`9 Raffles Boulevard #02-08/09`}
                    <br />
                    {`Millenia Walk, Singapore 088444`}
                  </p>
                </div>
              </div>

              {/* Hours Section */}
              <div className="text-center">
                <h3 className="text-2xl font-serif mb-4 relative inline-block text-white font-canterbury">
                  Hours
                </h3>
                <div className="space-y-2 text-base">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">
                      Monday to Friday
                    </span>
                    <span className="text-gray-300">12–2pm, 5:30pm–1am</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Friday</span>
                    <span className="text-gray-300">12–2pm, 5:30pm–2am</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Saturday</span>
                    <span className="text-gray-300">9:30pm–3am</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-serif mb-4 relative inline-block text-white font-canterbury">
                  Contact
                </h3>
                <div className="space-y-2 text-base">
                  <p className="underline decoration-white text-white">
                    events@blackmirror.sg
                  </p>
                  <p className="font-medium text-white">+65 9325 1818</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
