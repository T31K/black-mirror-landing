"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ReservationForm from "../components/ReservationForm";
import Link from "next/link";
import axios from "axios";

export default function LuckyDrawPage() {
  const [currentStep, setCurrentStep] = useState(1); // 1: Spin, 2: Form, 3: Success
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasPlayedToday, setHasPlayedToday] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const today = new Date().toDateString();
    const lastPlayed = localStorage.getItem("luckySpinLastPlayed");
    const lastPlayedData = localStorage.getItem("luckySpinData");

    if (lastPlayed === today && lastPlayedData) {
      const data = JSON.parse(lastPlayedData);
      setHasPlayedToday(true);
      setWinner(data.winner);
      setFormData(data.formData);
      setCurrentStep(3);
    }
  }, []);

  // Updated prize segments with more color variety
  const prizes = [
    {
      name: "2 House Pour",
      subtitle: "Gin/Whiskey",
      colorIndex: 0,
    },
    {
      name: "2 Pint Beer",
      subtitle: "Sapporo Draught",
      colorIndex: 1,
    },
    {
      name: "2 House Pour",
      subtitle: "Gin/Whiskey",
      colorIndex: 2,
    },
    {
      name: "2 Pint Beer",
      subtitle: "Sapporo Draught",
      colorIndex: 3,
    },
    {
      name: "2 House Pour",
      subtitle: "Gin/Whiskey",
      colorIndex: 4,
    },
    {
      name: "2 Pint Beer",
      subtitle: "Sapporo Draught",
      colorIndex: 5,
    },
    {
      name: "2 House Pour",
      subtitle: "Gin/Whiskey",
      colorIndex: 6,
    },
    {
      name: "2 Pint Beer",
      subtitle: "Sapporo Draught",
      colorIndex: 7,
    },
  ];

  // More varied color palette - purples, pinks, blue-purples
  const colorShades = [
    { start: "#581c87", end: "#4c1d95" }, // Deep purple
    { start: "#be185d", end: "#9f1239" }, // Deep pink
    { start: "#7c3aed", end: "#6d28d9" }, // Purple
    { start: "#3730a3", end: "#312e81" }, // Blue-purple
    { start: "#c026d3", end: "#a21caf" }, // Magenta
    { start: "#5b21b6", end: "#4c1d95" }, // Purple-indigo
    { start: "#db2777", end: "#be185d" }, // Pink
    { start: "#4338ca", end: "#3730a3" }, // Indigo-blue
  ];

  const spinWheel = () => {
    if (isSpinning || hasPlayedToday) return;

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
      setCurrentStep(2); // Move to form step
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Lucky Spin API function
  const submitLuckySpin = async (formData, prize) => {
    try {
      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        prize: prize,
        timestamp: new Date().toISOString(),
        serial_number: Array.from(
          { length: 8 },
          () => Math.random().toString(36)[2]
        ).join(""),
      };

      const response = await axios.post(
        "https://api.t31k.cloud/blackmirror/lucky-spin",
        { payload: payload }
      );
      const data = await response.data;

      if (response.status === 200) {
        return {
          success: true,
          data: data,
          message: "Coupon sent successfully!",
        };
      } else {
        throw new Error(data.error || "Server error");
      }
    } catch (error) {
      console.error("Lucky Spin API Error:", error);

      let errorMessage = "Failed to send coupon. Please try again.";

      if (error.message.includes("fetch")) {
        errorMessage = "Network error. Please check your connection.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      return {
        success: false,
        error: errorMessage,
        details: error.message,
      };
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitLuckySpin(formData, winner);

      if (result.success) {
        // Store in localStorage to prevent duplicate submissions
        const today = new Date().toDateString();
        localStorage.setItem("luckySpinLastPlayed", today);
        localStorage.setItem(
          "luckySpinData",
          JSON.stringify({
            winner,
            formData,
            timestamp: new Date().toISOString(),
          })
        );

        setHasPlayedToday(true);
        setCurrentStep(3); // Move to success step
        setIsSubmitting(false);
      } else {
        // Handle error
        alert(result.error);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  const resetGame = () => {
    // Clear localStorage
    localStorage.removeItem("luckySpinLastPlayed");
    localStorage.removeItem("luckySpinData");

    // Reset state
    setCurrentStep(1);
    setWinner("");
    setFormData({ name: "", mobile: "", email: "" });
    setHasPlayedToday(false);
  };

  // Check if user already played today and show message
  if (hasPlayedToday && currentStep === 1) {
    return (
      <div id="main">
        <Navbar />
        <main className="relative pt-24 pb-12 lg:pt-28 xl:pt-32 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 min-h-screen">
          <section className="relative py-16 sm:py-20 lg:py-24 z-10">
            <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl font-leckerli-one mb-6 tracking-wide">
                  Lucky Spin Online
                </h1>
                <div className="bg-red-600/10 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    🎯 Already Played Today!
                  </h2>
                  <p className="text-white mb-6">
                    You can only play once per day. Come back tomorrow for
                    another chance to win!
                  </p>
                  <p className="text-sm text-white/80 mb-4">
                    Your last prize:{" "}
                    <span className="font-bold text-yellow-300">{winner}</span>
                  </p>
                  {/* <button
                    onClick={resetGame}
                    className="w-full py-3 bg-white text-orange-800 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 mb-4"
                  >
                    Reset for Testing
                  </button> */}
                  <Link
                    href="/"
                    className="block w-full py-3 text-center bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
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

  return (
    <div id="main">
      <Navbar />

      <main className="relative pt-24 pb-12 lg:pt-28 xl:pt-32 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 min-h-screen">
        <section className="relative sm:py-20 lg:py-24 z-10">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            {/* Header */}
            <div className="text-center mb-4">
              <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl font-leckerli-one mb-6 tracking-wide">
                Lucky Spin Online
              </h1>
              <p className="mt-4 text-md md:text-xl text-gray-300 max-w-3xl mx-auto">
                Spin the wheel and win exclusive drink prizes!
              </p>
            </div>

            {/* Step 1: Spinning Wheel */}
            {currentStep === 1 && (
              <div className="flex flex-col items-center justify-center">
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
                                    colorShades[prize.colorIndex].start
                                  }
                                />
                                <stop
                                  offset="100%"
                                  stopColor={colorShades[prize.colorIndex].end}
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
                      : "bg-purple-900/20 border border-gray-200/30 backdrop-blur-sm text-white hover:scale-105 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {isSpinning ? "Spinning..." : "SPIN THE WHEEL"}
                </button>
              </div>
            )}

            {/* Step 2: Form */}
            {currentStep === 2 && (
              <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="bg-purple-900/20 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-8 shadow-2xl">
                    <h2 className="text-3xl font-bold text-white mb-4 font-leckerli-one text-center">
                      🎉 Congratulations! 🎉
                    </h2>
                    <p className="text-2xl text-white font-semibold text-center mb-6">
                      You won: <span className="text-yellow-300">{winner}</span>
                    </p>

                    <p className="text-white/90 text-center mb-6">
                      Enter details to receive your prize:
                    </p>

                    {/* Form */}
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg bg-black/10 border border-white/20 text-white placeholder-black/60"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                          placeholder="Enter your mobile number"
                        />
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                          isSubmitting
                            ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                            : "bg-white text-purple-800 hover:bg-gray-100"
                        }`}
                      >
                        {isSubmitting
                          ? "Sending Coupon..."
                          : "Claim Your Prize"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Success */}
            {currentStep === 3 && (
              <div className="flex flex-col items-center justify-center">
                <div className="bg-green-600/10 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-8 shadow-2xl max-w-md w-full text-center">
                  <h2 className="text-3xl font-bold text-white mb-4 font-leckerli-one">
                    🎉 Success! 🎉
                  </h2>
                  <p className="text-white mb-4 text-lg">
                    Your e-coupon for{" "}
                    <span className="font-bold text-yellow-300">{winner}</span>{" "}
                    has been sent to your email!
                  </p>
                  <p className="text-sm text-white/80 mb-6">
                    Check your inbox and show the coupon to our staff during
                    redemption.
                  </p>

                  <div className="space-y-3">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="w-full py-3 bg-white text-green-800 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                    >
                      Back to Wheel
                    </button>
                    <Link
                      href="/"
                      className="block w-full py-3 text-center bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                    >
                      ← Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Show Prize Details and T&C only on step 1 */}
            {currentStep === 1 && (
              <>
                {/* Prize Details */}
                <div className="mt-16 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-8 font-leckerli-one text-center">
                    Available Prizes
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                      <h4 className="text-xl font-bold text-purple-400 mb-4">
                        2 House Pour
                      </h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>{`Hendrick's Gin`}</li>
                        <li>{`Singleton 12 Years Whiskey`}</li>
                      </ul>
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                      <h4 className="text-xl font-bold text-purple-400 mb-4">
                        2 Pint Beer
                      </h4>
                      <ul className="text-gray-300 space-y-2">
                        <li>{`Sapporo Draught (Black)`}</li>
                        <li>{`Sapporo Draught (White)`}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="mt-16 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-6 font-leckerli-one text-center">
                    Terms & Conditions
                  </h3>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                    <ul className="text-gray-300 space-y-3">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>
                          <strong>One play per person per day</strong>
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>
                          <strong>Redemption Hours:</strong> Monday - Friday,
                          6pm till late only
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>
                          <strong>Valid Until:</strong> End of October 2025
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Present e-coupon to staff for redemption</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>Not exchangeable for cash or other items</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>
                          Management reserves the right to refuse service
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Back to Home */}
                <div className="mt-12 text-center">
                  <Link
                    href="/"
                    className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-200"
                  >
                    ← Back to Home
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
