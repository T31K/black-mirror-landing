"use client";

import { useState, useEffect } from "react";

const Calendar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Event data
  const events = [
    {
      date: "15 Aug",
      artist: "Kate",
      subtitle: "Special DJ",
      genre: "House Music",
      status: "open",
    },
    {
      date: "16 Aug",
      artist: "Joeru",
      subtitle: "Resident DJ",
      genre: "Electronic",
      status: "open",
    },
    {
      date: "17 Aug",
      artist: "Closed",
      subtitle: "",
      genre: "",
      status: "closed",
    },
    {
      date: "18 - 22 Aug",
      artist: "DJ Casey",
      subtitle: "Guest DJ",
      genre: "Progressive House",
      status: "open",
    },
    {
      date: "23 Aug",
      artist: "DJ Shaun Low",
      subtitle: "Guest DJ",
      genre: "Techno",
      status: "open",
    },
    {
      date: "24 Aug",
      artist: "Closed",
      subtitle: "",
      genre: "",
      status: "closed",
    },
    {
      date: "25 - 29 Aug",
      artist: "Kate",
      subtitle: "Special DJ",
      genre: "House Music",
      status: "open",
    },
    {
      date: "30 Aug",
      artist: "Nuttrix",
      subtitle: "Guest DJ",
      genre: "Progressive House / House Music",
      status: "open",
    },
    {
      date: "September",
      artist: "Kate",
      subtitle: "Weekday Resident DJ",
      genre: "House Music",
      status: "open",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!isClient) {
    return <div className="h-96 bg-gray-900 rounded-lg animate-pulse"></div>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Card Container */}
      <div className="relative h-96 perspective-1000">
        <div className="relative w-full h-full flex items-center justify-center">
          {events.map((event, index) => {
            const distance = Math.abs(index - currentIndex);
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % events.length;
            const isPrev =
              index === (currentIndex - 1 + events.length) % events.length;

            let transform = "";
            let opacity = 0.3;
            let zIndex = 1;

            if (isActive) {
              transform = "translateX(0) rotateY(0deg) scale(1)";
              opacity = 1;
              zIndex = 10;
            } else if (isNext) {
              transform = "translateX(280px) rotateY(-45deg) scale(0.8)";
              opacity = 0.7;
              zIndex = 5;
            } else if (isPrev) {
              transform = "translateX(-280px) rotateY(45deg) scale(0.8)";
              opacity = 0.7;
              zIndex = 5;
            } else if (distance <= 2) {
              const direction = index > currentIndex ? 1 : -1;
              transform = `translateX(${direction * 400}px) rotateY(${
                -direction * 60
              }deg) scale(0.6)`;
              opacity = 0.4;
              zIndex = 2;
            } else {
              transform = "translateX(0) rotateY(0deg) scale(0.4)";
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div
                key={index}
                className="absolute w-80 h-80 transition-all duration-700 ease-out cursor-pointer transform-gpu"
                style={{
                  transform,
                  opacity,
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
                onClick={() => goToSlide(index)}
              >
                <div
                  className={`w-full h-full rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-2xl backdrop-blur-sm border transition-all duration-300 ${
                    event.status === "closed"
                      ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600"
                      : "bg-gradient-to-br from-purple-900/80 to-black/90 border-purple-800/50 hover:border-purple-600/70"
                  }`}
                >
                  {event.status === "closed" ? (
                    <>
                      <div className="text-6xl mb-4 opacity-50">🚫</div>
                      <h3 className="text-3xl font-bold text-gray-400 mb-2 font-theo">
                        {event.date}
                      </h3>
                      <p className="text-xl text-gray-500 font-semibold">
                        CLOSED
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="text-5xl mb-4">🎧</div>
                      <h3 className="text-2xl font-bold text-white mb-2 font-theo">
                        {event.date}
                      </h3>
                      <h4 className="text-xl font-semibold text-purple-300 mb-2">
                        {event.artist}
                      </h4>
                      {event.subtitle && (
                        <p className="text-sm text-gray-300 mb-3 font-medium">
                          {event.subtitle}
                        </p>
                      )}
                      {event.genre && (
                        <div className="bg-purple-800/30 px-3 py-1 rounded-full">
                          <p className="text-xs text-purple-200 font-medium">
                            {event.genre}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm border border-purple-800/50 hover:border-purple-600"
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
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm border border-purple-800/50 hover:border-purple-600"
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

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2 hidden">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-purple-500 scale-125"
                : "bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
