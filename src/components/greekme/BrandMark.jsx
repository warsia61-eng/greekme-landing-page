import React from "react";

export default function BrandMark({ tone = "onDark", className = "", underline = true, as: Tag = "span" }) {
  const greek = tone === "onDark" ? "text-white" : "text-black";
  return (
    <Tag className={`font-display font-black uppercase tracking-[-0.02em] inline-flex items-baseline ${className}`}>
      <span className={greek}>GREEK</span>
      <span className="relative ml-[0.1em] text-[#29ABE2]">
        ME
        {underline && <span aria-hidden className="absolute -bottom-[0.1em] left-0 right-0 h-[3px] bg-[#29ABE2]/70 rounded-full" />}
      </span>
    </Tag>
  );
}
