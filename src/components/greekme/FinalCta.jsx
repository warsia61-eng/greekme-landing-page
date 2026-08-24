import React from "react";
import LeadForm from "./LeadForm";

export default function FinalCta() {
  return (
    <section id="apply" className="relative bg-black py-24 md:py-32 overflow-hidden">
      
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-[#29ABE2] text-[11px] uppercase tracking-[0.32em] font-bold">Let&apos;s Build Something Together</span>
          <span className="block mt-3 h-[2px] w-10 bg-[#29ABE2]" />
          <h2 className="mt-6 text-white font-display uppercase font-black leading-[0.92] tracking-[-0.03em] text-[13vw] md:text-[5.5rem]">
            Ready To<br /><span className="text-[#29ABE2]">Go Greek?</span>
          </h2>
          <p className="mt-6 text-[#E5E5E5] text-[16px] leading-[1.6] max-w-md">Let&apos;s build your GreekME kitchen. Start your partnership enquiry today.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#apply" className="btn-greek px-6 py-2 flex items-center font-bold uppercase rounded-full text-xs tracking-[0.2em] min-h-[48px]">Become a Partner <span className="arrow-x">→</span></a>
            <a href="#plans" className="border border-white/30 text-[#E5E5E5] px-5 py-2 min-h-[48px] flex items-center font-bold uppercase tracking-[0.14em] text-[11px] rounded-full hover:border-[#29ABE2] hover:text-[#29ABE2] transition">Talk to the Team</a>
          </div>
        </div>
        <LeadForm />
      </div>
             

    </section>
  );
}