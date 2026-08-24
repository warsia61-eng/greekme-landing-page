import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ children, eyebrow, dark = false, number, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={className}>
      
      {eyebrow &&
      <div className="mb-4">
          
          <span className="text-[#29ABE2] text-[11px] uppercase tracking-[0.32em] font-bold">{eyebrow}</span>
          <span className="block mt-3 h-[2px] w-10 bg-[#29ABE2]" />
        </div>
      }
      <h2 className={`font-display uppercase font-black leading-[1.05] tracking-[-0.03em] text-[12vw] md:text-[4.5rem] text-left ${dark ? "text-white" : "text-[#111]"}`}>
        {children}
      </h2>
    </motion.div>);

}