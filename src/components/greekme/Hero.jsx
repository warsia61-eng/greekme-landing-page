import React from "react";
import { motion } from "framer-motion";

const STATS = [
  ["DELIVERY-FIRST", "Built for online ordering"],
  ["READY-TO-LAUNCH SYSTEM", "Brand + menu + playbooks"],
  ["FLEXIBLE ROYALTY", "Performance-aligned"],
  ["PARTNER SUPPORT", "Beyond launch"],
];

// Image is inside: src/assets/images/Hero.jpg
const heroImage = "/src/assets/images/Hero.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-black pt-32 pb-16 overflow-hidden min-h-[94vh] flex items-center"
    >
      {/* Hero Background */}
      <div className="absolute right-0 top-0 h-full w-full md:w-3/5">
        <img
          src={heroImage}
          alt="Charred gyros rotisserie close-up"
          className="h-full w-full object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[#29ABE2] text-[11px] uppercase tracking-[0.32em] font-bold">
            Greek Me Partnership
          </span>

          <span className="block mt-3 h-[2px] w-10 bg-[#29ABE2] mb-6" />

         <h1 className="font-display font-black uppercase leading-[0.78] tracking-[-0.04em]">
        <span className="text-lean-forward block text-white text-[18vw] md:text-[10vw] lg:text-[9rem]">
          GREEK
        </span><br></br>

        <span className="text-lean-forward block text-outline-greek text-[18vw] md:text-[10vw] lg:text-[9rem]">
          ME
        </span>
      </h1>

          <p className="mt-8 max-w-xl text-[#E5E5E5] text-[16px] leading-[1.6]">
            Launch it from a commercial kitchen with the brand, menu, operational SOPs, and delivery support you need to start serving customers.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-full bg-[#16a34a] px-5 py-2.5 shadow-[0_10px_30px_-10px_rgba(22,163,74,0.6)]">
            <span className="font-display font-black uppercase tracking-[0.16em] text-sm text-white">
              ✓ 100% Halal
            </span>

            <span className="text-white/90 text-[13px] font-medium">
              Well-sourced, tender halal meat across every meat dish.
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            <a
              href="#apply"
              className="btn-greek px-6 py-2 flex items-center font-bold uppercase rounded-full transition text-xs min-h-[52px] tracking-[0.2em]"
            >
              Become a Partner
              <span className="arrow-x">→</span>
            </a>

            <a
              href="#menu"
              className="border border-white/30 text-[#E5E5E5] px-6 py-2 min-h-[52px] flex items-center font-bold uppercase tracking-[0.14em] text-[11px] rounded-full hover:border-[#29ABE2] hover:text-[#29ABE2] transition"
            >
              Explore the Menu
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map(([big, small]) => (
            <div
              key={big}
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl p-5"
            >
              <div className="font-display uppercase font-bold text-base md:text-xl tracking-[-0.02em] leading-[1.05] text-[#ffffff]">
                {big}
              </div>

              <div className="mt-2 text-[#B8B8B8] text-[10px] uppercase tracking-[0.12em] font-bold">
                {small}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}