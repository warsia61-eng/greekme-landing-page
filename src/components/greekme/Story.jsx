import React from "react";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative bg-black py-28 md:py-40 overflow-hidden">
      <img
        src="https://media.base44.com/images/public/6a775434cd39f795c384e09d/7964597ec_generated_image.png"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-30" 
      />

      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />

      {/* MASSIVE SINGLE-LINE WATERMARK */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
        <span
          aria-hidden
          className="font-display uppercase font-black text-[42vw] md:text-[32vw] leading-none tracking-[-0.02em] text-white/[0.04] blur-[1px] whitespace-nowrap max-w-none"
        >
          GREEK ME
        </span>
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-80px" }} 
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#29ABE2] text-[11px] uppercase tracking-[0.32em] font-bold">02 · Our Story</span>
          <span className="block mx-auto mt-3 h-[2px] w-10 bg-[#29ABE2]" />
          <h2 className="mt-6 font-display uppercase font-black text-white leading-[0.95] tracking-[-0.03em] text-[13vw] md:text-[5.5rem] drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            One Brand. <br /><span className="font-display font-black text-[#29ABE2]">One Kitchen.</span> <br />One Big Greek Idea.
          </h2>
          <p className="mt-8 text-[#E5E5E5] text-[16px] md:text-[18px] leading-[1.7] max-w-2xl mx-auto">
            Greek food deserves a bigger stage. We brings the energy of Greek street food into a modern, delivery-first kitchen model, giving ambitious operators a brand, menu and system they can build with.
          </p>
        </motion.div>
      </div>
    </section>
  );
}