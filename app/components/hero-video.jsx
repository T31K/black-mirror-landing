"use client";

import { useEffect, useState, useRef } from "react";

const HeroVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [video1Loaded, setVideo1Loaded] = useState(false);
  const [video2Loaded, setVideo2Loaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Wait for DOM ready then load first video
  useEffect(() => {
    const handleDOMReady = () => {
      setShowVideo(true);
    };

    if (document.readyState === "complete") {
      handleDOMReady();
    } else {
      window.addEventListener("load", handleDOMReady);
      return () => window.removeEventListener("load", handleDOMReady);
    }
  }, []);

  // Load second video once first video is loaded
  useEffect(() => {
    if (video1Loaded && !video2Loaded) {
      setVideo2Loaded(true);
    }
  }, [video1Loaded, video2Loaded]);

  // Handle video transitions
  useEffect(() => {
    const video1Element = document.querySelector('[data-video="1"]');
    const video2Element = document.querySelector('[data-video="2"]');

    if (video1Element && currentVideo === 0) {
      const handleEnded = () => {
        if (video2Loaded) {
          setCurrentVideo(1);
          // Ensure video 2 plays
          setTimeout(() => {
            const video2 = document.querySelector('[data-video="2"]');
            if (video2) video2.play();
          }, 100);
        }
      };
      video1Element.addEventListener("ended", handleEnded);
      return () => video1Element.removeEventListener("ended", handleEnded);
    }

    if (video2Element && currentVideo === 1) {
      const handleEnded = () => {
        setCurrentVideo(0);
        // Ensure video 1 plays
        setTimeout(() => {
          const video1 = document.querySelector('[data-video="1"]');
          if (video1) video1.play();
        }, 100);
      };
      video2Element.addEventListener("ended", handleEnded);
      return () => video2Element.removeEventListener("ended", handleEnded);
    }
  }, [currentVideo, video1Loaded, video2Loaded]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-screen w-screen pointer-events-none z-0 rounded-b-[100px] opacity-[90%]"
    >
      {/* Hero Image Fallback */}
      {!showVideo && (
        <img
          src="/hero_image_1.jpg"
          alt=""
          className="w-full h-full object-cover rounded-b-[30px] md:rounded-b-[100px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
          }}
        />
      )}

      {/* Video 1 */}
      {showVideo && (
        <video
          ref={videoRef}
          data-video="1"
          autoPlay
          muted
          loop={!video2Loaded} // Loop if video 2 hasn't loaded yet
          playsInline
          preload="auto"
          className={`
            w-full h-full object-cover absolute inset-0
            rounded-b-[30px] md:rounded-b-[100px]
            transition-opacity duration-500
            ${currentVideo === 0 ? "opacity-100" : "opacity-0"}
          `}
          style={{
            maskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
          }}
          onLoadedData={() => setVideo1Loaded(true)}
        >
          <source src="/hero_video_1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Video 2 */}
      {video2Loaded && (
        <video
          data-video="2"
          muted
          playsInline
          preload="auto"
          className={`
            w-full h-full object-cover absolute inset-0
            rounded-b-[30px] md:rounded-b-[100px]
            transition-opacity duration-500
            ${currentVideo === 1 ? "opacity-100" : "opacity-0"}
          `}
          style={{
            maskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
          }}
          onLoadedData={() => {
            // Ensure video 2 is ready to play when needed
            if (currentVideo === 1) {
              const video2 = document.querySelector('[data-video="2"]');
              if (video2) video2.play();
            }
          }}
        >
          <source src="/hero_video_2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Loading indicator while video 1 is loading */}
      {showVideo && !video1Loaded && (
        <div className="absolute inset-0 bg-black/10 rounded-b-[30px] md:rounded-b-[100px] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/50 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default HeroVideo;
