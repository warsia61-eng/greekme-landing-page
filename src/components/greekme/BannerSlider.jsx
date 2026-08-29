import React from "react";

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

export default function BannerSlider({ activeIndex = 0 }) {
  const desktopIndex = activeIndex % DESKTOP_BANNERS.length;
  const mobileIndex = activeIndex % MOBILE_BANNERS.length;

  return (
    <div className="relative w-full overflow-hidden bg-black h-full">
      {/* 1. MOBILE SLIDER (Visible on small screens) */}
      <div className="block md:hidden relative w-full h-[560px] xs:h-[420px]">
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
              className="w-full h-full object-cover object-center"
            />
            {/* Bottom fade into solid black */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
          </div>
        ))}
      </div>

      {/* 2. DESKTOP SLIDER (Visible on md+ screens) */}
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
            {/* Left fade gradient so hero text is crisp */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}