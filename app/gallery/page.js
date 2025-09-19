"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
      src: "/images/gallery/black_mirror_8.webp",
      alt: "Black Mirror Night View - Singapore nightlife destination",
      title: "Night View",
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
      src: "/images/gallery/black_mirror_9.webp",
      alt: "Black Mirror Additional View - Exclusive atmosphere",
      title: "Exclusive Space",
    },
    {
      src: "/images/gallery/black_mirror_10.webp",
      alt: "Black Mirror Additional View - Exclusive atmosphere",
      title: "Exclusive Space",
    },
    {
      src: "/images/gallery/black_mirror_11.webp",
      alt: "Black Mirror Additional View - Exclusive atmosphere",
      title: "Exclusive Space",
    },

    {
      src: "/images/gallery/black_mirror_12.webp",
      alt: "Black Mirror Additional View - Exclusive atmosphere",
      title: "Exclusive Space",
    },

    {
      src: "/images/gallery/black_mirror_13.webp",
      alt: "Black Mirror Additional View - Exclusive atmosphere",
      title: "Exclusive Space",
    },

    {
      src: "/images/gallery/black_mirror_14.webp",
      alt: "Black Mirror Additional View - Exclusive atmosphere",
      title: "Exclusive Space",
    },

    {
      src: "/images/gallery/black_mirror_15.webp",
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
              <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl font-leckerli-one mb-6">
                Gallery
              </h1>
              <p className="mt-4 text-sm text-gray-300 max-w-3xl mx-auto">
                {`Step inside Singapore's most exclusive nightlife destination.
                Experience the sophisticated atmosphere, immersive lighting, and
                luxury that defines Black Mirror.`}
              </p>
            </div>

            {/* Masonry Gallery */}
            <div className="columns-2 lg:columns-3 gap-8 space-y-8">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:shadow-2xl transition-all duration-500 cursor-pointer break-inside-avoid mb-8"
                  onClick={() => {
                    setSelectedImage(image);
                    setIsLightboxOpen(true);
                  }}
                >
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={0}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ height: "auto" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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
                  </div>

                  {/* Image counter */}
                  <div className="absolute backdrop-blur-sm bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
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
                  href="https://www.opentable.sg/r/black-mirror-reservations-singapore?restref=301505&lang=en-US&ot_source=Restaurant%20website"
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

      <Footer />
    </div>
  );
}
