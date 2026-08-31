import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PILLARS = [
  {
    n: "01",
    tag: "Brand",
    title: "Greek Me Brand Kit",
    sub: "Your complete Greek Me identity.",
    items: ["Brand identity", "Packaging", "Digital assets", "Menu templates"],
  },
  {
    n: "02",
    tag: "Menu",
    title: "Greek Me Menu System",
    sub: "Everything needed to serve the Greek Me menu consistently.",
    items: ["Recipes & portions", "Ingredient guidance", "Preparation standards", "Menu updates"],
  },
  {
    n: "03",
    tag: "Kitchen",
    title: "Kitchen Playbook",
    sub: "A clear operating framework for your kitchen.",
    items: ["Setup guidance", "Equipment requirements", "SOPs", "Quality standards"],
  },
  {
    n: "04",
    tag: "Training",
    title: "Team Training",
    sub: "Get your team ready to deliver the Greek Me experience.",
    items: ["Staff onboarding", "Recipe training", "Operational training", "Service standards"],
  },
  {
    n: "05",
    tag: "Growth",
    title: "Marketing & Platform Support",
    sub: "Tools to help your Greek Me operation get noticed.",
    items: ["Delivery-platform support", "Launch campaigns", "Marketing assets", "Seasonal promotions"],
  },
  {
    n: "06",
    tag: "Support",
    title: "Ongoing Partner Support",
    sub: "Guidance beyond launch.",
    items: ["Operational guidance", "Menu updates", "Supply-chain guidance", "Marketing support"],
  },
];

export default function PartnerSystem() {
  const [active, setActive] = useState(0);
  const p = PILLARS[active];

  return (
    <section
      id="system"
      className="relative overflow-hidden border-y border-white/10"
    >
      {/* Background image */}
      <img
        src="/images/WhatYouGetBGImage.jpg"
        alt="What You Get Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none"
      />

      {/* Subtle blue tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00141C]/80 via-black/50 to-black/90" />

      {/* Section content */}
      <div className="relative z-10 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Heading */}
          <div className="max-w-3xl">
            <span className="text-[#29ABE2] text-[11px] uppercase tracking-[0.32em] font-bold">
              04 · What You Get
            </span>

            <span className="block mt-3 h-[2px] w-10 bg-[#29ABE2]" />

            <h2 className="mt-6 font-display uppercase font-black text-white leading-[0.95] tracking-[-0.03em] text-[11vw] md:text-[4.5rem]">
              The Greek Me
              <br />
              Partner System.
            </h2>

            <p className="mt-6 text-[#E5E5E5] text-[15px] md:text-[16px] leading-[1.6] max-w-xl">
              Everything you need to launch, operate and grow.
            </p>

            <p className="mt-3 text-[#29ABE2] font-display uppercase font-black tracking-[0.14em] text-sm">
              Everything you need. Nothing you don&apos;t.
            </p>
          </div>

          {/* ================================================= */}
          {/* DESKTOP ONLY: TABS NAVIGATION & ACTIVE PANEL      */}
          {/* ================================================= */}
          <div className="hidden md:block">
            {/* Pillar navigation tabs */}
            <div className="mt-14 overflow-visible">
              <div className="grid grid-cols-6 gap-4">
                {PILLARS.map((pl, i) => {
                  const on = i === active;

                  return (
                    <button
                      key={pl.n}
                      onClick={() => setActive(i)}
                      className={`relative rounded-xl border px-5 py-5 text-left transition-all duration-300 ${
                        on
                          ? "border-[#29ABE2] bg-[#0A1A22]/90 shadow-[0_0_40px_-12px_#29ABE2]"
                          : "border-white/10 bg-black/60 backdrop-blur-sm hover:border-[#29ABE2]/40"
                      }`}
                    >
                      <span
                        className={`font-display font-black text-3xl leading-none ${
                          on ? "text-[#29ABE2]" : "text-white/30"
                        }`}
                      >
                        {pl.n}
                      </span>

                      <span
                        className={`block mt-2 font-display uppercase font-black text-sm tracking-[0.12em] ${
                          on ? "text-white" : "text-[#B0B0B0]"
                        }`}
                      >
                        {pl.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active content panel */}
            <div className="relative mt-6 rounded-2xl border border-white/10 bg-black/65 backdrop-blur-sm p-12 overflow-hidden">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-10 font-display font-black text-[220px] leading-none text-white/[0.03] select-none"
              >
                {p.n}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative grid grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <span className="text-[#29ABE2] font-mono text-[11px] uppercase tracking-[0.25em] font-bold">
                      {p.tag}
                    </span>

                    <span className="block mt-3 font-display font-black text-7xl text-[#29ABE2] leading-none">
                      {p.n}
                    </span>

                    <h3 className="mt-5 font-display uppercase font-black text-white text-4xl tracking-[-0.02em] leading-[1.02]">
                      {p.title}
                    </h3>

                    <p className="mt-4 text-[#B8B8B8] text-[15px] leading-[1.6] max-w-md">
                      {p.sub}
                    </p>
                  </div>

                  <ul className="grid grid-cols-2 gap-3">
                    {p.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0D0D0D]/90 backdrop-blur-sm px-4 py-3.5"
                      >
                        <span className="text-[#29ABE2] font-bold">✓</span>
                        <span className="text-[#E5E5E5] text-[14px] font-medium">
                          {it}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ================================================= */}
          {/* MOBILE ONLY: SWIPEABLE CAROUSEL CARDS             */}
          {/* ================================================= */}
          <div className="md:hidden mt-8 -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PILLARS.map((item) => (
              <div
                key={item.n}
                className="w-[85vw] shrink-0 snap-center rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[#29ABE2] text-[11px] font-bold uppercase tracking-widest">
                    {item.tag}
                  </span>

                  <div className="font-display font-black text-5xl text-[#29ABE2] mt-2">
                    {item.n}
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase mt-2 leading-tight text-white">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                    {item.sub}
                  </p>

                  <div className="flex flex-col gap-2.5 mt-6">
                    {item.items.map((it) => (
                      <div
                        key={it}
                        className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-white"
                      >
                        <span className="text-[#29ABE2]">✓</span>
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-center text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                  Swipe for next card →
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[#B0B0B0] text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-bold">
            Greek Me doesn&apos;t just give you a brand. It gives you the system behind the brand.
          </p>
        </div>
      </div>
    </section>
  );
}