import React from "react";

const CATS = [
  { name: "Gyros", greek: "ΓΥΡΟΣ", sub: "Slow-Rotated", accent: "#00c4b4", img: "/images/Gyro.jpg", blurb: "Slow-rotated gyros, loaded wraps and fries-box builds engineered for speed and margin.", dishes: ["Chicken Gyros Wrap", "Beef Gyros Wrap", "Loaded Gyros Fries", "Gyros Plate"], meat: true },
  { name: "Souvlaki", greek: "ΣΟΥΒΛΑΚΙ", sub: "Flame-Grilled", accent: "#3b82f6", img: "/images/Souvlaki.jpg", blurb: "Flame-grilled skewers and complete meal plates built for rapid ticket times.", dishes: ["Chicken Souvlaki", "Beef Souvlaki", "Mixed Skewer Box", "Souvlaki & Rice"], meat: true },
  { name: "Halloumi", greek: "ΧΑΛΟΥΜΙ", sub: "Grilled Cheese", accent: "#ef4444", img: "/images/halloumi.jpg", blurb: "Grilled halloumi wraps, loaded fries and Mediterranean vegetarian bestsellers.", dishes: ["Halloumi Wrap", "Halloumi Loaded Fries", "Halloumi Plate", "Halloumi Skewers"] },
  { name: "Mezze + Dips", greek: "ΜΕΖΕ", sub: "Share & Dip", accent: "#facc15", img: "/images/mezze dips.jpg", blurb: "Hummus, tzatziki and high-margin sharing plates that lift average order values.", dishes: ["Hummus & Pita", "Tzatziki", "Spicy Feta", "Dips Plate"] },
  { name: "Salads + Bowls", greek: "ΣΑΛΑΤΑ", sub: "Fresh & Bold", accent: "#f97316", img: "/images/salad bowls.jpg", blurb: "Crisp, Greek-inspired fresh dishes and build-your-own bowls with broad appeal.", dishes: ["Greek Village Salad", "Gyros Bowl", "Power Bowl", "Feta & Olive Bowl"], meat: true },
  { name: "Sides", greek: "ΓΑΡΝΙΤΟΥΡΑ", sub: "On The Side", accent: "#00c4b4", img: "/images/sides.jpg", blurb: "Seasoned fries, falafel and Mediterranean sides that round every order.", dishes: ["Oregano Fries", "Loaded Fries", "Falafel Bites", "Pita Chips"] },
  { name: "Tzatziki", greek: "ΤΖΑΤΖΙΚΙ", sub: "Signature Dip", accent: "#3b82f6", img: "/images/tzatziki.jpg", blurb: "Signature yogurt-cucumber tzatziki built to pair with everything on the menu.", dishes: ["Tzatziki Dip", "Tzatziki & Pita", "Cucumber Yogurt", "Garlic Tzatziki"] }
];

export default function MenuShowcase() {
  return (
    <section id="menu" className="bg-[#F9F9F9] text-[#111] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <span className="text-[#29ABE2] text-[11px] uppercase tracking-[0.32em] font-bold">03 · The Menu</span>
        <span className="block mt-3 h-[2px] w-10 bg-[#29ABE2]" />
        <h2 className="mt-4 font-display text-[clamp(2.75rem,7vw,6.5rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]">
          <span className="text-[#7EC8F5]">GYROS.</span>{" "}
          <span className="text-[#FFC629]">TZATZIKI.</span>
          <br />
          <span className="text-[#111111]">FULL GREEK ENERGY.</span>
        </h2>
        <p className="mt-6 max-w-xl text-[#5A5A5A] text-[14px] md:text-[15px] leading-[1.6]">
          A delivery-first Greek menu across seven categories—fast to prepare, built to travel, engineered for consistent margins.
        </p>

        {/* Scroll bar with py-3 padding */}
        <div className="mt-10 -mx-6 px-6 py-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 min-w-max">
            {CATS.map((c, i) => (
              <a
                key={c.name}
                href={`#cat-${i}`}
                className="border-2 bg-white text-[#111] text-[11px] uppercase tracking-[0.14em] font-bold px-4 py-2.5 rounded-full transition whitespace-nowrap hover:bg-[#111] hover:text-white"
                style={{ borderColor: c.accent }}
              >
                0{i + 1} · {c.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mt-12 md:mt-24 space-y-16 md:space-y-24">
        {CATS.map((c, i) => {
          const flip = i % 2 === 1;
          return (
            <div id={`cat-${i}`} key={c.name} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center scroll-mt-28">
              {/* Image card with offset colored bg */}
              <div className={`relative ${flip ? "md:order-2" : ""}`}>
                <span aria-hidden className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 inset-0 rounded-2xl pointer-events-none" style={{ background: c.accent }} />
                <div className="relative overflow-hidden rounded-2xl border border-[#111]/10 bg-white aspect-[4/3] group">
                  <img
                    src={c.img}
                    alt={`${c.name} — Greek Me category`}
                    className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* BADGES LAYER (Pinned firmly to corners) */}
                  <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between pointer-events-none">
                    <span className="bg-white text-[#111] text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full shadow-md">
                      {c.name}
                    </span>

                    {c.meat && (
                      <span className="bg-[#16a34a] text-white text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full shadow-md ml-auto">
                        ✓ 100% Halal
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Text block */}
              <div className={flip ? "md:order-1" : ""}>
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold" style={{ color: c.accent }}>
                  {c.sub}
                </span>
                <h3 className="mt-2 md:mt-3 font-display uppercase font-black text-[#111] text-5xl md:text-7xl tracking-[-0.03em] leading-[0.9]">
                  {c.name}<span style={{ color: c.accent }}>!</span>
                </h3>
                <span className="block mt-1 font-display font-black text-xl md:text-3xl text-[#111]/20 tracking-[-0.02em]">
                  {c.greek}
                </span>
                <p className="mt-4 text-[#5A5A5A] text-[14px] md:text-[15px] leading-[1.6] max-w-md">{c.blurb}</p>

                {/* Optimized Dish List */}
                <ul className="mt-6 flex flex-wrap gap-2 md:gap-2.5 items-center w-full max-w-lg">
                  {c.dishes.map((d) => (
                    <li
                      key={d}
                      className="inline-flex items-center justify-center border-2 bg-white text-[#111] text-[10px] md:text-[11px] uppercase tracking-[0.1em] font-bold px-3.5 md:px-4 py-2 rounded-full whitespace-nowrap transition-transform duration-200 hover:scale-105"
                      style={{ borderColor: c.accent }}
                    >
                      {d}
                    </li>
                  ))}
                </ul>

                {c.meat && (
                  <p className="mt-4 inline-flex items-center gap-2 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.12em] text-[#16a34a]">
                    <span aria-hidden>✓</span> All meat 100% halal · well-sourced &amp; tender
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mt-20 md:mt-24">
        <div className="rounded-[2rem] py-12 md:py-16 px-6 text-center text-white shadow-[0_40px_80px_-30px_rgba(26,35,126,0.5)] bg-[#243d76]">
          <h3 className="font-display uppercase font-black text-3xl md:text-6xl tracking-[-0.03em] leading-[0.95]">
            More Greek.<br />More To Love.
          </h3>
          <a
            href="#apply"
            className="mt-6 md:mt-8 inline-flex bg-[#29ABE2] text-[#0A2A33] px-7 py-3 items-center font-bold uppercase rounded-full text-xs tracking-[0.2em] min-h-[52px] hover:brightness-110 transition"
          >
            View Menu <span className="arrow-x ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}