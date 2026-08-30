import React from "react";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
const footerLogo = "/images/FooterLogo.png";

const LINKS = [
  ["The Opportunity", "#opportunity"],
  ["The Menu", "#menu"],
  ["Partner System", "#system"],
  ["Royalty Model", "#plans"],
  ["How It Works", "#how"],
  ["FAQ", "#faq"],
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">

      {/* food-verse INTRO */}
      <div className="max-w-[1400px] mx-auto px-6 mb-14 text-center">
        <div className="inline-flex flex-col items-center">
          <a
            href="https://food-verse.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="food-verse"
            className="font-display text-sm md:text-md font-bold uppercase tracking-[0.3em] text-[#FF8D28] hover:brightness-125 transition"
          >
            FOOD-VERSE 
          </a>

          <span className="block mt-2 h-[2px] w-8 bg-[#FF8D28]" />
        </div>

        <h3 className="font-display font-bold text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] text-zinc-400 text-center leading-relaxed mt-5">
          Powered by the food-verse Ecosystem.
        </h3>

        <p className="mt-4 max-w-2xl mx-auto text-[#cccccc] text-[15px] leading-[1.6]">
          Greek Me operates as a core concept within{" "}
          <a
            href="https://food-verse.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00A3FF] font-semibold hover:underline"
          >
            food-verse
          </a>
          &nbsp;a multi-brand virtual kitchen platform powering delivery concepts
          across top UK cities.
        </p>
      </div>

      {/* FOOTER CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Greek Me LOGO */}
        <div>
          <img
            src={footerLogo}
            alt="Greek Me"
            className="w-[150px] h-auto object-contain"
          />

          <p className="mt-3 text-[#29ABE2] text-[11px] uppercase tracking-[0.3em] font-bold">
            Part of the food-verse Platform
          </p>
        </div>

        {/* FOOTER LINKS */}
        <ul className="self-start h-auto grid grid-cols-2 gap-x-12 gap-y-3 md:justify-items-end">
          {LINKS.map(([l, h]) => (
            <li key={h}>
              <a
                href={h}
                className="text-[#B8B8B8] hover:text-[#29ABE2] text-[11px] uppercase tracking-[0.12em] font-bold transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* SECURITY & SSL TRUST BADGES */}
      <div className="max-w-[1400px] mx-auto px-6 mt-12 pt-8 border-t border-white/10">
        <div className="bg-zinc-950/80 border border-white/10 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-300">
          
          <div className="flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-zinc-500 font-semibold">256-Bit SSL Encrypted</strong>
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#ffcc00] shrink-0" />
            <span className="text-zinc-500 font-semibold">
              Verified Domain 
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-zinc-500 font-semibold">
              Protected Partner Application Gateway
            </span>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-[1400px] mx-auto px-6 mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3 justify-between text-[#B8B8B8] text-[11px] uppercase tracking-[0.12em] font-bold">

        <span>
          © {new Date().getFullYear()} Greek Me. All rights reserved.
        </span>

        <div className="flex gap-8">
          <a
            href="#top"
            className="hover:text-[#29ABE2]"
          >
            Privacy Policy
          </a>

          <a
            href="#top"
            className="hover:text-[#29ABE2]"
          >
            Terms
          </a>
        </div>

      </div>

    </footer>
  );
}
