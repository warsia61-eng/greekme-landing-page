import React from "react";
import SectionTitle from "./SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QA = [
  ["What is the royalty model?", "Greek Me operates on a revenue-based royalty. Instead of a fixed monthly franchise fee, partners pay a royalty linked to business performance—so Greek Me succeeds when you succeed."],
  ["Is there a fixed monthly fee?", "No. There is no fixed monthly franchise fee. The partnership runs on a flexible royalty model, which lowers pressure during quieter periods."],
  ["What does the royalty cover?", "The royalty covers use of the Greek Me brand, menu, recipes, kitchen playbooks, training, marketing assets, and ongoing partner support. Royalty terms are discussed during the partnership process."],
  ["What do I need to provide?", "A licensed commercial kitchen, the required equipment, stock, staff, and standard operating costs such as rent and delivery commissions."],
  ["Do I need a commercial kitchen?", "Yes. Greek Me runs inside a licensed commercial or cloud kitchen. If you don't have one yet, we can advise on shared kitchen options."],
  ["What equipment is required?", "A flat-top or griddle, fryer, refrigeration and freezer, extraction, and prep surfaces. We provide a full equipment spec checklist before launch."],
  ["Is training included?", "Yes. The partner system includes a digital staff portal, video guides, recipe training, and speed-of-service guidance."],
  ["Do you help with delivery platforms?", "Yes. We help set up your listings on Deliveroo, Uber Eats, and Just Eat with photography, menu copy, and pricing structure."],
  ["What marketing support is provided?", "Launch campaign assets, promotional templates, social content kits, and seasonal campaigns—plus ongoing menu optimisation."],
  ["Can I operate other brands from my kitchen?", "Yes. Greek Me is designed as a multi-brand friendly concept that shares equipment and staff with your existing operation."],
  ["What additional operating costs should I expect?", "Kitchen rent, equipment, stock, staff, utilities, and delivery platform commissions remain your operating costs. These are separate from the royalty."],
  ["How does the application process work?", "Submit an enquiry, confirm your kitchen and details, receive the brand kit and playbook, train your team, then launch on your delivery platforms with ongoing Greek Me support."],
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white text-[#111] py-24 md:py-32">
      <div className="max-w-[1000px] mx-auto px-6">
        <SectionTitle number="09" eyebrow="FAQ">Got Questions?<br />We&apos;ve Got Answers.</SectionTitle>
        <Accordion type="single" collapsible className="mt-12">
          {QA.map(([q, a]) => (
            <AccordionItem key={q} value={q} className="border-b border-[#111]/15">
              <AccordionTrigger className="text-left font-display uppercase font-black text-lg md:text-xl text-[#111] py-6 hover:no-underline hover:text-[#29ABE2]">{q}</AccordionTrigger>
              <AccordionContent className="text-[#5A5A5A] text-[16px] leading-[1.6] pb-6">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
