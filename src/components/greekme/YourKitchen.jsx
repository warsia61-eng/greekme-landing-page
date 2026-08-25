import React from "react";
// ✅ ADD THIS LINE:
const grillImage = "/images/Grill.jpg";

const WHAT_YOU_NEED = [
  "Commercial kitchen space",
  "Griddle / flat-top",
  "Fryer",
  "Refrigeration & freezer",
  "Extraction system",
  "Prep surfaces",
  "Delivery collection point",
];

const WHAT_WE_PROVIDE = [
  "Workflow station maps",
  "Equipment spec checklists",
  "Approved supplier lists",
  "Prep & closing checklists",
];

export default function YourKitchen() {
  return (
    <section
      id="ready"
      className="bg-black text-white py-24 md:py-32 border-y border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-[#29ABE2] text-[11px] uppercase tracking-[0.32em] font-bold">
            Setup Requirements
          </span>

          <span className="block mt-3 h-[2px] w-10 bg-[#29ABE2]" />

          <h2 className="mt-6 font-display uppercase font-black leading-[0.9] tracking-[-0.03em] text-[12vw] md:text-[5rem]">
            Your Kitchen.
            <br />
            GreekME Ready.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-3 md:gap-4">

          {/* WHAT YOU NEED */}
          <div className="rounded-xl bg-white text-[#111] p-6 md:p-8">
            <h3 className="font-display uppercase font-black text-lg">
              What You Need
            </h3>

            <ul className="mt-5">
              {WHAT_YOU_NEED.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 py-3 border-b border-black/10 text-[13px]"
                >
                  <span className="text-[#29ABE2] text-lg leading-none">
                    ♧
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WHAT GREEKME PROVIDES */}
          <div className="rounded-xl border-2 border-[#29ABE2] bg-[#050505] p-6 md:p-8">

            <h3 className="font-display uppercase font-black text-lg text-[#d7f000]">
              What GreekME Provides
            </h3>

            <ul className="mt-5">
              {WHAT_WE_PROVIDE.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 py-3 border-b border-white/10 text-[13px]"
                >
                  <span className="text-[#d7f000] text-lg font-bold">
                    ✓
                  </span>

                  <span className="text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Food image */}
            <div className="mt-5 h-[150px] md:h-[180px] overflow-hidden">
             <img
              src={grillImage}
              alt="GreekME grilled food preparation"
              className="w-full h-full object-cover"
            />
            </div>
          </div>
        </div>

        {/* Launch message */}
        <div className="mt-3 rounded-xl bg-white text-[#111] p-6 md:p-7">
          <p className="font-display uppercase font-black text-lg md:text-xl leading-[1.1]">
            Have an existing commercial kitchen?
            <br />
            You could be ready to launch in as little as{" "}
            <span className="text-[#b6d900]">
              2–3 weeks.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}