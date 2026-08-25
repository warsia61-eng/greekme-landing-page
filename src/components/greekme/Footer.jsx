import React from "react";

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

      {/* FOODVERSE INTRO */}
      <div className="max-w-[1400px] mx-auto px-6 mb-14 text-center">
        <div className="inline-flex flex-col items-center">
          <a
            href="https://food-verse.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FoodVerse"
            
            className="font-display text-sm md:text-md font-bold uppercase tracking-[0.3em] text-[#FF8D28] hover:brightness-125 transition"
          >
            FOOD-VERSE 
          </a>

          <span className="block mt-2 h-[2px] w-8 bg-[#FF8D28]" />
        </div>

        <h3 className="mt-6 text-white font-display uppercase font-medium text-2xl md:text-[.8rem] tracking-[0.3em] leading-[1.05]">
          Powered by the FoodVerse Ecosystem.
        </h3>

        <p className="mt-4 max-w-2xl mx-auto text-[#cccccc] text-[15px] leading-[1.6]">
          Greek-Me operates as a core concept within{" "}
          <a
            href="https://food-verse.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00A3FF] font-semibold hover:underline"
          >
            Food-Verse
          </a>
           &nbsp;a multi-brand virtual kitchen platform powering delivery concepts
          across top UK cities.
        </p>
      </div>

      {/* FOOTER CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* GREEKME LOGO */}
        <div>
          <img
            src={footerLogo}
            alt="GreekME"
            className="w-[150px] h-auto object-contain"
          />

          <p className="mt-3 text-[#29ABE2] text-[11px] uppercase tracking-[0.3em] font-bold">
            Part of the FoodVerse Platform
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

      {/* COPYRIGHT */}
      <div className="max-w-[1400px] mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3 justify-between text-[#B8B8B8] text-[11px] uppercase tracking-[0.12em] font-bold">

        <span>
          © {new Date().getFullYear()} GreekME. All rights reserved.
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