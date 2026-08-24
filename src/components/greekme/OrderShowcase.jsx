import React from "react";
import { motion } from "framer-motion";

const DELIVEROO_URL = "https://deliveroo.co.uk/menu/london/putney/eggreeka-greek-breakfast-and-brunch/?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share";

const CATS = [
  { name: "Gyros", chip: "Slow-Rotated", meat: true, img: "https://media.base44.com/images/public/6a775434cd39f795c384e09d/8e4d1981b_generated_image.png", desc: "Slow-rotated, charred and wrapped in warm pita with crispy fries and house tzatziki." },
  { name: "Souvlaki", chip: "Flame-Grilled", meat: true, img: "https://media.base44.com/images/public/6a775434cd39f795c384e09d/0de3387c7_generated_image.png", desc: "Flame-grilled skewers marinated overnight, served with oregano fries." },
  { name: "Tzatziki", chip: "Signature Dip", meat: false, img: "https://media.base44.com/images/public/6a775434cd39f795c384e09d/2fb62f727_generated_image.png", desc: "Cool cucumber-yogurt, garlic and dill — the soul of every Greek bite." },
  { name: "Mezze & Dips", chip: "Share & Dip", meat: false, img: "https://media.base44.com/images/public/6a775434cd39f795c384e09d/ab6914d65_generated_image.png", desc: "Hummus, spicy feta and warm pita — made for sharing." },
  { name: "Salads & Bowls", chip: "Fresh & Bold", meat: false, img: "https://media.base44.com/images/public/6a775434cd39f795c384e09d/40d389c94_generated_image.png", desc: "Crisp village salads and loaded bowls, bright and fresh." },
  { name: "Sides", chip: "On The Side", meat: false, img: "https://media.base44.com/images/public/6a775434cd39f795c384e09d/44f24e394_generated_image.png", desc: "Oregano fries, falafel bites and pita chips to complete the feast." },
  { name: "Desserts", chip: "Sweet Finish", meat: false, img: "https://media.base44.com/images/public/6a775434cd39f795c384e09d/41a1925b3_generated_image.png", desc: "Honey-soaked baklava and sweet Greek treats to finish strong." },
];

export default function OrderShowcase() {
  return (
    <section id="order" className="scroll-mt-28 bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#29ABE2] text-[11px] uppercase tracking-[0.32em] font-bold">The Food</span>
          <span className="block mt-3 h-[2px] w-10 bg-[#29ABE2]" />
          <h2 className="mt-6 font-display uppercase font-black leading-[0.9] tracking-[-0.03em] text-[12vw] md:text-[5.5rem]">
            Greek Food.<br />
            <span className="text-[#29ABE2]">Made To Crave.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[#B8B8B8] text-[15px] md:text-[16px] leading-[1.6]">
            Gyros, souvlaki, tzatziki and more, a bold Greek menu built for delivery, takeaway and serious cravings.
          </p>
        </motion.div>
      </div>

      {/* Horizontal food carousel */}
      <div className="mt-14 md:mt-16">
        <div className="max-w-[1400px] mx-auto px-6 md:hidden">
          <p className="text-[#7A7A7A] text-[11px] uppercase tracking-[0.24em] font-bold">Swipe to explore →</p>
        </div>
        <div className="mt-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          <div className="flex gap-5 px-6 max-w-[1400px] mx-auto">
            {CATS.map((c) => (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="group snap-start shrink-0 w-[78vw] sm:w-[340px] bg-[#0E0E0E] border border-white/10 rounded-2xl overflow-hidden hover:border-[#29ABE2]/60 transition-colors"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                 <img
                  src={c.img}
                  alt={`${c.name} — GreekME`}
                  className="block w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#29ABE2] text-[#0A2A33] text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full">{c.chip}</span>
                  {c.meat && <span className="absolute top-4 right-4 bg-[#16a34a] text-white text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full">✓ Halal</span>}
                  <h3 className="absolute bottom-4 left-4 font-display uppercase font-black text-3xl tracking-[-0.02em] leading-none text-white">{c.name}<span className="text-[#29ABE2]">.</span></h3>
                </div>
                <div className="p-5">
                  <p className="text-[#B8B8B8] text-[13px] leading-[1.6]">{c.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Order CTA */}
      <div className="max-w-[1400px] mx-auto px-6 mt-20 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-gradient-to-br from-[#1A1A1A] to-black border border-white/10 px-6 md:px-12 py-14 md:py-16 text-center"
        >
          <span className="text-[#FF6900] text-[11px] uppercase tracking-[0.32em] font-bold">Order Now</span>
          <h3 className="mt-5 font-display uppercase font-black text-4xl md:text-6xl tracking-[-0.03em] leading-[0.95]">Ready To Eat Greek?</h3>
          <p className="mt-5 max-w-md mx-auto text-[#B8B8B8] text-[15px] md:text-[16px] leading-[1.6]">Craving the real thing? Order GreekME through Deliveroo.</p>
          <a
            href={DELIVEROO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[#FF6900] text-white px-8 py-3.5 font-display font-black uppercase rounded-full text-xs tracking-[0.2em] min-h-[52px] hover:brightness-110 transition shadow-[0_20px_50px_-18px_rgba(255,105,0,0.7)]"
          >
            Order On Deliveroo <span className="arrow-x">→</span>
          </a>
        </motion.div>
      </div>

      {/* B2B connection */}
      <div className="max-w-[1400px] mx-auto px-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-[2rem] border border-[#29ABE2]/30 bg-[#29ABE2]/[0.06] px-6 md:px-10 py-10"
        >
          <div className="max-w-xl">
            <h4 className="font-display uppercase font-black text-2xl md:text-3xl tracking-[-0.02em] leading-[0.95] text-white">Love The Food? <span className="text-[#29ABE2]">Build The Business.</span></h4>
            <p className="mt-3 text-[#B8B8B8] text-[14px] leading-[1.6]">Bring GreekME to your city and run the brand from your own kitchen.</p>
          </div>
          <a href="#apply" className="shrink-0 btn-greek inline-flex items-center gap-2 px-7 py-3.5 font-display font-black uppercase rounded-full text-xs tracking-[0.2em] min-h-[52px]">
            Become a GreekME Partner <span className="arrow-x">→</span>
          </a>
        </motion.div>
      </div>
      
    </section>
  );
}