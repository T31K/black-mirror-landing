"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function LuckyDrawPage() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState("");

  // Prize segments - Beer has larger percentage (4 segments), others have 2 each
  const prizes = [
    {
      name: "2 House Pour",
      subtitle: "Whiskey/Gin",
      color: "from-purple-600 to-purple-800",
    },
    {
      name: "2 Pint Beer",
      subtitle: "Draft Beer",
      color: "from-amber-600 to-amber-800",
    },
    {
      name: "2 House Pour",
      subtitle: "Whiskey/Gin",
      color: "from-purple-600 to-purple-800",
    },
    {
      name: "2 Pint Beer",
      subtitle: "Draft Beer",
      color: "from-amber-600 to-amber-800",
    },
    {
      name: "2 Glass Wine",
      subtitle: "Red/White",
      color: "from-pink-600 to-pink-800",
    },
    {
      name: "2 Pint Beer",
      subtitle: "Draft Beer",
      color: "from-amber-600 to-amber-800",
    },
    {
      name: "2 Glass Wine",
      subtitle: "Red/White",
      color: "from-pink-600 to-pink-800",
    },
    {
      name: "2 Pint Beer",
      subtitle: "Draft Beer",
      color: "from-amber-600 to-amber-800",
    },
  ];

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setWinner("");

    // Generate random spin (multiple full rotations + random angle)
    const spins = Math.floor(Math.random() * 5) + 5; // 5-10 full rotations
    const finalAngle = Math.floor(Math.random() * 360);
    const totalRotation = rotation + spins * 360 + finalAngle;

    setRotation(totalRotation);

    // Determine winner after spin completes
    setTimeout(() => {
      const normalizedAngle = (360 - (totalRotation % 360)) % 360;
      const segmentAngle = 360 / prizes.length;
      const winnerIndex = Math.floor(normalizedAngle / segmentAngle);
      setWinner(prizes[winnerIndex].name);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div id="main">
      <Navbar />

      <main className="relative pt-24 pb-12 lg:pt-28 xl:pt-32 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 min-h-screen">
        <section className="relative py-16 sm:py-20 lg:py-24 z-10">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl font-leckerli-one mb-6 tracking-wide ">
                Lucky Draw
              </h1>
              <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                {`Spin the wheel and win exclusive prizes!`}
              </p>
            </div>

            {/* Spinning Wheel Container */}
            <div className="flex flex-col items-center justify-center">
              {/* Wheel */}
              <div className="relative mb-12">
                {/* Pointer */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-20">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-white rotate-[180deg]"></div>
                </div>

                {/* Wheel SVG */}
                <div
                  className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl transition-transform duration-[3000ms] ease-out"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {prizes.map((prize, index) => {
                      const angle = (360 / prizes.length) * index;
                      const nextAngle = (360 / prizes.length) * (index + 1);

                      // Calculate path for each segment
                      const startAngle = (angle * Math.PI) / 180;
                      const endAngle = (nextAngle * Math.PI) / 180;

                      const x1 = 200 + 180 * Math.cos(startAngle);
                      const y1 = 200 + 180 * Math.sin(startAngle);
                      const x2 = 200 + 180 * Math.cos(endAngle);
                      const y2 = 200 + 180 * Math.sin(endAngle);

                      const largeArcFlag = nextAngle - angle > 180 ? 1 : 0;

                      const pathData = [
                        `M 200 200`,
                        `L ${x1} ${y1}`,
                        `A 180 180 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                        `Z`,
                      ].join(" ");

                      // Text position
                      const textAngle = (startAngle + endAngle) / 2;
                      const textX = 200 + 120 * Math.cos(textAngle);
                      const textY = 200 + 120 * Math.sin(textAngle);

                      return (
                        <g key={index}>
                          <defs>
                            <linearGradient
                              id={`gradient-${index}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor={
                                  prize.name.includes("Beer")
                                    ? "#f59e0b"
                                    : prize.name.includes("Wine")
                                    ? "#ef4444"
                                    : "#a855f7"
                                }
                              />
                              <stop
                                offset="100%"
                                stopColor={
                                  prize.name.includes("Beer")
                                    ? "#d97706"
                                    : prize.name.includes("Wine")
                                    ? "#dc2626"
                                    : "#7c3aed"
                                }
                              />
                            </linearGradient>
                          </defs>
                          <path
                            d={pathData}
                            fill={`url(#gradient-${index})`}
                            stroke="white"
                            strokeWidth="2"
                          />
                          <g
                            transform={`rotate(${
                              angle + 22.5
                            }, ${textX}, ${textY})`}
                          >
                            <text
                              x={textX}
                              y={textY - 8}
                              fill="white"
                              fontSize="12"
                              fontWeight="bold"
                              textAnchor="middle"
                              dominantBaseline="middle"
                              className="backdrop-blur-sm"
                            >
                              {prize.name}
                            </text>
                            <text
                              x={textX}
                              y={textY + 8}
                              fill="white"
                              fontSize="10"
                              textAnchor="middle"
                              dominantBaseline="middle"
                              className="backdrop-blur-sm"
                            >
                              {prize.subtitle}
                            </text>
                          </g>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Spin Button */}
              <button
                onClick={spinWheel}
                disabled={isSpinning}
                className={`px-12 py-4 text-xl font-bold rounded-full transition-all duration-300 transform ${
                  isSpinning
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white hover:scale-105 shadow-lg hover:shadow-xl"
                }`}
              >
                {isSpinning ? "Spinning..." : "SPIN THE WHEEL"}
              </button>

              {/* Winner Display */}
              {winner && (
                <div className="mt-12 text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-red-600 rounded-2xl p-8 shadow-2xl">
                    <h2 className="text-3xl font-bold text-white mb-4 font-leckerli-one">
                      🎉 Congratulations! 🎉
                    </h2>
                    <p className="text-2xl text-white font-semibold">
                      You won: <span className="text-yellow-300">{winner}</span>
                    </p>
                    <p className="text-sm text-gray-200 mt-4">
                      Show this screen to our staff to claim your prize!
                    </p>
                  </div>
                </div>
              )}

              {/* Rules */}
              <div className="mt-16 max-w-2xl text-center">
                <h3 className="text-2xl font-bold text-white mb-6 font-leckerli-one">
                  How to Play
                </h3>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                  <ul className="text-gray-300 space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">1)</span>
                      Click to start
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">2)</span>
                      Wait for wheel
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">3)</span>
                      Enter your particulars to receive e-vouchers to redeem
                    </li>
                  </ul>
                </div>
              </div>

              {/* Back to Home */}
              <div className="mt-12">
                <Link
                  href="/"
                  className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
