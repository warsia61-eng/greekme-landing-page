import React, { useEffect, useState } from "react";

const LINKS = [
  ["The Opportunity", "opportunity"],
  ["The Menu", "menu"],
  ["The System", "system"],
  ["The Model", "plans"],
  ["FAQ", "faq"],
];

// FooterLogo is inside src/assets/images
const logoUrl = new URL(
  "../../assets/images/FooterLogo.png",
  import.meta.url
).href;

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid
          ? "backdrop-blur-xl bg-black/80 border-b border-white/15"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between gap-6">

        {/* GREEKME LOGO */}
        <a
          href="#top"
          aria-label="GreekME home"
          className="flex items-center shrink-0"
        >
          <img
            src={logoUrl}
            alt="GreekME"
            className="w-[80px] md:w-[90px] h-auto object-contain"
          />
        </a>

        {/* NAV LINKS */}
        <ul className="hidden lg:flex items-center gap-8">
          {LINKS.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-[#E5E5E5]/70 hover:text-[#29ABE2] text-[11px] uppercase tracking-[0.12em] font-bold transition-colors focus:outline-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#29ABE2]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* BECOME A PARTNER */}
        <a
          href="#lead-form"
          className="hidden sm:flex items-center rounded-full bg-[#29ABE2] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
        >
          BECOME A PARTNER →
        </a>

      </nav>
    </header>
  );
}