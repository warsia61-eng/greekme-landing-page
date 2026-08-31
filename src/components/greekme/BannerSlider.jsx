import React from "react";

// Exact image paths from your public/images directory
const DESKTOP_BANNERS = [
  "/images/HeroSlider1.jpg",
  "/images/HeroSlider2.jpg",
  "/images/HeroSlider3.jpg",
  "/images/HeroSlider4.jpg",
];

const MOBILE_BANNERS = [
  "/images/HSM1.webp",
  "/images/HSM2.webp",
  "/images/HSM3.webp",
  "/images/HSM4.webp",
];

export default function BannerSlider({ activeIndex = 0 }) {
  const desktopIndex = activeIndex % DESKTOP_BANNERS.length;
  const mobileIndex = activeIndex % MOBILE_BANNERS.length;

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* 1. MOBILE SLIDER */}
      <div className="block md:hidden absolute inset-0 w-full h-full bg-black">
        {MOBILE_BANNERS.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === mobileIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={src}
              alt={`Mobile Hero Banner ${index + 1}`}
              className="w-full h-full object-cover object-top"
            />
            {/* Smooth gradient fade towards bottom slider indicators */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent via-60% to-black/95 to-100%" />
          </div>
        ))}
      </div>

      {/* 2. DESKTOP SLIDER */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        {DESKTOP_BANNERS.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === desktopIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={src}
              alt={`Desktop Hero Banner ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}