import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TRANSLATIONS } from "../../utils/translations";
import BannerSlider from "./BannerSlider";
import { Lock } from "lucide-react";

const STATS = [
  ["DELIVERY-FIRST", "Built for online ordering"],
  ["READY-TO-LAUNCH SYSTEM", "Brand + menu + playbooks"],
  ["FLEXIBLE ROYALTY", "Performance-aligned"],
  ["PARTNER SUPPORT", "Beyond launch"],
];

const TOTAL_SLIDES = 4;

export default function Hero({ lang = "EN" }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const translationsMap = TRANSLATIONS;
  const t = TRANSLATIONS[lang] || TRANSLATIONS["EN"];
  return (
    <section id="top" className="relative bg-black pt-16 md:pt-28 pb-16 overflow-hidden min-h-[90vh] flex items-center">
      
      {/* BACKGROUND SLIDER COMPONENT */}
      <div className="absolute inset-0 z-0">
        <BannerSlider activeIndex={activeSlide} />
      </div>

      {/* OVERLAY CONTENT */}
      <div className="relative max-w-[1400px] mx-auto px-6 w-full z-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-zinc-400 text-[11px] uppercase tracking-[0.32em] font-bold">
            {t.heroTagline || "Greek Me Partnership"}
          </span>

          <span className="block mt-3 h-[2px] w-10 bg-[#29ABE2] mb-6" />

          <h1 className="font-display font-black uppercase leading-[0.78] tracking-[-0.04em]">
            <span className="text-lean-forward block text-white text-[16vw] md:text-[9vw] lg:text-[10rem]">
              GREEK
            </span>
            <br />
            <span className="text-lean-forward block text-outline-greek text-[16vw] md:text-[9vw] lg:text-[9rem] mt-2 bg-gradient-to-b from-neutral-700 via-black to-neutral-800 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(255,255,255,0.15)] shadow-black">
              ME
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-[#E5E5E5] text-zinc-400 text-[12px] md:text-[14px] leading-[1.6]">
            {t.heroSubtitle ||
              "Launch Greek Me from a commercial kitchen with the brand, menu, operational SOPs, and delivery support you need to start serving customers."}
          </p>

          {/* CIRCULAR ROTATING HALAL STAMP BADGE */}
          <div className="w-full max-w-xl my-6 flex items-center gap-5">
            <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
              <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-400 text-black font-black text-xs shadow-[0_0_10px_#34d399]">
                ✓
              </div>

              <svg
                className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]"
                viewBox="0 0 100 100"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[12px] font-black uppercase tracking-[0.20em] fill-emerald-400">
                  <textPath href="#circlePath" startOffset="0%">
                    100% HALAL MEAT • CERTIFIED
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="flex-1 border-l border-white/10 pl-5">
              <span className="font-display text-[14px] font-bold uppercase tracking-[0.2em] text-emerald-400/80 block mb-1">
                Quality Guaranteed
              </span>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium leading-relaxed select-none">
                {t.halalText || "Well-sourced, tender halal meat across every dish."}
              </p>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">
            <a
              href="#lead-form"
              className="hidden sm:flex items-center justify-center rounded-full border-2 border-[#29ABE2] bg-black px-8 py-3 min-h-[52px] text-xs font-bold uppercase tracking-[0.2em] text-[#ffffff] transition-all hover:bg-[#29ABE2] hover:text-black hover:shadow-[0_0_25px_rgba(41,171,226,0.4)] active:scale-95"
            >
              {t.becomePartner || "Become a Partner"}
              <span className="arrow-x ml-2">→</span>
            </a>

            <a
              href="#menu"
              className="flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-8 py-3 min-h-[52px] text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all hover:bg-[#29ABE2] hover:border-[#29ABE2] hover:text-black hover:shadow-[0_0_25px_rgba(41,171,226,0.4)] active:scale-95"
            >
              {t.exploreMenu || "Explore the Menu"}
            </a>
          </div>

          {/* VISIBLE DATA PRIVACY & SSL TRUST BADGE */}
          <div className="mt-5 flex items-center gap-2 text-xs text-zinc-400 font-medium">
            <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>256-Bit SSL Encrypted — Your application data is confidential and strictly protected.</span>
          </div>
        </motion.div>

        {/* GLASS STATS CARDS */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
          {STATS.map(([big, small]) => (
            <div
              key={big}
              className="bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-xl p-5"
            >
              <div className="font-display uppercase font-bold text-sm md:text-base tracking-[-0.02em] leading-[1.1] text-white">
                {big}
              </div>

              <div className="mt-2 text-[#B8B8B8] text-[10px] uppercase tracking-[0.12em] font-bold">
                {small}
              </div>
            </div>
          ))}
        </div>

        {/* DYNAMIC TIMER INDICATORS (ACTIVE EXPANDS, INACTIVE SHRINKS TO DOT) */}
        <div className="mt-6 flex items-center justify-center gap-2.5 z-20">
          {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => {
            const isActive = idx === activeSlide;

            return (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 focus:outline-none ${
                  isActive 
                    ? "w-10 bg-white/20" 
                    : "w-2.5 bg-white/40 hover:bg-white/60"
                }`}
              >
                {isActive && (
                  <span
                    key={activeSlide} // Forces progress animation to reset on slide change
                    className="absolute inset-0 bg-[#29ABE2] rounded-full animate-[progress_5s_linear_forwards]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
