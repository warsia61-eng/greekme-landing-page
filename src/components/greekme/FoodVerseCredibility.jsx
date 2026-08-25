// ✅ YE LINE ADD KAREIN:
const poweredImage = "/images/powered.jpg";

const PILLARS = [
  ["Multi-Brand Platform", "GreekME runs inside FoodVerse—a virtual kitchen platform powering multiple delivery concepts."],
  ["Delivery-Native", "Built around Deliveroo, Uber Eats and Just Eat from day one."],
  ["Shared Infrastructure", "One kitchen, multiple brands—equipment and staff shared across FoodVerse concepts."],
];

export default function FoodVerseCredibility() {
  return (
    <section id="credibility" className="bg-gradient-to-br from-[#29ABE2] to-[#00B8D4] text-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-white/80 text-[11px] uppercase tracking-[0.32em] font-bold">08 · The Ecosystem</span>
          <span className="block mt-3 h-[2px] w-10 bg-white" />
          <h2 className="mt-6 font-display uppercase font-black text-white leading-[0.95] tracking-[-0.03em] text-[12vw] md:text-[4.5rem]">
            Powered By<br />The Food-Verse<br />Ecosystem.
          </h2>
          <p className="mt-6 text-white/90 text-[16px] leading-[1.6] max-w-xl">
            GreekME isn&apos;t a standalone experiment. It&apos;s a core concept within{" "}
            <a href="https://food-verse.co.uk/ " target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline">
              FoodVerse
            </a>
             a multi-brand virtual kitchen platform powering delivery concepts across UK markets.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {PILLARS.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm p-5">
                <h3 className="font-display uppercase font-black text-white text-base leading-[1.05]">{t}</h3>
                <p className="mt-2 text-white/85 text-[13px] leading-[1.5]">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="https://food-verse.co.uk/" target="_blank" rel="noopener noreferrer" className="font-display font-black text-xl md:text-2xl uppercase tracking-[0.3em] text-white hover:brightness-110 transition">
              FOODVERSE
            </a>
            <a href="#apply" className="bg-white text-[#0A2A33] px-6 py-2 flex items-center font-bold uppercase rounded-full text-[11px] tracking-[0.2em] min-h-[44px] hover:bg-black hover:text-white transition">
              Become a Partner <span className="arrow-x">→</span>
            </a>
          </div>
        </div>

       <div className="relative overflow-hidden rounded-3xl border border-white/25 aspect-[4/5] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
          <img
            src={poweredImage}
            alt="FoodVerse Ecosystem"
            className="w-full h-full object-cover"
          />
      </div>
      </div>
    </section>
  );
}