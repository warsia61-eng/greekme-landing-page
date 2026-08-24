import React from "react";

const ITEMS = [
  ["GREEKME", false],
  ["BIG BUSINESS", true],
  ["DELIVERY-FIRST", false],
  ["GREEK FOOD", true],
  ["YOUR KITCHEN", false],
  ["OUR SYSTEM", true],
  ["READY-TO-LAUNCH", false],
];

const MarqueeContent = () => (
  <div className="flex shrink-0 items-center whitespace-nowrap">
    {ITEMS.map(([text, orange], index) => (
      <React.Fragment key={index}>
        <span
          className={`font-display text-[17px] font-medium uppercase md:text-[20px] ${
            orange ? "text-[#ff4b00]" : "text-[#111]"
          }`}
        >
          {text}
        </span>

        <span className="mx-4 text-[#777]">•</span>
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