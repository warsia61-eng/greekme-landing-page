import React from "react";

const CHANNELS = [
  {
    tag: "AVAILABLE ON",
    name: "Deliveroo",
    bg: "bg-[#00CCBC]", // Deliveroo teal color
    textColor: "text-white",
    desc: "Available across UK stores. Order live on Deliveroo.",
    linkText: "ORDER ON DELIVEROO →",
    href: "https://deliveroo.co.uk/menu/london/putney/eggreeka-greek-breakfast-and-brunch/?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share",
  },
  {
    tag: "AVAILABLE ON",
    name: "Uber Eats",
    bg: "bg-[#06C167]", // Uber Eats green color
    textColor: "text-black",
    desc: "Fast & reliable delivery available nationwide.",
    linkText: "ORDER ON UBER EATS →",
    href: "https://deliveroo.co.uk/menu/london/putney/eggreeka-greek-breakfast-and-brunch/?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share",
  },
  {
    tag: "AVAILABLE ON",
    name: "Just Eat",
    bg: "bg-[#FF8000]", // Just Eat orange color
    textColor: "text-white",
    desc: "Order your favorite Greek meals on Just Eat.",
    linkText: "ORDER ON JUST EAT →",
    href: "https://deliveroo.co.uk/menu/london/putney/eggreeka-greek-breakfast-and-brunch/?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share",
  },
];

export default function DeliveryChannels() {
  return (
    <section className="border-t border-b border-black/10 bg-[#F4F4F0] text-[#111]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
        {/* Delivery Cards */}
        {CHANNELS.map((item) => (
          <div
            key={item.name}
            className="p-8 md:p-10 flex flex-col justify-between min-h-[300px] hover:bg-black/5 transition duration-300"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#777]">
                {item.tag}
              </span>
              <div className="mt-4">
                <span
                  className={`inline-block font-display font-black text-2xl md:text-3xl px-4 py-1.5 rounded-lg ${item.bg} ${item.textColor}`}
                >
                  {item.name}
                </span>
              </div>
              <p className="mt-6 text-[14px] text-[#555] leading-relaxed">
                {item.desc}
              </p>
            </div>

            <a
              href={item.href}
              target="_blank"
              className="mt-8 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#111] hover:text-[#29ABE2] transition"
            >
              {item.linkText}
            </a>
          </div>
        ))}

        {/* 4th Column - Contact Card */}
        <div className="p-8 md:p-10 flex flex-col justify-between min-h-[300px] bg-white">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#29ABE2]">
              GET IN TOUCH
            </span>
            <h3 className="mt-3 font-display uppercase font-black text-2xl md:text-3xl text-[#111]">
              Contact Us
            </h3>

            <div className="mt-6 space-y-4 text-[14px]">
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#888] tracking-wider">
                  Phone
                </span>
                <a
                  href="tel:+447879707203"
                  className="font-bold text-[#111] hover:text-[#29ABE2] transition text-base"
                >
                  +44 7879 707203
                </a>
              </div>

              <div>
                <span className="block text-[10px] uppercase font-bold text-[#888] tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:hello@food-verse.co.uk"
                  className="font-bold text-[#29ABE2] hover:underline transition"
                >
                  hello@food-verse.co.uk
                </a>
              </div>
            </div>
          </div>

          <a
            href="#apply"
            className="mt-8 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#111] hover:text-[#29ABE2] transition"
          >
            PARTNER WITH US →
          </a>
        </div>
      </div>
    </section>
  );
}
