import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TRANSLATIONS } from "../../utils/translations";

const logoUrl = "/images/FooterLogo.png";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [langOpen, setLangOpen] = useState(false);

  // Dynamic Translations Object
  const t = TRANSLATIONS[lang === "EL" ? "EL" : "EN"];
  // Reactive Navigation Links
  const LINKS = [
    [t.opportunity, "opportunity"],
    [t.menu, "menu"],
    [t.system, "system"],
    [t.model, "plans"],
    [t.faq, "faq"],
  ];

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        {/* HAMBURGER BUTTON (Mobile screens only) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="md:hidden text-white p-2 shrink-0 focus:outline-none"
        >
          <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>

        {/* Greek Me LOGO */}
        <a
          href="#top"
          aria-label="Greek Me home"
          className="flex items-center shrink-0"
        >
          {!imgError ? (
            <img
              src={logoUrl}
              alt="Greek Me"
              onError={() => setImgError(true)}
              className="w-[80px] md:w-[90px] h-auto object-contain"
            />
          ) : (
            <div className="flex items-center font-display font-black text-2xl tracking-tighter">
              <span className="text-[#29ABE2]">GREEK</span>
              <span className="text-white">ME</span>
            </div>
          )}
        </a>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-8">
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

        {/* RIGHT CTA GROUP */}
        <div className="flex items-center gap-3">
          {/* LANGUAGE SELECTOR */}
          <div className="relative flex items-center">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-black/40 hover:border-[#29ABE2] transition-all text-white text-xs font-bold"
            >
              <img
                src={
                  lang === "EN"
                    ? "https://flagcdn.com/w20/gb.png"
                    : "https://flagcdn.com/w20/gr.png"
                }
                alt={lang}
                className="w-4 h-auto rounded-sm object-cover"
              />
              <span className="text-[#29ABE2] font-black uppercase tracking-wider transform -skew-x-12 inline-block">
                {lang}
              </span>
              <span className="text-[9px] text-white/60 ml-0.5">▼</span>
            </button>

            {/* Dropdown Menu */}
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 rounded-xl bg-black/95 border border-white/15 backdrop-blur-xl shadow-2xl overflow-hidden z-50 py-1.5">
                <button
                  onClick={() => {
                    setLang("EN");
                    setLangOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-white hover:bg-[#29ABE2]/20 transition"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w20/gb.png"
                      alt="GB"
                      className="w-4 h-auto rounded-sm"
                    />
                    <span>English</span>
                  </div>
                  <span className="transform -skew-x-12 text-[#29ABE2] font-black">
                    EN
                  </span>
                </button>

                <button
                  onClick={() => {
                    setLang("EL");
                    setLangOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-white hover:bg-[#29ABE2]/20 transition"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w20/gr.png"
                      alt="GR"
                      className="w-4 h-auto rounded-sm"
                    />
                    <span>Greek</span>
                  </div>
                  <span className="transform -skew-x-12 text-[#29ABE2] font-black">
                    EL
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* BECOME A PARTNER BUTTON */}
          <a
            href="#lead-form"
            className="hidden sm:flex items-center rounded-full bg-[#29ABE2] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
          >
            {t.becomePartner} →
          </a>
        </div>
      </nav>

      {/* ANIMATED MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-black/60 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col items-center text-center shadow-2xl"
          >
            <ul className="flex flex-col items-center gap-6 mb-8 w-full">
              {LINKS.map(([label, id]) => (
                <li key={id} className="w-full">
                  <a
                    href={`#${id}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-white hover:text-[#29ABE2] text-sm uppercase tracking-[0.16em] font-bold block py-1 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#lead-form"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full max-w-xs rounded-full bg-[#29ABE2] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black shadow-lg hover:brightness-110 transition"
            >
              {t.becomePartner} →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
