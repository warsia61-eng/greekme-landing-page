import React from "react";

const VALUES = [
  ["A Complete Operating System", "Brand, menu, SOPs and support in one partner package."],
  ["Built For Delivery", "Designed around Deliveroo, Uber Eats and Just Eat from day one."],
  ["A Long-Term Partnership", "Greek Me grows when you grow—not a one-off licence."],
];

const STEPS = [
  ["01", "Apply", "Submit your kitchen location and business details."],
  ["02", "Set Up", "Receive the brand kit, menu, recipes and kitchen playbook."],
  ["03", "Train", "Onboard your team with video SOPs and recipe training."],
  ["04", "Launch", "Go live on Deliveroo, Uber Eats and Just Eat."],
  ["05", "Grow", "Operate with ongoing support, menu updates and campaigns."],
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white text-[#111] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-[#29ABE2] text-[11px] uppercase tracking-[0.32em] font-bold">07 · The Journey</span>
          <span className="block mt-3 h-[2px] w-10 bg-[#29ABE2]" />
          <h2 className="mt-6 font-display uppercase font-black text-[#111] leading-[0.95] tracking-[-0.03em] text-[12vw] md:text-[4.5rem]">Apply. Set Up.<br />Launch. Grow.</h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {VALUES.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-[#111]/10 bg-[#F7F7F7] p-6">
              <h3 className="font-display uppercase font-black text-[#111] text-lg leading-[1.05]">{t}</h3>
              <p className="mt-2 text-[#5A5A5A] text-[14px] leading-[1.6]">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-5 gap-3">
          {STEPS.map(([n, t, d], i) => (
            <div key={n} className="relative rounded-2xl border border-[#111]/10 bg-[#F7F7F7] p-6 min-h-[200px] hover:border-[#29ABE2]/50 transition">
              <span className="font-display font-black text-5xl text-[#29ABE2] leading-none">{n}</span>
              <h3 className="mt-4 font-display uppercase font-black text-xl text-[#111] leading-[1.05]">{t}</h3>
              <p className="mt-2 text-[#5A5A5A] text-[14px] leading-[1.6]">{d}</p>
              {i < STEPS.length - 1 && <span aria-hidden className="hidden md:block absolute top-1/2 -right-2 text-[#29ABE2] text-xl font-black">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
