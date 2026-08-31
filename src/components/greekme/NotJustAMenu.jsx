import React from "react";

const introImage = "/images/NotJustAMenuBG.webp";

const CARDS = [
  [
    "01",
    "BRAND",
    "Complete customer-facing identity, packaging design, and asset kit.",
  ],
  [
    "02",
    "MENU",
    "Tested recipes, exact portion guides, and ingredient sourcing specs.",
  ],
  [
    "03",
    "SYSTEM",
    "Kitchen SOPs, prep workflows, and quality-control checklists.",
  ],
  [
    "04",
    "SUPPORT",
    "Staff training, delivery platform optimization, and ongoing marketing assistance.",
  ],
];

export default function NotJustAMenu() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden bg-[#00a693] text-white py-16 md:py-28"
    >
      {/* FULL SECTION BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={introImage}
          alt="Greek Me branded food"
          className="h-full w-full object-cover object-right-top md:object-right"
        />
        {/* Gradient overlay to ensure high contrast for left-aligned typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00C4B4] via-[#00a693]/95 to-[#00C4B4]/20" />
      </div>

      {/* CONTENT & CARDS */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-white">
            What is Greek Me?
          </span>

          <span className="mt-3 block h-[2px] w-10 bg-white" />

          <h2 className="mt-6 font-display text-[10vw] font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-[4rem]">
            <span className="text-white">Not Just A </span>
            <span className="text-[#fce803]">Menu.</span>
            <br />
            <span className="text-white">A Ready-To-Run Brand.</span>
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="relative mt-10 md:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-2xl bg-white/95 backdrop-blur-md p-7 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] border border-white/20 transition-transform duration-300 hover:-translate-y-1"
            >
              <span
                className="font-display text-4xl font-black leading-none"
                style={{ color: "#00a693" }}
              >
                {number}
              </span>

              <h3 className="mt-4 font-display text-lg font-black uppercase leading-[1.05] text-[#111]">
                {title}
              </h3>

              <p className="mt-2 text-[14px] leading-[1.6] text-[#333333]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}