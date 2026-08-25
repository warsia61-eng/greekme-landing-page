import React from "react";
// Go up 2 levels: greekme -> components -> src -> assets/images
const introImage = "/images/NotAMenu.jpg";
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
      className="relative overflow-hidden bg-[#00a693] text-white"
    >
      {/* DESKTOP BACKGROUND IMAGE */}
      <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <img
          src={introImage}
          alt="GreekME branded food"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a693] via-[#00a693]/30 to-transparent" />
      </div>

      {/* CONTENT & CARDS */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 md:py-28">
        <div className="max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-white">
            What is GreekME?
          </span>

          <span className="mt-3 block h-[2px] w-10 bg-white" />

          <h2 className="mt-6 font-display text-[10vw] font-black uppercase leading-[0.95] tracking-[-0.03em] md:text-[4rem]">
            <span className="text-white">Not Just A </span>
            <span className="text-[#fce803]">Menu.</span>
            <br />
            <span className="text-white">A Ready-To-Run Brand.</span>
          </h2>
        </div>

        {/* MOBILE FEATURED IMAGE CONTAINER */}
        <div className="mt-8 mb-8 w-full rounded-2xl overflow-hidden flex items-center justify-center p-2 bg-[#008f7e] lg:hidden">
          <img 
            src={introImage}
            alt="Gyros Hand Showcase" 
            className="w-full h-auto max-h-[380px] object-contain object-center rounded-xl" 
          />
        </div>

        {/* CARDS GRID */}
        <div className="relative mt-8 lg:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-2xl bg-white p-7 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]"
            >
              <span
                className="font-display text-4xl font-black leading-none"
                style={{ color: "#a2d2ca" }}
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