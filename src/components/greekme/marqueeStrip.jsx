import React from "react";

const ITEMS = [
  ["PURE FLAVOUR", false],
  ["SAUCY GAINS", true],
  ["FAST CASH", false],
  ["ZERO BS", true],
  ["STREET VIBES", false],
  ["GREEK HYPE", true],
  ["WRAP ROYALTY", false],
  ["PLUG & PLAY", true],
  ["TOTAL CRAVE", false],
  ["BIG BITES", true],
];

const MarqueeContent = () => (
  <div className="flex shrink-0 items-center whitespace-nowrap">
    {ITEMS.map(([text, highlight], index) => (
      <React.Fragment key={index}>
        <span
          className={`font-display text-[17px] font-bold uppercase md:text-[20px] tracking-wider ${
            highlight ? "text-[#CE4804]" : "text-[#111]"
          }`}
        >
          {text}
        </span>

        <span className="mx-4 text-black/40 font-bold">•</span>
      </React.Fragment>
    ))}
  </div>
);

export default function MarqueeStrip() {
  return (
    <section className="relative z-30 -my-5 w-[110%] -translate-x-[5%] rotate-[-1deg] overflow-hidden bg-[#bfc0c3]">
      <div className="marquee-track flex w-max py-2">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
}