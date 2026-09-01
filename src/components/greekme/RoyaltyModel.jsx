import React from "react";

const FLOW = ["Your Business", "Sales", "Greek Me Royalty", "Grow Together"];
const POINTS = [
  ["FLEXIBLE", "No rigid fixed monthly structure."],
  ["ALIGNED", "Greek Me's commercial success is connected to partner performance."],
  ["PARTNER-FIRST", "Built around a long-term relationship, not a one-off licence."],
];

export default function RoyaltyModel() {
  return (
    <section id="plans" className="relative bg-white text-[#111] py-24 md:py-32 overflow-hidden">
      <span aria-hidden className="pointer-events-none absolute -right-10 top-10 font-display font-black text-[200px] md:text-[300px] leading-none text-[#111]/[0.03] select-none">05</span>
      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-[#29ABE2] text-[11px] uppercase tracking-[0.32em] font-bold">05 · The Model</span>
          <span className="block mt-3 h-[2px] w-10 bg-[#29ABE2]" />
          <h2 className="mt-6 font-display uppercase font-black text-[#111] leading-[0.95] tracking-[-0.03em] text-[12vw] md:text-[5rem]">We Grow<br />When You Grow.</h2>
          <p className="mt-6 text-[#5A5A5A] text-[16px] leading-[1.6] max-w-xl">Greek Me operates through a flexible royalty model designed to align the partnership with business performance. No fixed monthly franchise fee.</p>
        </div>

        <div className="mt-14 rounded-2xl border border-[#111]/10 bg-[#F7F7F7] p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            {FLOW.map((s, i) => (
              <React.Fragment key={s}>
                <div className="flex-1 rounded-xl bg-[#111] text-white p-5 md:p-6 flex flex-col items-center justify-center text-center min-h-[120px]">
                  <span className="text-[#29ABE2] font-mono text-[11px] uppercase tracking-[0.25em] font-bold">0{i + 1}</span>
                  <span className="mt-2 font-display uppercase font-black text-base md:text-xl text-white tracking-[-0.02em] leading-tight">{s}</span>
                </div>
                {i < FLOW.length - 1 && (
                  <div className="flex items-center justify-center text-[#29ABE2] text-2xl font-black rotate-90 md:rotate-0 px-1">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-6 text-center text-[#5A5A5A] text-[12px] uppercase tracking-[0.2em] font-bold">Royalty terms discussed during the partnership process</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {POINTS.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-[#111]/10 bg-white p-7">
              <span className="font-display font-black text-3xl text-[#29ABE2]">0{i + 1}</span>
              <h3 className="mt-3 font-display uppercase font-black text-lg text-[#111] leading-[1.05]">{t}</h3>
              <p className="mt-2 text-[#5A5A5A] text-[14px] leading-[1.6]">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-[#111] text-white p-10 md:p-14 text-center">
          <h3 className="font-display uppercase font-black text-4xl md:text-6xl tracking-[-0.03em] leading-[0.95]">Let&apos;s Talk Partnership.</h3>
          <p className="mt-4 text-[#B8B8B8] max-w-lg mx-auto">Royalty terms are discussed during partner onboarding</p>

          <p className="text-center text-[#29ABE2] text-sm md:text-base font-semibold tracking-wide mb-6">
            No fixed monthly fee.
          </p>
          <div className="w-full sm:w-auto flex items-center justify-center">
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 min-h-[52px] text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all hover:bg-[#29ABE2] hover:border-[#29ABE2] hover:text-black active:scale-[0.98]"
          >
            TALK TO THE TEAM
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
