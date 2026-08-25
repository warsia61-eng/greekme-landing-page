import React, { useState, useEffect } from "react";

// Exact image paths from your public/images directory
const DESKTOP_BANNERS = [
  "/images/HeroSlider1.jpg",
  "/images/HeroSlider2.jpg",
  "/images/HeroSlider3.jpg",
  "/images/HeroSlider4.jpg",
];

const MOBILE_BANNERS = [
  "/images/HeroSliderMobile1.jpg",
  "/images/HeroSliderMobile2.jpg",
  "/images/HeroSliderMobile3.jpg",
];

export default function BannerSlider() {
  const [currentDesktopIndex, setCurrentDesktopIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  // Auto-play interval for Desktop (4 slides)
  useEffect(() => {
    const desktopTimer = setInterval(() => {
      setCurrentDesktopIndex((prev) => (prev + 1) % DESKTOP_BANNERS.length);
    }, 5000);

    return () => clearInterval(desktopTimer);
  }, []);

  // Auto-play interval for Mobile (3 slides)
  useEffect(() => {
    const mobileTimer = setInterval(() => {
      setCurrentMobileIndex((prev) => (prev + 1) % MOBILE_BANNERS.length);
    }, 5000);

    return () => clearInterval(mobileTimer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* 1. MOBILE SLIDER (Visible on small screens) */}
      <div className="block md:hidden relative w-full h-[560px] xs:h-[420px]">
  {MOBILE_BANNERS.map((src, index) => (
    <div
      key={src}
      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
        index === currentMobileIndex ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <img
        src={src}
        alt={`Mobile Hero Banner ${index + 1}`}
        className="w-full h-full object-cover object-center"
      />
      {/* Bottom fade into solid black so it transitions cleanly into the Halal section */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
    </div>
        ))}

        {/* Mobile Indicators */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
    {MOBILE_BANNERS.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentMobileIndex(idx)}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          idx === currentMobileIndex
            ? "w-6 bg-[#29ABE2]"
            : "w-1.5 bg-white/40"
        }`}
      />
    ))}
  </div>
</div>

      {/* 2. DESKTOP SLIDER (Visible on md+ screens) */}
      <div className="hidden md:block relative w-full h-[85vh] min-h-[600px]">
        {DESKTOP_BANNERS.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentDesktopIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={src}
              alt={`Desktop Hero Banner ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
            {/* Left fade gradient so hero text is crisp */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
          </div>
        ))}

        {/* Desktop Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {DESKTOP_BANNERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentDesktopIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentDesktopIndex
                  ? "w-8 bg-[#29ABE2]"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}