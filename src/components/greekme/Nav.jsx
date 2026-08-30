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

  const t = TRANSLATIONS[lang === "EL" ? "EL" : "EN"] || TRANSLATIONS["EN"];

  const LINKS = [
    [t.opportunity || "Opportunity", "opportunity"],
    [t.menu || "Menu", "menu"],
    [t.system || "System", "system"],
    [t.model || "Plans", "plans"],
    [t.faq || "FAQ", "faq"],
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
      <nav className="relative max-w-[1400px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* FAR LEFT: HAMBURGER BUTTON (Mobile only) */}
        <div className="flex items-center md:hidden z-10">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="text-white p-1.5 focus:outline-none hover:text-[#29ABE2] transition-colors"
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
        </div>

        {/* CENTERED LOGO (Mobile absolute center, Desktop standard left) */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-0">
          <a
            href="#top"
            aria-label="Greek Me home"
            className="flex items-center"
          >
            {!imgError ? (
              <img
                src={logoUrl}
                alt="Greek Me"
                onError={() => setImgError(true)}
                className="w-[60px] sm:w-[80px] md:w-[90px] h-auto object-contain"
              />
            ) : (
              <div className="flex items-center font-display font-black text-xl sm:text-2xl tracking-tighter">
                <span className="text-[#29ABE2]">GREEK</span>
                <span className="text-white">ME</span>
              </div>
            )}
          </a>
        </div>

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

        {/* FAR RIGHT: LANGUAGE SELECTOR */}
        <div className="flex items-center z-10">
          <div className="relative flex items-center">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full border border-white/20 bg-black/40 hover:border-[#29ABE2] transition-all text-white text-xs font-bold"
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
              <span className="text-[#29ABE2] font-black uppercase tracking-wider transform -skew-x-12 inline-block text-[11px] sm:text-xs">
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
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col items-center text-center shadow-2xl"
          >
            <ul className="flex flex-col items-center gap-6 w-full">
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}