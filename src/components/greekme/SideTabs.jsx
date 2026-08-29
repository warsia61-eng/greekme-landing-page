import React from "react";

export default function SideTabs() {
  return (
    <>
      {/* LEFT SIDE TAB - HOVER DRAWER EXPANDABLE CARD */}
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block group">
        <div className="bg-[#29ABE2] text-white rounded-r-[24px] transition-all duration-300 ease-in-out w-[48px] group-hover:w-[320px] overflow-hidden shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)] border-y border-r border-white/20">
          
          {/* CLOSED STATE: Vertical Blue Pill */}
          <div className="flex flex-col items-center justify-center py-6 px-2.5 group-hover:hidden cursor-pointer min-h-[220px]">
            <span className="tab-vert-rev font-display font-bold uppercase tracking-[0.28em] text-[12px] whitespace-nowrap text-[#0D1117]">
              ★ Open Your Own Greek Me
            </span>
          </div>
          

          {/* OPEN STATE: Expanded Franchise Card Content */}
          <div className="hidden group-hover:block p-7 w-[320px]">
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                FRANCHISE WITH US
              </span>
              <span className="text-xs font-black">★</span>
            </div>

            <h3 className="mt-4 font-display text-zinc-900 font-black uppercase text-2xl leading-none text-white">
              HAVE YOUR <br />
              OWN GREEK ME
            </h3>

            <p className="mt-3 text-xs text-white/90 leading-relaxed font-medium">
              Join the family behind the UK's most viral Greek Food brand. Engineered for high margins and rapid ticket times.
            </p>

            <div className="mt-5 space-y-1.5 border-t border-b border-white/15 py-3">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-white">
                🚀 9+ NEW SITES IN 2026
              </p>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-white">
                🌯 7+ FAMOUS FLAVOURS
              </p>
            </div>

            <a
              href="#apply"
              className="mt-6 flex items-center justify-center gap-2 w-full bg-white text-[#0A2A33] py-3 rounded-full text-xs font-black uppercase tracking-[0.15em] hover:bg-[#111] hover:text-white transition-colors duration-200"
            >
              CLICK TO LAND →
            </a>
          </div>

        </div>
      </aside>

      {/* RIGHT SIDE TAB - UNCHANGED */}
      

      {/* RIGHT SIDE TAB - ROUTING TO #order */}
      <a
        href="#order"
        aria-label="Checkout Menu"
        className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#FFC928] text-[#3A2E00] py-6 px-2.5 hover:px-4 hover:brightness-105 transition-all shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)] rounded-l-[24px]"
      >
        <span className="tab-vert-rev font-display font-bold uppercase tracking-[0.28em] text-[12px] whitespace-nowrap">
          ★ CHECKOUT OUR MENU
        </span>
      </a>

      

      {/* MOBILE BOTTOM STICKY CTA - UNCHANGED */}
      <a
        href="#apply"
        aria-label="Become a Greek Me partner"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 btn-greek text-center py-4 font-display font-bold uppercase tracking-[0.18em] text-[13px]"
      >
        Become a Greek Me Partner <span className="arrow-x">→</span>
      </a>
    </>
  );
}
