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
    <div className="relative w-full overflow-hidden bg-black h-full">
      {/* MOBILE SLIDER - Full image visible with proper aspect scaling */}
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
                className="w-full h-full object-cover object-center scale-105"
              />
              {/* Lighter overlay to show full detail of the image */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/90" />
            </div>
          ))}
        </div>

      {/* 2. DESKTOP SLIDER */}
      <div className="hidden md:block relative w-full h-full min-h-[600px]">
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