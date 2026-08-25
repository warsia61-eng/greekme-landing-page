import React from "react";
import { motion } from "framer-motion";

const heroImage = "/images/Hero.jpg";

const STATS = [
  ["DELIVERY-FIRST", "Built for online ordering"],
  ["READY-TO-LAUNCH SYSTEM", "Brand + menu + playbooks"],
  ["FLEXIBLE ROYALTY", "Performance-aligned"],
  ["PARTNER SUPPORT", "Beyond launch"],
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-black pt-28 pb-16 overflow-hidden min-h-[94vh] flex items-center"
        >{/* BACKGROUND IMAGE CONTAINER */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 z-0">
        <img
          src={heroImage}
          alt="Chef working background"
          className="w-full h-full object-cover object-right lg:object-center opacity-80"
        />
        {/* Gradients to keep left-side text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* 2. OVERLAY CONTENT */}
      <div className="relative max-w-[1400px] mx-auto px-6 w-full z-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[#29ABE2] text-[11px] uppercase tracking-[0.32em] font-bold">
            Greek Me Partnership
          </span>

          <span className="block mt-3 h-[2px] w-10 bg-[#29ABE2] mb-6" />

          <h1 className="font-display font-black uppercase leading-[0.78] tracking-[-0.04em]">
            <span className="text-lean-forward block text-white text-[16vw] md:text-[9vw] lg:text-[7.5rem]">
              GREEK
            </span>
            <span className="text-lean-forward block text-outline-greek text-[16vw] md:text-[9vw] lg:text-[7.5rem] mt-2">
              ME
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-[#E5E5E5] text-[15px] md:text-[16px] leading-[1.6]">
            Launch GreekME from a commercial kitchen with the brand, menu, operational SOPs, and delivery support you need to start serving customers.
          </p>

          {/* 100% HALAL CERTIFIED GLOW BADGE */}
          <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-full bg-emerald-950/40 border border-emerald-500/40 px-5 py-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-400 text-black font-black text-xs shadow-[0_0_12px_#34d399]">
              ✓
            </div>
            <span className="font-display font-black uppercase tracking-[0.16em] text-xs text-emerald-400">
              100% Halal Certified
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
            <span className="text-white/80 text-[13px] font-medium">
              Well-sourced, tender halal meat across every dish.
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#apply"
              className="btn-greek px-8 py-3 flex items-center font-bold uppercase rounded-full transition text-xs min-h-[52px] tracking-[0.2em]"
            >
              Become a Partner
              <span className="arrow-x ml-2">→</span>
            </a>

            <a
              href="#menu"
              className="border border-white/30 text-[#E5E5E5] px-8 py-3 min-h-[52px] flex items-center font-bold uppercase tracking-[0.14em] text-[11px] rounded-full hover:border-[#29ABE2] hover:text-[#29ABE2] transition backdrop-blur-sm"
            >
              Explore the Menu
            </a>
          </div>
        </motion.div>

        {/* 3. GLASS STATS CARDS AT THE BOTTOM */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
          {STATS.map(([big, small]) => (
            <div
              key={big}
              className="bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-xl p-5"
            >
              <div className="font-display uppercase font-bold text-sm md:text-base tracking-[-0.02em] leading-[1.1] text-[#29ABE2]">
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