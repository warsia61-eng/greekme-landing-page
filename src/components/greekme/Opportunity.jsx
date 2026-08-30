import React from "react";
import SectionTitle from "./SectionTitle";

export default function Opportunity() {
  return (
    <section id="opportunity" className="bg-black py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionTitle dark number="01" eyebrow="The Opportunity">Greek Food.<br />Made For Delivery.</SectionTitle>
            <p className="mt-8 text-[#E5E5E5] text-[16px] leading-[1.6] max-w-lg">
              Greek food brings together bold flavours, recognisable dishes, and highly adaptable formats from loaded gyros and souvlaki wraps to halloumi and fresh Mediterranean sides. Greek Me is built around delivery friendly dishes that prepare fast, travel well, and protect your margins.
            </p>
            {/* EXPANDED & CENTER-ALIGNED BUTTON CONTAINER */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full">
              
              {/* SEE THE PARTNER SYSTEM */}
              <a
                href="#system"
                className="flex w-full sm:w-auto max-w-xs items-center justify-center rounded-full border border-[#29ABE2] bg-[#29ABE2]/10 px-8 py-3.5 min-h-[52px] text-xs font-bold uppercase tracking-[0.14em] text-[#29ABE2] backdrop-blur-md transition-all hover:bg-[#29ABE2] hover:text-black active:scale-95 text-center"
              >
                SEE THE PARTNER SYSTEM
              </a>

              {/* EXPLORE THE MENU */}
              <a
                href="#menu"
                className="flex w-full sm:w-auto max-w-xs items-center justify-center rounded-full border border-white/30 bg-black/40 px-8 py-3.5 min-h-[52px] text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all hover:border-[#29ABE2] hover:text-[#29ABE2] active:scale-95 text-center"
              >
                EXPLORE THE MENU
              </a>

            </div>
          </div>
          <div className="relative pb-16 pr-10">
            <img src="https://media.base44.com/images/public/6a775434cd39f795c384e09d/ee3614beb_generated_e2a57ed7.png" alt="Loaded gyros wrap cut open" className="w-full h-[420px] object-cover rounded-md" />
            <img src="https://media.base44.com/images/public/6a775434cd39f795c384e09d/87c81d311_generated_cd25439b.png" alt="Hands sealing a delivery box in a cloud kitchen" className="absolute -bottom-0 -left-6 w-2/5 h-56 object-cover rounded-md border-8 border-black" />
            <div className="absolute top-6 right-0 text-black font-display uppercase font-bold text-sm tracking-[0.12em] px-4 py-3 rounded-md bg-[#E62828]">High Margin</div>
          </div>
        </div>
      </div>
    </section>
  );
}
