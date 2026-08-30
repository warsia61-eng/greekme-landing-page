
const poweredImage = "/images/powered.jpg";

const PILLARS = [
  ["Multi-Brand Platform", "Greek Me runs inside food-verse—a virtual kitchen platform powering multiple delivery concepts."],
  ["Delivery-Native", "Built around Deliveroo, Uber Eats and Just Eat from day one."],
  ["Shared Infrastructure", "One kitchen, multiple brands—equipment and staff shared across food-verse concepts."],
];

export default function FoodverseCredibility() {
  return (
    <section id="credibility" className="bg-gradient-to-br from-[#29ABE2] to-[#00B8D4] text-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-white/80 text-[11px] uppercase tracking-[0.32em] font-bold">08 · The Ecosystem</span>
          <span className="block mt-3 h-[2px] w-10 bg-white" />
          <h2 className="mt-6 font-display uppercase font-black text-white leading-[0.95] tracking-[-0.02em] text-[12vw] md:text-[4.5rem]">
            Powered By<br />The Food<span className="text-[#FACC15] whitespace-nowrap">Verse</span><br />Ecosystem.
          </h2>
          <p className="mt-6 text-white/90 text-[16px] leading-[1.6] max-w-xl">
            Greek Me isn&apos;t a standalone experiment. It&apos;s a core concept within{" "}
            <a href="https://food-verse.co.uk/ " target="_blank" rel="noopener noreferrer" className="text-white font-bold">
              food-verse
            </a>
             &nbsp;a multi-brand virtual kitchen platform powering delivery concepts across UK cities.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {PILLARS.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm p-5">
                <h3 className="font-display uppercase font-bold text-white text-base leading-[1.05]">{t}</h3>
                <p className="mt-2 text-white/85 text-[13px] leading-[1.5]">{d}</p>
              </div>
            ))}
          </div>

          {/* food-verse CALLOUT BUTTON WRAPPER */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mt-6">
            <a
              href="#apply"
              className="hidden sm:flex items-center justify-center rounded-full bg-white px-8 py-3 text-xs font-black uppercase tracking-[0.15em] text-[#00A4E4] shadow-md transition-all hover:bg-zinc-100 active:scale-95"
            >
              BECOME A PARTNER →
            </a>
          </div>
        </div>

       <div className="relative overflow-hidden rounded-3xl border border-white/25 aspect-[4/5] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
          <img
            src={poweredImage}
            alt="food-verse Ecosystem"
            className="w-full h-full object-cover"
          />
      </div>
      </div>
    </section>
  );
}
